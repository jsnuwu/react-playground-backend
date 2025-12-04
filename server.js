const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const players = require("./players"); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/players", (req, res) => {
  res.json(players);
});

app.post("/players", (req, res) => {
  const newPlayer = req.body;
  newPlayer.id = players.length ? Math.max(...players.map(p => p.id)) + 1 : 1;
  players.push(newPlayer);
  res.status(201).json(newPlayer);
});

app.listen(3000, () => console.log("Backend läuft auf Port 3000"));
