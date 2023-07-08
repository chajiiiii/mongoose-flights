const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["Korean", "Asiana", "Busan"],
  },
  airport: {
    type: String,
    enum: ["ICN", "PUS", "GMP", "BKK", "LHR"],
    default: "ICN",
  },
  flightNo: { type: Number, min: 10, max: 9999 },
  departs: { type: Date, default: 2024 },
});

module.exports = mongoose.model("Flight", flightSchema);
