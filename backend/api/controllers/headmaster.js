const Group = require("../../models/group");
const Headmaster = require("../../models/headmaster");
const createStudent = require("../../services/createStudent");
const crypto = required("crypto");

const createYear = async (req, res) => {
  const { name, groups, subjects } = req.body;
  const userId = req.user.id;
  const headmaster = await Headmaster.findById(userId);

  const yearGroups = [];
  const yearSubjects = [];

  for (const subject of subjects) {
    yearSubjects.push({
      name: subject,
      id: crypto.randomBytes(16).toString("hex"),
    });
  }

  for (let i = 0; i <= groups; ++i) {
    const group = new Group({
      yearName: name,
      number: i,
      subjects: yearSubjects,
    });

    await group.save();

    yearGroups.push({ id: group._id, number: i });
  }

  const year = {
    name,
    groups: yearGroups,
    subjects,
  };

  headmaster.years.push(year);

  await headmaster.save();

  return res
    .status(201)
    .json({ message: "The whole year with all groups was created!" });
};

const addStudents = async (req, res) => {
  const { emails } = req.body;
  const groupId = req.params.groupId;
  const group = await Group.findById(groupId);

  for (const email of emails) {
    await createStudent(email, group.yearName, group.number);
    group.pending.push(email);
  }

  await group.save();

  return res.status(200).json({ message: "New students were added" });
};

module.exports = { createYear, addStudents };
