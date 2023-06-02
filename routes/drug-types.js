const express = require("express");
const router = express.Router();
const drugTypesController = require("../controllers/drug-types");

// Create drug type
router.post("/", drugTypesController.createDrugType);

// Get all drug types
router.get("/", drugTypesController.getAllDrugTypes);

// Get drug type
router.get("/:id", drugTypesController.getDrugType);

//Update drug type
router.put("/:id", drugTypesController.updateDrugType);

// Delete drug type
router.delete("/:id", drugTypesController.deleteDrugType);

module.exports = router;
