const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./src/routes");

const app = express();
const port = process.env.PORT || 6000;
app.use(cors());

mongoose.connect("mongodb://localhost:27017/crudnode", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cookieParser());
app.use(express.json());

app.use(routes);

app.listen(port, function() {
  console.log(`servidor online na porta ${port}`);
});
