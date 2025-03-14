const mongoose = require("mongoose");

const universitySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    headmasterName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const University = mongoose.model("University", universitySchema);

module.exports = University;
