const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: String,
  airport: { type: String, default: "ICN" },
  flightNo: Number,
  departs: { type: Date, default: 2024 },
});
