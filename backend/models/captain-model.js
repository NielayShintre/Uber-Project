const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minLength: [3, "First name must be atleast 3 charaters long"],
    },
    lastname: {
      type: String,
      minLength: [3, "Last name must be atleast 3 charaters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, "Email must be atleast 5 charaters long"],
  },
  password: {
    type: String,
    required: true,
    select: false,
    minLength: [6, "Email must be atleast 5 charaters long"]
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minLength: [3, "Color must be atleast 3 charaters long"],
    },
    plate: {
      type: String,
      required: true,
      minLength: [7, "Plate number must be atleast 7 charaters long"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be atleast 1"],
    },
    vehicleType: {
      type: String,
      enum: ["Car", "Motorbike", "Auto"],
      required: true,
    },
  },

  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  return bcrypt.hash(password, 10);
};

const captainModel = mongoose.model("Captain", captainSchema);

module.exports = captainModel;
