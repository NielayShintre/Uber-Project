const express = require("express");
const router = express.Router();
const captainController = require("../controllers/captain-controller");
const { body } = require("express-validator");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be atleast 3 characters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be atleast 3 characters"),
    body("vehicle.plate")
      .isLength({ min: 7 })
      .withMessage("Vehicle plate must be atleast 7 characters"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Vehicle capacity must be atleast 1"),
    body("vehicle.vehicleType")
      .isIn(["Car", "Motorbike", "Auto"])
      .withMessage("Vehicle type must be in Car, Motorbike, Bicycle"),
  ],
  captainController.registerCaptain
);

module.exports = router;
