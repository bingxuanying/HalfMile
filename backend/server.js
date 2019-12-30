const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const hotelAPI = require("./routes/hotelAPI");
const path = require("path");
const dateFormat = require("dateformat");

app.use((req, res, next) => {
  var myDate = new Date();
  myDate.setHours(myDate.getHours() - 8);
  var myDateFormat = dateFormat(myDate, "mm-dd-yyyy HH:MM:ss");
  console.log(`${myDateFormat} => ${req.originalUrl}`);
  next();
});

// Body Parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Routes
app.use("/hotel", hotelAPI);

// error handler
app.use((req, res, next) => {
  res.status(404).send("You are LOST");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.sendFile(path.join(__dirname, "./public/500.html"));
});

// Server Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.info(`Server on ${PORT}`);
});
