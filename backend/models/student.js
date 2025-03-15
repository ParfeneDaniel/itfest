const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    yearName: {
      type: String,
      required: true,
    },
    groupNumber: {
      type: Number,
      required: true,
    },
    upVotes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
