const router = require("express").Router();
const userRouter = require("./User.router");
const profileRouter = require("./profile.Router");

router.use("/user", userRouter);
router.use("/profile", profileRouter);

module.exports = router;
