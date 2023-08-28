require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 3003,
  },
};

module.exports = dev;