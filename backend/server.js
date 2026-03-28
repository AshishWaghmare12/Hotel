const express = require("express");
const cors = require("cors");

const roomRoutes = require("./routes/rooms");
const bookingRoutes = require("./routes/bookings");
const miscRoutes = require("./routes/misc");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api", miscRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Stayora API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
