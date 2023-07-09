const express = require("express");
const router = express.Router();

const flightsCtrl = require("../controllers/flights");
const flights = require("../controllers/flights");

// Show all flights
router.get("/", flightsCtrl.index);

// Add a new flight
router.get("/new", flightsCtrl.new);

// Save a new flight
router.post("/", flightsCtrl.create);

// Read a specific flight
router.get("/:id", flightsCtrl.show);

// Edit an existing flight
router.get("/:id/edit", flightsCtrl.edit);

// Update the edited flight
// router.put("/:id", flightsCtrl.update);

module.exports = router;
