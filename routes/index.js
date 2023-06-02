const express = require("express");
const router = express.Router();

const pharmaciesRoutes = require("./pharmacies");
const drugsRoutes = require("./drugs");
const drugTypesRoutes = require("./drug-types");
const stocksRoutes = require("./stock");
const districtsRoutes = require("./district");
const regionsRoutes = require("./region");

router.use("/pharmacies", pharmaciesRoutes);

router.use("/drugs", drugsRoutes);

router.use("/drug_types", drugTypesRoutes);

router.use("/stocks", stocksRoutes);

router.use("/districts", districtsRoutes);

router.use("/regions", regionsRoutes);

module.exports = router;
