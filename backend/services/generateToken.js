const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

const generateToken = (id, role, res, email, groups) => {
  var obj = { id, role };
  if (role == "student") {
    obj["email"] = email;
    obj["groups"] = groups;
  }
  const token = jwt.sign(obj, jwtSecret, {
    expiresIn: "1d",
  });

  res.cookie("jwt", token, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    samSite: "strict",
    secure: true,
  });
};

module.exports = generateToken;
