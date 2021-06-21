const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("Product Middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="messe"><button type="submit">Add</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
