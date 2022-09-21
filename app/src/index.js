const express = require("express");
require("dotenv").config();

var app = express();
const port = process.env.PORT ?? 3333;

app.get("/", function (req, res) {
  res.send(`Hello World, app ${process.env.APINAME ?? "kubernentes"} started on port ${port}`);
});

app.listen(port, () => {
  console.log(`app ${process.env.APINAME ?? "kubernentes"} started on port ${port}`);
});
