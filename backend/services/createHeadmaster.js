const Headmaster = require("../models/headmaster");
const createPassword = require("./createPassword");

const createHeadmasterAccount = async (email) => {
  const { password, hashedPassword } = createPassword();
  const newHeadmaster = new Headmaster({ email, password: hashedPassword });

  return { newHeadmaster, password };
};

module.exports = createHeadmasterAccount;
