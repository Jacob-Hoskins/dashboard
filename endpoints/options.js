exports.allStocksURL = "https://twelve-data1.p.rapidapi.com/stocks";
exports.rsiURL = "https://twelve-data1.p.rapidapi.com/rsi";

exports.allStockOptions = {
  method: "GET",
  //url: "https://twelve-data1.p.rapidapi.com/stocks",
  params: { exchange: "nasdaq", format: "json" },
  headers: {
    "X-RapidAPI-Key": "4a3c2713f9msh0df92a2b0590739p1b0f85jsn99ef3a86f221",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  },
};

exports.oneWeekRSI = {
  method: "GET",
  params: {
    interval: "1week",
    symbol: "NG",
    format: "json",
    time_period: "15",
    series_type: "close",
    outputsize: "14",
  },
  headers: {
    "X-RapidAPI-Key": "4a3c2713f9msh0df92a2b0590739p1b0f85jsn99ef3a86f221",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
  },
};

exports.testData = [];
