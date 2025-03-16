const { Router } = require("express");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const headmasterRouter = require("./routes/headmaster");
const studentRouter = require("./routes/student");

const router = Router();

router.use("/auth", authRouter);
router.use("/admin", adminRouter);
router.use("/headmaster", headmasterRouter);
router.use("/student", studentRouter);

module.exports = router;
