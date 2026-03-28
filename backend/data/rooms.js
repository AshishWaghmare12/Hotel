const rooms = [
  {
    id: 1,
    name: "Classic Deluxe Room",
    type: "deluxe",
    price: 4500,
    capacity: 2,
    size: "32 sqm",
    description:
      "A beautifully appointed room with warm tones and a king-size bed. Perfect for couples looking for a cozy retreat in the heart of the city.",
    longDescription:
      "The Classic Deluxe Room offers a serene escape with plush bedding, a work desk, and a private bathroom with rain shower. Natural light fills the room through large windows overlooking the hotel gardens. Ideal for couples and solo travelers who appreciate comfort without excess.",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800"
    ],
    amenities: ["King Bed", "Free WiFi", "Rain Shower", "Mini Bar", "Smart TV", "Room Service"],
    available: true,
    featured: true
  },
  {
    id: 2,
    name: "Family Suite",
    type: "suite",
    price: 8200,
    capacity: 4,
    size: "58 sqm",
    description:
      "Spacious suite designed for families, with two sleeping areas, a living room, and stunning views. Everything your family needs for a memorable stay.",
    longDescription:
      "The Family Suite is thoughtfully designed with families and groups in mind. It features a master bedroom with a king bed, a separate kids' area with twin beds, a cozy living room with a sofa set, and a large bathroom. The kitchenette allows for light cooking, and the balcony view of the city skyline is something guests always remember.",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800"
    ],
    amenities: ["King + Twin Beds", "Free WiFi", "Kitchenette", "Bathtub", "2 Smart TVs", "Balcony", "Room Service"],
    available: true,
    featured: true
  },
  {
    id: 3,
    name: "Royal Penthouse",
    type: "penthouse",
    price: 18000,
    capacity: 2,
    size: "120 sqm",
    description:
      "The pinnacle of luxury. A private penthouse with panoramic views, a personal butler, jacuzzi, and an exclusive lounge. An experience unlike any other.",
    longDescription:
      "Perched at the top of the Stayora tower, the Royal Penthouse is our crown jewel. Guests are welcomed with a chilled champagne bottle and assigned a personal butler for the entire stay. The penthouse features a master suite with sea views, a private jacuzzi terrace, a fully equipped bar, a dining area for six, and premium imported furnishings throughout. This is not just a room — it's a lifestyle.",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800"
    ],
    amenities: [
      "King Bed",
      "Personal Butler",
      "Private Jacuzzi",
      "Panoramic Views",
      "Full Bar",
      "Dining Area",
      "Free WiFi",
      "Champagne Welcome"
    ],
    available: true,
    featured: true
  }
];

module.exports = rooms;
