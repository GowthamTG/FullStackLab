const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.use("/:name", (req, res, next) => {
  const fileName = req.params.name;
  console.log(fileName);
  if (fileName === "index.html") {
    res.sendFile(path.join(__dirname, "/index.html"));
  }
  next();
});

app.use("/pages/:name", (req, res, next) => {
  const fileName = req.params.name;
  console.log(fileName);
  if (fileName !== "index.html") {
    res.sendFile(path.join(__dirname, "/pages/" + fileName));
  }
  next();
});

app.use("/**", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./pages/error.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
