const mongoose = require("mongoose");

const transferSchema = mongoose.Schema(
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
    groupNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Transfer = mongoose.model("Transfer", transferSchema);

module.exports = Transfer;
