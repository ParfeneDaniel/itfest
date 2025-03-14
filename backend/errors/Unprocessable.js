class Unprocessable extends Error {
  constructor(message, details) {
    super(message);
    this.details = details;
  }
}

module.exports = Unprocessable;
