const userRouter = require("express").Router();
const {
  getAllUser,
  getUserById,
  postUser,
  putUserById,
  deleteUserById,
} = require("../Controllers/User.controller");

userRouter.get("/", getAllUser);

userRouter.post("/", postUser);

userRouter.get("/:id", getUserById);

userRouter.put("/:id", putUserById);

userRouter.delete("/:id", deleteUserById);

module.exports = userRouter;
