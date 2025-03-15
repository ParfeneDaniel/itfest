const nodemailer = require("nodemailer");
require("dotenv").config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

const sendEmail = async (to, subject, html) => {
  const mailOption = {
    from: EMAIL,
    to,
    subject,
    html,
  };

  await transporter.sendMail(mailOption);
};

module.exports = sendEmail;
