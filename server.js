const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const port = process.env.port || 3000;

const server = app.listen(port, () => {
  console.log("Server running");
});
