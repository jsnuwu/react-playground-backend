const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const playersRouter = require("./players");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/players", playersRouter);

app.listen(3000, () => console.log("Backend läuft auf Port 3000"));
