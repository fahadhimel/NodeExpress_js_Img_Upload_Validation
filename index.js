const app = require("./app");
const config = require("./config/config");

const port = config.app.port;

app.listen(port, () => {
  console.log(`server raning at http://127.0.0.1:${port}`);
});
