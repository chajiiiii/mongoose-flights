const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  departs: { type: Date, default: 2024, required: true },
});

module.exports = mongoose.model("Flight", flightSchema);
