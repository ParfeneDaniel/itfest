const { Router } = require("express");
const tryCatch = require("../../utils/tryCatch");
const { login, changePassword } = require("../controllers/auth");
const errorHandler = require("../../middlewares/errorHandler");

const router = Router();

router.post("/login", tryCatch(login));
router.use(errorHandler);

module.exports = router;
