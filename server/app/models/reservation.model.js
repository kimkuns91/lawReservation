const mongoose = require("mongoose");

const Reservation = mongoose.model(
  "Reservation",
  new mongoose.Schema({
    name : String,
    phone : String,
    date : String,
    option : String,
    text : String,
    amount : String,
    payment : String,
    RVstatus : String,
  })
);

module.exports = Reservation;