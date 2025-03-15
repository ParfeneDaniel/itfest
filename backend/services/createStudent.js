const Student = require("../models/student");
const createPassword = require("./createPassword");
const sendEmail = require("./sendEmail");
const createStudentAccount = require("../data/createStudent");

const createStudent = async (email, year, number) => {
  const { password, hashedPassword } = createPassword();
  const student = new Student({
    email,
    yearName: year,
    groupNumber: number,
    password: hashedPassword,
  });

  await Promise.all([
    student.save(),
    sendEmail(email, ...createStudentAccount(password)),
  ]);
};

module.exports = createStudent;
