const bookings = [];

const submitBooking = (req, res) => {
  const { name, email, roomType, checkIn, checkOut, guests, phone } = req.body;

  if (!name || !email || !roomType || !checkIn || !checkOut || !guests) {
    return res.status(400).json({ error: "Please fill all required fields" });
  }

  // basic email check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  if (checkOutDate <= checkInDate) {
    return res.status(400).json({ error: "Check-out must be after check-in" });
  }

  const newBooking = {
    id: bookings.length + 1,
    name,
    email,
    phone: phone || "",
    roomType,
    checkIn,
    checkOut,
    guests,
    createdAt: new Date().toISOString(),
    status: "confirmed"
  };

  bookings.push(newBooking);

  res.status(201).json({
    message: "Booking confirmed! We'll send details to your email shortly.",
    booking: newBooking
  });
};

const getAllBookings = (req, res) => {
  res.json(bookings);
};

module.exports = { submitBooking, getAllBookings };
