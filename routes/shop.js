const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("diff");
  res.send("<h1>hellloo</h1>");
});

module.exports = router;
