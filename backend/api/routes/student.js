const { Router } = require("express");
const authorization = require("../../middlewares/authorization");
const errorHandler = require("../../middlewares/errorHandler");
const tryCatch = require("../../utils/tryCatch");
const {
  createPost,
  getGroups,
  getSubjects,
  updateStudentAccount,
  createComment,
  getStudent,
  getPosts,
  getComments,
  requestTransfer,
  getTransfers,
} = require("../controllers/student");
const validIds = require("../../middlewares/validIds");

const router = Router();

router.use(authorization("student"));
router.use(validIds);
router.post("/post/:groupId", tryCatch(createPost));
router.get("/groups", tryCatch(getGroups));
router.get("/subjects/:groupId", tryCatch(getSubjects));
router.patch("/student", tryCatch(updateStudentAccount));
router.post("/comment/:postId", tryCatch(createComment));
router.get("/student/:studentId/:groupId", tryCatch(getStudent));
router.get("/posts/:groupId/:subjectId", tryCatch(getPosts));
router.get("/comments/:postId", tryCatch(getComments));
router.post("/transfer", tryCatch(requestTransfer));
router.get("/transfers", tryCatch(getTransfers));
router.use(errorHandler);

module.exports = router;
