const userModel = require("../models/user-model");
const userService = require("../services/user-service");
const { validationResult } = require("express-validator");
const BlackListToken = require("../models/blackListToken-model");
module.exports.registerUser = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;
    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();
    res.status(201).json({ token, user });
  } catch (error) {
    // Handle specific error types
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }
    if (error.code === 11000) {
      // MongoDB duplicate key error
      return res.status(409).json({ error: "Email already exists" });
    }
    // Pass unexpected errors to Express error handler
    next(error);
  }
};

module.exports.loginUser = async function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({ email });
  
  if (isUserAlreadyExist) {
    return res.status(400).json({ error: "User already exists" });
  }

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = user.generateAuthToken();

  res.cookie("token", token);
  res.status(200).json({ token, user });
};

module.exports.getUserProfile = async function (req, res, next) {
  res.status(200).json(req.user);
};

module.exports.logoutUser = async function (req, res, next) {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await BlackListToken.create({ token });
  res.status(200).json({ message: "Logged out successfully" });
};
