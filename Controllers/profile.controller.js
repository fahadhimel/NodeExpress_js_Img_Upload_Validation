const db = require("../config/db");

const postprofile = (req, res) => {
    res
      .status(201)
      .json({
        success: 1,
        profile_URL: `http://localhost:3002/profileIMG/${req.file.filename}`,
      });
    // console.log(req.file);
  };

module.exports = { postprofile };
