const express = require("express");

var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3333, () => {
  console.log("app started on port 3333");
});
