const { Router } = require("express");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");

const router = Router();

router.use("/auth", authRouter);
router.use("/admin", adminRouter);

module.exports = router;
