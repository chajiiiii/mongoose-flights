const Flight = require("../models/flight");

async function index(req, res) {
  try {
    const flights = await Flight.find({});
    res.render("flights/index", { flights });
  } catch (err) {
    console.log(err);
    res.redirect("flights");
  }
}

module.exports = {
  index,
};
