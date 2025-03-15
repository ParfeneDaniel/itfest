const { Router } = require("express");
const errorHandler = require("../../middlewares/errorHandler");
const authorization = require("../../middlewares/authorization");
const tryCatch = require("../../utils/tryCatch");
const { createYear } = require("../controllers/headmaster");

const router = Router();

router.use(authorization("headmaster"));
router.post("/year", tryCatch(createYear));
router.post("/addStudents/:groupId", tryCatch());
router.use(errorHandler);

module.exports = router;
