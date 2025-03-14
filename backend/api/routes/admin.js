const { Router } = require("express");
const errorHandler = require("../../middlewares/errorHandler");
const tryCatch = require("../../utils/tryCatch");
const {
  getRequests,
  getUniversities,
  acceptRequest,
} = require("../controllers/admin");

const router = Router();

router.get("/requests", tryCatch(getRequests));
router.get("/universities", tryCatch(getUniversities));
router.post("/request/:requestId", tryCatch(acceptRequest));
router.use(errorHandler);

module.exports = errorHandler;
