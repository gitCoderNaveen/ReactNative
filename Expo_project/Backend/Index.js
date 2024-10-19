const express = require("express");
const clients = require("./Routes/routes");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyparser = require("body-parser");

app.use(cors());
app.use(bodyparser.json());

mongoose.connect("mongodb://127.0.0.1:27017/ReactNative");

mongoose.connection.on("connected", () => {
  console.log("Mongodb successfully connected");
});

app.get("/", (req, res) => {
  res.send("React Native Backend server");
});

app.use("/clients", clients);

app.listen(5004, () => {
  console.log("Server is running on port 5004");
});
