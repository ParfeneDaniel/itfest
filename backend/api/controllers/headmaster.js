const Group = require("../../models/group");
const Headmaster = require("../../models/headmaster");
const Student = require("../../models/student");
const createStudent = require("../../services/createStudent");
const existResource = require("../../services/existResource");
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

  for (let i = 1; i <= groups; ++i) {
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

const enrollStudents = async (req, res) => {
  const { emails } = req.body;
  const groupId = req.params.groupId;
  const group = await Group.findById(groupId);
  existResource(group);

  for (const email of emails) {
    await createStudent(email, group.id, group.yearName, group.number);
    group.students.push(email);
  }

  await group.save();

  return res.status(200).json({ message: "New students were added" });
};

const addStudents = async (req, res) => {
  const { emails } = req.body;
  const groupId = req.params.groupId;
  const group = await Group.findById(groupId);
  existResource(group);

  for (const email of emails) {
    const student = await Student.findOne({ email });
    if (student) {
      group.students.push(email);
      student.groups.push({ id: group._id, number: group.number });
    }
  }

  await group.save();

  return res
    .status(200)
    .json({ message: "New students were added to this group" });
};

const deleteStudent = async (req, res) => {
  const groupId = req.params.groupId;
  const email = req.params.studentEmail;
  const [group, student] = await Promise.all([
    Group.findById(groupId),
    Student.findOne({ email }),
  ]);
  existResource(group);
  existResource(student);

  group.students = group.students.filter((student) => student != email);

  if (student.groups.length == 1) {
    await Promise.all([Student.findOneAndDelete({ email }), group.save()]);

    return res
      .status(200)
      .json({ message: "This student account was deleted" });
  }

  student.groups = student.groups.filter((group) => group.id != groupId);

  await Promise.all([group.save(), student.save()]);

  return res
    .status(200)
    .json({ message: "This student was deleted from this group" });
};

const getStudents = async (req, res) => {
  const groupId = req.params.groupId;
  const group = await Group.findById(groupId);
  existResource(group);

  return res.status(200).json({ students: group.students });
};

module.exports = {
  createYear,
  enrollStudents,
  addStudents,
  deleteStudent,
  getStudents,
};
