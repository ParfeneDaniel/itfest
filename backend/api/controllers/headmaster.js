const Group = require("../../models/group");
const Headmaster = require("../../models/headmaster");
const Student = require("../../models/student");
const Transfer = require("../../models/transfer");
const createStudent = require("../../services/createStudent");
const existResource = require("../../services/existResource");
const crypto = require("crypto");

const createYear = async (req, res) => {
  const { name, groups, subjects } = req.body;
  const headmasterId = req.user.id;
  const headmaster = await Headmaster.findById(headmasterId);

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
      headmasterId,
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
      await student.save();
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

const acceptTransfer = async (req, res) => {
  const transferId = req.params.transferId;
  const headmasterId = req.user.id;
  const [transfer, headmaster] = await Promise.all([
    Transfer.findById(transferId),
    Headmaster.findById(headmasterId),
  ]);
  existResource(transferId);

  for (const year of headmaster.years) {
    if (year.name == transfer.yearName) {
      for (const gr of year.groups) {
        if (gr.number == transfer.groupNumber) {
          const [group, student] = await Promise.all([
            Group.findById(gr.id),
            Student.findOne({ email: transfer.email }),
          ]);
          group.student.push(transfer.email);
          student.group.push({ id: group._id, number: groupNumber });

          await Promise.all([
            group.save(),
            student.save(),
            Transfer.findByIdAndDelete(transferId),
          ]);
        }
      }
      break;
    }
  }

  return res.status(200).json({ message: "You were added in that group" });
};

const rejectTransfer = async (req, res) => {
  const transferId = req.params.transferId;
  await Transfer.findByIdAndDelete(transferId);

  return res.status(200).json({ message: "You were added in that group" });
};

const getTransfers = async (req, res) => {
  const yearName = req.params.yearName;
  const headmasterId = req.user.id;
  const transfers = await Transfer.find({
    $and: [{ headmasterId }, { yearName }],
  });

  return res.status(200).json({ transfers });
};

module.exports = {
  createYear,
  enrollStudents,
  addStudents,
  deleteStudent,
  getStudents,
  acceptTransfer,
  rejectTransfer,
  getTransfers,
};
