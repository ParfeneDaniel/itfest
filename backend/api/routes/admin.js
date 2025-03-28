const { Router } = require("express");
const errorHandler = require("../../middlewares/errorHandler");
const tryCatch = require("../../utils/tryCatch");
const {
  getRequests,
  getUniversities,
  acceptRequest,
  rejectRequest,
  validateIdentity,
  sendRequest,
} = require("../controllers/admin");
const authorization = require("../../middlewares/authorization");
const validIds = require("../../middlewares/validIds");

const router = Router();

router.post("/request", tryCatch(sendRequest)); //✅
router.use(authorization("admin"));
router.use(validIds);
router.get("/requests", tryCatch(getRequests)); // ✅
router.get("/universities", tryCatch(getUniversities)); // ✅
router.post("/request/:requestId", tryCatch(acceptRequest)); // ✅
router.delete("/request/:requestId", tryCatch(rejectRequest)); // ✅
router.post("/validate/:requestId", tryCatch(validateIdentity)); // ✅
router.use(errorHandler);

module.exports = router;
