const { Router } = require("express");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const headmasterRouter = require("./routes/headmaster");

const router = Router();

router.use("/auth", authRouter);
router.use("/admin", adminRouter);
router.use("/headmaster", headmasterRouter);

module.exports = router;
