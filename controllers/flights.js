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

function newFlight(req, res) {
  res.render("flights/new", { errorMsg: "" });
}

async function create(req, res) {
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
    res.render("flights/show", { flight });
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

// async function update(req, res) {
//   const id = req.params.id;
//   const destinationId = req.body.destinationId;
//   const updatedAirport = req.body.destinations.airport;
//   const updatedArrival = req.body.destinations.arrival;

//   try {
//     const flight = await Flight.findById(id);

//     const destination = flight.destinations.id(destinationId);
//     if (destination) {
//       destination.airport = updatedAirport;
//       destination.arrival = updatedArrival;
//     } else {
//       flight.destinations.push({
//         airport: updatedAirport,
//         arrival: updatedArrival,
//       });
//     }

//     await flight.save();

//     res.redirect(`flights/${id}`, { flight });
//   } catch (err) {
//     console.log(err);
//     res.redirect("flights/edit");
//   }
// }

module.exports = {
  index,
  new: newFlight,
  create,
  show,
  edit,
  //   update,
};
