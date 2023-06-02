const express = require("express");
const router = express.Router();
const drugController = require("../controllers/drugs");

// Create pharmacy
router.post("/", drugController.createDrug);

// Get all drugs
router.get("/", drugController.getAllDrugs);

// Get drug
router.get("/:id", drugController.getDrug);

//Update drug
router.put("/:id", drugController.updateDrug);

// Delete drug
router.delete("/:id", drugController.deleteDrug);

module.exports = router;
