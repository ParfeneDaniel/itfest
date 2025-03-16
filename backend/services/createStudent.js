const Student = require("../models/student");
const createPassword = require("./createPassword");
const sendEmail = require("./sendEmail");
const createStudentAccount = require("../data/createStudent");

const createStudent = async (email, id, year, number) => {
  const { password, hashedPassword } = createPassword();
  const student = new Student({
    email,
    yearName: year,
    groups: [{ id, number }],
    password: hashedPassword,
  });

  await Promise.all([
    student.save(),
    sendEmail(
      email,
      createStudentAccount(number, password).subject,
      createStudentAccount(number, password).html
    ),
  ]);
};

module.exports = createStudent;
