const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

async function getTickets(req, res) {
  // get the flight document from the db
  const flight = await Flight.findById(req.params.id);

  // get the tickets document from the db - passing the current flight id as a filter
  const ticket = await Ticket.find({ flight: flight._id });

  // render the view, sending both the flight and ticket data through
  res.render("flights/show", { flight, ticket });
}

module.exports = {
  getTickets,
};
