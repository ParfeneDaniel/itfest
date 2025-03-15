const NotFound = require("../errors/NotFound");

const existResource = (resource) => {
  if (!resource) {
    throw new NotFound(
      "This resorce was not found",
      "Try searching with the correct id"
    );
  }
};

module.exports = existResource;
