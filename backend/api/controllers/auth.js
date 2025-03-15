const Headmaster = require("../../models/headmaster");
const Student = require("../../models/student");
const correctPassword = require("../../services/correctPassword");
const generateToken = require("../../services/generateToken");
require("dotenv").config();

const ADMIN = process.env.ADMIN;

const login = async (req, res) => {
  const { email, password, type } = req.body;

  if (type == "admin") {
    correctPassword(password, ADMIN);
    generateToken("", "admin", res);
  } else if (type == "headmaster") {
    const headmaster = await Headmaster.findOne({ email });
    correctPassword(password, headmaster.password);
    generateToken(headmaster._id, "headmaster", res);
  } else if (type == "student") {
    const student = await Student.findOne({ email });
    correctPassword(password, student.password);
    generateToken(student._id, "student", res);
  }

  return res.status(200).json({ message: "You are logged in" });
};

module.exports = { login };
