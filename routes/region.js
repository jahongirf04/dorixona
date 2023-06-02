const express = require("express");
const router = express.Router();
const regionController = require("../controllers/region");

// Create region
router.post("/", regionController.createRegion);

// Get all regions
router.get("/", regionController.getAllRegions);

// Get region
router.get("/:id", regionController.getRegion);

//Update region
router.put("/:id", regionController.updateRegion);

// Delete region
router.delete("/:id", regionController.deleteRegion);

module.exports = router;
