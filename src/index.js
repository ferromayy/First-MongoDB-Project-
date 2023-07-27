const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productRoutes = require("./routes/products");

const app = express();
const port = process.env.PORT || 9000;

//midleware
app.use("/api", productRoutes);
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("welcome to my Api to learn Mongo");
});

//Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("yess, I am connected atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("server listening on port", port));
