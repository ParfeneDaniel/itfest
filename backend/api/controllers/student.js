const BadRequest = require("../../errors/BadRequest");
const Forbidden = require("../../errors/Forbidden");
const Comment = require("../../models/comments");
const Group = require("../../models/group");
const Post = require("../../models/post");
const Student = require("../../models/student");
const Transfer = require("../../models/transfer");
const existResource = require("../../services/existResource");

const limit = 10;

const createPost = async (req, res) => {
  const { subjectId, question, details } = req.body;
  const groupId = req.params.groupId;
  const { studentId, email, groups } = req.user;

  if (!groups.find((group) => group.id == groupId)) {
    throw new Forbidden(
      "You are not enroll in this group",
      "Try to post on your groups"
    );
  }

  const group = await Group.findById(groupId);

  if (!group.subjects.find((subject) => subject.id == subjectId)) {
    throw new Forbidden(
      "You do not have access to this channel",
      "Try access the channels where you are enrolled"
    );
  }

  const newPost = new Post({
    subjectId,
    groupId,
    groupNumber: group.number,
    creatorId: studentId,
    creatorEmail: email,
    question,
    details,
  });

  await newPost.save();

  return res.status(201).json({ message: "Post was created!" });
};

const getGroups = async (req, res) => {
  const studentId = req.user.id;
  const student = await Student.findById(studentId);

  return res.status(200).json({ groups: student.groups });
};

const getSubjects = async (req, res) => {
  const groupId = req.params.groupId;
  const groups = req.user.groups;

  if (!groups.find((group) => group.id == groupId)) {
    throw new Forbidden(
      "You are not enrolled in this group.",
      "Try to access your groups."
    );
  }

  const group = await Group.findById(groupId);

  return res.status(200).json({ subjects: group.subjects });
};

const updateStudentAccount = async (req, res) => {
  const { name, details } = req.body;
  const studentId = req.user.id;
  const student = await Student.findById(studentId);
  student.name = name;
  student.details = details;

  await student.save();

  return res.status(200).json({ message: "Your profile was update!" });
};

const createComment = async (req, res) => {
  const { description } = req.body;
  const postId = req.params.postId;
  const { studentId, email, groups } = req.user.id;
  const post = await Post.findById(postId);
  existResource(post);

  if (!groups.find((group) => group.id == post.groupId)) {
    throw new Forbidden(
      "This post is not for your groups",
      "Try to comment posts from your group"
    );
  }

  const newPost = new Comment({
    postId,
    creatorId: studentId,
    creatorEmail: email,
    description,
  });

  await newPost.save();

  return res
    .status(201)
    .json({ message: "Your post was created!", post: newPost });
};

const getStudent = async (req, res) => {
  const { studentId, groupId } = req.params;
  const groups = req.user.groups;

  if (!groups.find((group) => group.id == groupId)) {
    throw new Forbidden(
      "You do not have a common group with this student",
      "Try to access students from your groups"
    );
  }

  const student = await Student.findById(studentId);
  existResource(student);

  return res.status(200).json({
    email: student.email,
    name: student.name,
    description: student.description,
    upVotes: student.upVotes,
  });
};

const getPosts = async (req, res) => {
  const { groupId, subjectId } = req.params;
  const page = req.query.page;
  const groups = req.user.group;

  if (!groups.find((group) => group.id == groupId)) {
    throw new Forbidden(
      "You are not in this group",
      "Try to access posts from your groups"
    );
  }

  const group = await Group.findById(groupId);
  if (!group.subjects.find((subject) => subject.id == subjectId)) {
    throw new Forbidden(
      "You are not allowed to visit this channel",
      "Try to access the channels were you were enrolled"
    );
  }

  const [posts, countPosts] = await Promise.all([
    Post.find({ subjectId })
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 }),
    Post.countDocuments({ subjectId }),
  ]);

  var pages;
  if (countPosts % limit == 10) {
    pages = countPosts / limit;
  } else {
    pages = countPosts / limit + 1;
  }

  return res.status(200).json({ posts, pages });
};

const getComments = async (req, res) => {
  const postId = req.params.postId;
  const groups = req.user.groups;
  const post = await Post.findById(postId);
  existResource(post);

  if (!groups.find((group) => group.id != post.groupId)) {
    throw new Forbidden(
      "This post is not in your channels",
      "Try get comments from posts in your channels"
    );
  }

  const comments = await Comment.find({ postId });

  return res.status(200).json({ comments });
};

const requestTransfer = async (req, res) => {
  const { email, groups } = req.user;
  const { groupNumber } = req.body;

  if (groups.find((group) => group.number == groupNumber)) {
    throw new BadRequest(
      "You already are is this group",
      "Fell free to start helping others!"
    );
  }

  const group = await Group.findById(groups[0].id);

  const transfer = new Transfer({
    headmasterId: group.headmasterId,
    yearName: group.yearName,
    groupNumber,
    email,
  });

  await transfer.save();

  return res
    .status(200)
    .json({ message: "You request for adding in another group was send!" });
};

const getTransfers = async (req, res) => {
  const email = req.user.email;

  const transfers = await Transfer.find({ email });

  return res.status(200).json({ transfers });
};

module.exports = {
  createPost,
  getGroups,
  getSubjects,
  updateStudentAccount,
  createComment,
  getStudent,
  getPosts,
  getComments,
  requestTransfer,
  getTransfers,
};
