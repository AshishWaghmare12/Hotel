const express = require("express");
const router = express.Router();
const { submitBooking, getAllBookings } = require("../controllers/bookingController");

router.post("/", submitBooking);
router.get("/", getAllBookings);

module.exports = router;
