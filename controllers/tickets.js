const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

async function create(req, res) {
  // for (let key in req.body) {
  //   if (req.body[key] === "") delete req.body[key];
  // }

  console.log(`flightId = ${req.params.id}`);

  const flightId = await Flight.findById(req.params.id);
  const newTicket = await Ticket.create(req.body);
  const ticket = await Ticket.findById(newTicket._id);

  console.log(`newTicket = ${newTicket}`);
  console.log(`ticket = ${ticket}`);
  ticket.flight = flightId;
  // ticket.flight.push(flightId);
  await ticket.save();
  //   try {
  //     await Ticket.create(req.body);
  //   } catch (err) {
  //     console.log(err);
  //   }

  res.redirect(`/flights/${flightId}`);
}

// async function create(req, res) {
//   const ticket = await Ticket.create(req.body);
//   console.log(req.body);

//   const flight = await Flight.findById(ticket.flight);
//   console.log(ticket._id);
//   flight.tickets.push(ticket._id);
//   await flight.save();
// }

async function newTicket(req, res) {
  const flightId = req.params.id;
  const tickets = await Ticket.find({});
  res.render("tickets/new", { tickets, flightId, errorMsg: "" });
}

module.exports = {
  create,
  new: newTicket,
};
