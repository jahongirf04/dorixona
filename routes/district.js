const express = require("express");
const router = express.Router();
const districtController = require("../controllers/district");

// Create district
router.post("/", districtController.createDistrict);

// Get all districts
router.get("/", districtController.getAllDistricts);

// Get dsitrict
router.get("/:id", districtController.getDistrict);

//Update district
router.put("/:id", districtController.updateDistrict);

// Delete district
router.delete("/:id", districtController.deleteDistrict);

module.exports = router;
