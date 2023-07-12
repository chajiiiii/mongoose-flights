const express = require("express");
const router = express.Router();
const ticketsCtrl = require("../controllers/tickets");

router.post("/tickets/", ticketsCtrl.create);

module.exports = router;
