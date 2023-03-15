const path = require("path");
const express = require("express");
const { json } = require("express");
const pug = require("pug");
const viewRouter = require("./routes/viewRoutes");
const axios = require("axios");
const options = require("./endpoints/options");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));

//BODY PARSER
app.use(
  express.json({
    limit: "10kb",
  })
);

// Middlewear
// app.use(async (req, res, next) => {
//   let x = await axios.get(options.allStocksURL, options.allStockOptions);
//   let y = await x.data;

//   //options.testData.push(y.data[1]);
//   //console.log(options.testData);
//   next();
// });

// ROUTES
app.get("/", viewRouter);
app.use("/stocks", viewRouter);

// app.get("/placeholderStockSylmbol", (req, res) => {
//   res.end("Stock detail page");
// });

module.exports = app;
