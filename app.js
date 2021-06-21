const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("innn");
  next(); //allowus to continue to next middleware in line
});

app.use((req, res, next) => {
  console.log("diff");
  res.send("<h1>hellloo</h1>");
});

app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
