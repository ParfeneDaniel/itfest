const mongoose = require("mongoose");

const headmasterSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    groups: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Group",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        subjects: [{ type: String, unique: true }],
      },
    ],
  },
  { timestamps: true }
);

const Headmaster = mongoose.model("Headmaster", headmasterSchema);

module.exports = Headmaster;
