const options = require("../endpoints/options");
const axios = require("axios");

exports.getAllSymbols = async (req, res, next) => {
  const x = await axios.get(options.allStocksURL, options.allStockOptions);

  const stocks = await x.data.data[0];
  const stock = x.data.data[0].name;
  const symbol = stocks.symbol.toString();

  //turned two list into dict (NOT COMPLETED) send that single list of dicts to base file and extract from there like in the cards for the tour
  for (let y = 0; y <= x.data.data.length - 1; y++) {
    let stockSym = x.data.data[y].symbol;
    let compName = x.data.data[y].name;
    let symDict = { sym: stockSym, name: compName };
    options.testData.push(symDict);
    // options.testData.push(x.data.data[y].symbol);
    // options.symbolCompName.push(x.data.data[y].name);
  }

  res.status(200).render("base", {
    // StockName: options.symbolCompName,
    // StockSym: options.testData,
    StockData: options.testData,
    num: "5",
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

exports.stockDetails = async (req, res, next) => {
  const sym = req.params.stockSymbol;

  res.status(200).render("stockPage", {
    StockSym: sym.toUpperCase(),
  });
};
