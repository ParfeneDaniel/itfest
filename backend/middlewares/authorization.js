const jwt = require("jsonwebtoken");
const Forbidden = require("../errors/Forbidden");
const Unauthorized = require("../errors/Unauthorized");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const authorization = (role) => (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return next(new Forbidden("You are not authorized", "Login first"));
    }

    jwt.verify(token, JWT_SECRET, async (error, user) => {
      if (error) {
        return next(new Unauthorized("Token is not valid", "Login again"));
      }

      if (user.role != role) {
        return next(
          new Unauthorized(
            "You are not authorized to access those resources",
            "Try to access what you are authorized"
          )
        );
      }

      req.user = user;

      next();
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = authorization;
