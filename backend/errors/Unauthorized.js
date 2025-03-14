class Unauthorized extends Error {
  constructor(message, details) {
    super(message);
    this.details = details;
  }
}

module.exports = Unauthorized;
