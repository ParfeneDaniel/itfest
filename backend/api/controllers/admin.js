const Request = require("../../models/request");
const University = require("../../models/university");
const createHeadmasterAccount = require("../../services/createHeadmaster");
const sendEmail = require("../../services/sendEmail");
const createHeadmasterEmail = require("../../data/createHeadmaster");
const rejectHeadmaster = require("../../data/rejectHeadmaster");
const existResource = require("../../services/existResource");
const validateHeadmaster = require("../../data/validateHeadmaster");

const sendRequest = async (req, res) => {
  const { email, headmasterName, universityName, description } = req.body;

  const request = await Request({
    email,
    headmasterName,
    universityName,
    description,
  });

  await request.save();

  return res
    .status(201)
    .json({ message: "Your request to enroll your department was send!" });
};

const getRequests = async (req, res) => {
  const requests = await Request.find({}).sort({ createdAt: -1 });

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

  const password = await createHeadmasterAccount(request.email);

  await Promise.all([
    newUniversity.save(),
    sendEmail(
      request.email,
      createHeadmasterEmail(password).subject,
      createHeadmasterEmail(password).html
    ),
  ]);

  return res.status(201).json({ message: "Your request was accepted!" });
};

const rejectRequest = async (req, res) => {
  const requestId = req.params.requestId;
  const request = await Request.findByIdAndDelete(requestId);
  existResource(request);

  await sendEmail(
    request.email,
    rejectHeadmaster().subject,
    rejectHeadmaster().html
  );

  return res.status(200).json({ message: "Your request was rejected!" });
};

const validateIdentity = async (req, res) => {
  const requestId = req.params.requestId;
  const request = await Request.findById(requestId);
  existResource(request);

  request.validation = true;

  await Promise.all([
    sendEmail(
      request.email,
      validateHeadmaster().subject,
      validateHeadmaster().html
    ),
    request.save(),
  ]);

  return res.status(200).json({ message: "Validation was send!" });
};

module.exports = {
  sendRequest,
  getRequests,
  getUniversities,
  acceptRequest,
  rejectRequest,
  validateIdentity,
};
