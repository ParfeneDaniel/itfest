const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    subjectId: {
      type: String,
      required: true,
      unique: true,
    },
    groupId: {
      type: mongoose.Types.Schema.ObjectId,
      ref: "Group",
      required: true,
    },
    groupNumber: {
      type: Number,
      required: true,
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    creatorEmail: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    details: {
      type: String,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
