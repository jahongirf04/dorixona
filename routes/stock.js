const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stock");

// Create stock
router.post("/", stockController.createStock);

// Get all stocks
router.get("/", stockController.getAllStocks);

// Get stock
router.get("/:id", stockController.getStock);

//Update stock
router.put("/:id", stockController.updateStock);

// Delete stock
router.delete("/:id", stockController.deleteStock);

module.exports = router;
