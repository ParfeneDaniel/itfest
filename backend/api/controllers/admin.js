const Request = require("../../models/request");
const University = require("../../models/university");
const createHeadmasterAccount = require("../../services/createHeadmaster");
const sendEmail = require("../../services/sendEmail");
const createHeadmasterEmail = require("../../data/createHeadmaster");
const validateHeadmaster = require("../../data/validateHeadmaster");
const rejectHeadmaster = require("../../data/rejectHeadmaster");
const existResource = require("../../services/existResource");

const getRequests = async (req, res) => {
  const requests = await Request.find({});

  return res.status(200).json({ requests });
};

const getUniversities = async (req, res) => {
  const universities = await University.find({});

  return res.status(200).json({ universities });
};

const acceptRequest = async (req, res) => {
  const requestId = req.params.requestId;
  const request = await Request.findByIdAndDelete(requestId);
  existResource(request);

  const newUniversity = new University({
    name: request.universityName,
    headmasterName: request.headmasterName,
    email: request.email,
  });

  const { newHeadmaster, password } = createHeadmasterAccount(request.email);

  await Promise.all([
    newUniversity.save(),
    newHeadmaster.save(),
    sendEmail(newHeadmaster.email, ...createHeadmasterEmail(password)),
  ]);

  return res.status(201).json({ message: "Your request was accepted!" });
};

const rejectRequest = async (req, res) => {
  const requestId = req.params.requestId;
  const request = await Request.findByIdAndDelete(requestId);
  existResource(request);

  await sendEmail(request.email, ...rejectHeadmaster());

  return res.status(200).json({ message: "Your request was rejected!" });
};

const validateIdentity = async (req, res) => {
  const requestId = req.params.requestId;
  const request = await Request.findById(requestId);
  existResource(request);

  await sendEmail(request.email, ...validateHeadmaster());

  return res.status(200).json({ message: "Validation was send!" });
};

module.exports = {
  getRequests,
  getUniversities,
  acceptRequest,
  rejectRequest,
  validateIdentity,
};
