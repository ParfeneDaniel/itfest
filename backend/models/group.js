const mongoose = require("mongoose");

const groupSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pending: [{ type: String }],
    accepted: [{ type: String }],
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
