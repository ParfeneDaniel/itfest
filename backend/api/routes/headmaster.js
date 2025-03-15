const { Router } = require("express");
const errorHandler = require("../../middlewares/errorHandler");
const authorization = require("../../middlewares/authorization");

const router = Router();

router.use(authorization);

router.use(errorHandler);

module.exports = router;
