const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const createPassword = () => {
  const password = crypto.randomBytes(8).toString("hex");
  const hashedPassword = bcrypt.hashSync(password, 12);

  return { password, hashedPassword };
};

module.exports = createPassword;
