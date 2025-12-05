const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  kills: { type: Number, default: 0 },
  deaths: { type: Number, default: 0 },
  assists: { type: Number, default: 0 },
  wins: { type: Number, default: 0 },
  looses: { type: Number, default: 0 },
  roundsPlayed: { type: Number, default: 0 },
  avatar: { type: String, default: null },
  profileLink: { type: String, default: "#" },
});

module.exports = mongoose.model("Player", playerSchema);