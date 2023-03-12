const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const port = process.env.port;

const server = app.listen(port, () => {
  console.log("Server running");
});
