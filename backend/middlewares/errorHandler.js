const BadRequest = require("../errors/BadRequest");
const Conflict = require("../errors/Conflict");
const Forbidden = require("../errors/Forbidden");
const NotFound = require("../errors/NotFound");
const Unauthorized = require("../errors/Unauthorized");
const Unprocessable = require("../errors/Unprocessable");

const errorHandler = (error, req, res, next) => {
  if (error instanceof BadRequest) {
    return res
      .status(400)
      .json({ message: error.message, details: error.details });
  }

  if (error instanceof Unauthorized) {
    return res
      .status(401)
      .json({ message: error.message, details: error.details });
  }

  if (error instanceof Forbidden) {
    return res
      .status(403)
      .json({ message: error.message, details: error.details });
  }

  if (error instanceof NotFound) {
    return res
      .status(404)
      .json({ message: error.message, details: error.details });
  }

  if (error instanceof Conflict) {
    return res
      .status(409)
      .json({ message: error.message, details: error.details });
  }

  if (error instanceof Unprocessable) {
    return res
      .status(422)
      .json({ message: error.message, details: error.details });
  }

  console.log(error);

  return res
    .status(500)
    .json({ message: "Internal Server Error", error: error.message });
};

module.exports = errorHandler;