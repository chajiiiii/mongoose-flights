const express = require("express");
const router = express.Router();

const ticketsCtrl = require("../controllers/tickets");

router.post("/:id", ticketsCtrl.create);

router.get("/:id", ticketsCtrl.new);

module.exports = router;
