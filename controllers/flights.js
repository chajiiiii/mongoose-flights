const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

async function index(req, res) {
  try {
    const flights = await Flight.find({}).sort({
      departsDate: 1,
      departsTime: 1,
    });
    res.render("flights/index", { flights });
  } catch (err) {
    console.log(err);
    res.redirect("flights");
  }
}

function newFlight(req, res) {
  res.render("flights/new", { errorMsg: "" });
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
    await Flight.create(req.body);
    res.redirect("flights");
  } catch (err) {
    console.log(err);
    res.render("flights/new", { errorMsg: err.message });
  }
}

async function show(req, res) {
  const id = req.params.id;
  try {
    const flight = await Flight.findById(id);
    const tickets = await Ticket.find({ flight: flight._id });
    res.render("flights/show", { flight, tickets });
  } catch (err) {
    console.log(err);
    res.redirect("flights");
  }
}

async function edit(req, res) {
  const id = req.params.id;
  try {
    const flight = await Flight.findById(id);
    res.render("flights/edit", { flight });
  } catch (err) {
    console.log(err);
    res.redirect("flights/show");
  }
}

module.exports = {
  index,
  new: newFlight,
  create,
  show,
  edit,
};
