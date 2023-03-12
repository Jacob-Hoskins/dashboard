const options = require("../endpoints/options");
const axios = require("axios");

exports.getAllSymbols = async (req, res, next) => {
  const x = await axios.get(options.allStocksURL, options.allStockOptions);

  const stocks = await x.data.data[0];
  const stock = x.data.data[0].name;
  const symbol = stocks.symbol.toString();

  for (let y = 0; y <= x.data.data.length - 1; y++) {
    options.testData.push(x.data.data[y].symbol);
  }

  res.status(200).render("base", {
    StockName: stock,
    StockSym: options.testData,
  });
};

// exports.getAllSymbols = async (req, res, next) => {
//   let data = [];
//   let test_dict = {};
//   const x = await axios.get(options.allStocksURL, options.allStockOptions);

//   const stocks = await x.data.data[0];
//   const stock = x.data.data[0].name;
//   const symbol = stocks.symbol.toString();

//   for (let y = 0; y <= x.data.data.length - 1; y++) {
//     test_dict = { name: x.data.data[y].symbol };
//     //data.push(x.data.data[y].symbol);
//     data.push(test_dict);
//   }
//   console.log(data);
//   // console.log(await x.data.data[1]);

//   res.status(200).render("base", {
//     StockName: stock,
//     StockSym: test_dict.name,
//     // StockSym: symbol,
//   });
// };

// exports.getAllSymbols = async (req, res, next) => {
//   // for (let x = 0; x <= options.testData.length; x++) {
//   //   console.log(options.testData[x]);
//   // }
//   let x = options.testData;
//   res.status(200).render("base", {
//     //StockName: stock,
//     StockSym: x.symbol,
//   });
// };

exports.stockRSI = async (req, res, next) => {
  // Gets symbol and insert it into options
  const sym = req.params.stockSymbol;
  let params = (options.oneWeekRSI.params.symbol = sym);

  //get rsi stock data
  console.log(options.oneWeekRSI);
  const x = await axios.get(options.rsiURL, options.oneWeekRSI);

  //   const fullName = options.oneWeekRSI.params.console.log(await x.data.values);
  res.status(200).render("stockPage", {
    StockSym: sym.toUpperCase(),
  });
};
