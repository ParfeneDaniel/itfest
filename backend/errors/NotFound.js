class NotFound extends Error {
  constructor(message, details) {
    super(message);
    this.details = details;
  }
}

module.exports = NotFound;
