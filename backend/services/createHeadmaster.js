const bcrypt = require("bcryptjs");
const Forbidden = require("../errors/Forbidden");

const correctPassword = (password, hashedPassword) => {
  const correctPassword = bcrypt.compareSync(password, hashedPassword);
  if (!correctPassword) {
    throw new Forbidden(
      "Password is not correct",
      "Login with correct password"
    );
  }
};

module.exports = correctPassword;
