const profileRouter = require("express").Router();
const { postprofile } = require("../Controllers/profile.controller");
const { upload } = require("../Multer/Multer.config");


// const {
//   getAllprofile,
//   getprofileById,
//   postprofile,
//   putprofileById,
//   deleteprofileById,
// } = require("../Controllers/profile.controller");

// profileRouter.get("/", getAllprofile);


 profileRouter.post("/", upload.single("profileImg"), postprofile);

// profileRouter.get("/:id", getprofileById);

// profileRouter.put("/:id", putprofileById);

// profileRouter.delete("/:id", deleteprofileById);

module.exports = profileRouter;
