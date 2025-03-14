const Request = require("../../models/request");
const University = require("../../models/university");

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

  const newUniversity = new University({
    name: request.universityName,
    headmasterName: request.headmasterName,
    email: request.email,
  });

  

  await Promise.all([newUniversity.save()]);
};

module.exports = { getRequests, getUniversities, acceptRequest };
