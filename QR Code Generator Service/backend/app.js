const express = require("express");
const qrcode = require("qrcode");
const router = require("./routes/routes");

const app = express();

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static("public"));
app.use('/router',router);

moodule.exports=app;