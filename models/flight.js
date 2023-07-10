const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["ICN", "PUS", "GMP", "BKK", "LHR"],
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["Korean", "Asiana", "Busan"],
    required: true,
  },
  airport: {
    type: String,
    enum: ["ICN", "PUS", "GMP", "BKK", "LHR"],
    default: "ICN",
    required: true,
  },
  flightNo: { type: Number, min: 10, max: 9999, required: true },
  departsDate: { type: Date, default: Date.now() + 365 * 24 * 60 * 60000 },
  departsTime: { type: String, default: "12:30" },
  destinations: [destinationSchema],
});

module.exports = mongoose.model("Flight", flightSchema);
