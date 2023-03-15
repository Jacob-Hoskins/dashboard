const express = require("express");
const viewsController = require("../controllers/viewcontroller");

const router = express.Router();

//router.get("/", viewsController.getAllSymbols);
// router.get("/:stockID", viewsController.getAllSymbols);
router.get("/", viewsController.getAllSymbols);
router.get("/:stockSymbol", viewsController.stockDetails);

module.exports = router;
