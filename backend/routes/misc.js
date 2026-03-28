const express = require("express");
const router = express.Router();
const { testimonials, amenities } = require("../data/misc");

router.get("/testimonials", (req, res) => {
  res.json(testimonials);
});

router.get("/amenities", (req, res) => {
  res.json(amenities);
});

module.exports = router;
