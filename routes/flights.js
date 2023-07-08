const express = require("express");
const router = express.Router();

const flightsCtrl = require("../controllers/flights");

// Show all flights
router.get("/", flightsCtrl.index);

// Add a new flight
router.get("/new", flightsCtrl.new);

// Save a new flight
router.post("/", flightsCtrl.create);

module.exports = router;
