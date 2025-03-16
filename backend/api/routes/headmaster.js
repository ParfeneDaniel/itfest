const { Router } = require("express");
const errorHandler = require("../../middlewares/errorHandler");
const authorization = require("../../middlewares/authorization");
const tryCatch = require("../../utils/tryCatch");
const {
  createYear,
  enrollStudents,
  addStudents,
  deleteStudent,
  getStudents,
} = require("../controllers/headmaster");
const validIds = require("../../middlewares/validIds");

const router = Router();

router.use(authorization("headmaster"));
router.use(validIds);
router.post("/year", tryCatch(createYear));
router.post("/enroll-students/:groupId", tryCatch(enrollStudents));
router.post("/add-students/:groupId", tryCatch(addStudents));
router.delete("/student/:groupId/:studentEmail", tryCatch(deleteStudent));
router.get("/students/:groupId", tryCatch(getStudents));
router.use(errorHandler);

module.exports = router;
