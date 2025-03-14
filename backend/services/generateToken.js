const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

const generateToken = (id, role, res) => {
  const token = jwt.sign({ id, role }, jwtSecret, {
    expiresIn: "1d",
  });

  res.cookie("learnX_jwt", token, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    samSite: "strict",
    secure: true,
  });
};

module.exports = generateToken;
