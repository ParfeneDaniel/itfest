const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    subjectId: {
      type: String,
      required: true,
      unique: true,
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    creatorName: {
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
