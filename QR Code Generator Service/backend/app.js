const express = require("express");
const qrcode = require("qrcode");
const morgan = require("morgan");
const router = require("./routes/routes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static("public"));
app.use('/api',router);

module.exports=app;