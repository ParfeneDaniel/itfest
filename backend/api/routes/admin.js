const { Router } = require("express");
const errorHandler = require("../../middlewares/errorHandler");
const tryCatch = require("../../utils/tryCatch");
const {
  getRequests,
  getUniversities,
  acceptRequest,
  rejectRequest,
  validateIdentity,
} = require("../controllers/admin");
const authorization = require("../../middlewares/authorization");

const router = Router();

router.use(authorization("admin"));
router.get("/requests", tryCatch(getRequests));
router.get("/universities", tryCatch(getUniversities));
router.post("/request/:requestId", tryCatch(acceptRequest));
router.delete("/request/:requestId", tryCatch(rejectRequest));
router.post("/validate-request/:requestId", tryCatch(validateIdentity));
router.use(errorHandler);

module.exports = errorHandler;
