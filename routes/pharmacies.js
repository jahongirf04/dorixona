const express = require("express");
const router = express.Router();
const pahrmacyController = require("../controllers/pharmacies");
const { route } = require("./pharmacies");

// Get all pharmacies
router.get("/", pahrmacyController.getAllPharmacies);

// Create pharmacy
router.post("/", pahrmacyController.createPharmacy);

// Get pharmacy
router.get("/:id", pahrmacyController.getPharmacy);

// Update pharmacy
router.put("/:id", pahrmacyController.updatePharmacy);

// Delete pharmacy
router.delete("/:id", pahrmacyController.deletePharmacy);

module.exports = router;
