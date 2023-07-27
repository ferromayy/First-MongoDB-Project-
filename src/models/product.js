const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  properties: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
