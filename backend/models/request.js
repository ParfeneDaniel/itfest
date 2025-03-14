const mongoose = require("mongoose");

const requestSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    headmasterName: {
      type: String,
      required: true,
    },
    universityName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
