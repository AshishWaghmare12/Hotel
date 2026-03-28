const rooms = require("../data/rooms");

const getAllRooms = (req, res) => {
  const { type, maxPrice } = req.query;
  let result = [...rooms];

  if (type && type !== "all") {
    result = result.filter((r) => r.type === type);
  }

  if (maxPrice) {
    result = result.filter((r) => r.price <= parseInt(maxPrice));
  }

  res.json(result);
};

const getRoomById = (req, res) => {
  const id = parseInt(req.params.id);
  const room = rooms.find((r) => r.id === id);

  if (!room) {
    return res.status(404).json({ error: "Room not found" });
  }

  res.json(room);
};

module.exports = { getAllRooms, getRoomById };
