const mongoose = require("mongoose");

const groupSchema = mongoose.Schema(
  {
    headmasterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Headmaster",
      required: true,
    },
    yearName: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    students: [{ type: String }],
    subjects: [
      {
        name: {
          type: String,
          required: true,
          unique: true,
        },
        id: {
          type: String,
          required: true,
          unique: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
