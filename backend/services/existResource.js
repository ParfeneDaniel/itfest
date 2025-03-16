const NotFound = require("../errors/NotFound");

const existResource = (resource) => {
  if (!resource) {
    throw new NotFound(
      "This resource was not found",
      "Try searching with the correct id"
    );
  }
};

module.exports = existResource;
