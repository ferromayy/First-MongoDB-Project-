const express = require("express");
const Product = require("../models/product");

const router = express.Router();

router.post("/product", (req, res) => {
  const product = Product(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
