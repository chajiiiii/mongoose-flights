const express = require("express");
const router = express.Router();

const flightsCtrl = require("../controllers/flights");

// Show all flights
router.get("/", flightsCtrl.index);

module.exports = router;
