const mongoose = require("mongoose");

const tankSchema = new mongoose.Schema({
  TankID: {
    type: String,
    required: true,
  },
  TankName: {
    type: String,
    required: true,
  },
  AvailableWater: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Tank", tankSchema);
