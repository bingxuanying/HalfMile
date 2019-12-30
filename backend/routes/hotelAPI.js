const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

router.get("/info", (req, res) => {
  if (req.query) {
    res.send(`query = ${req.query.location} + ${req.query.date}`);
  } else {
    res.send("NO query");
  }
});

router.get("/info/:location", (req, res) => {
  res.send(`Location is ${req.params.location}`);
});

module.exports = router;
