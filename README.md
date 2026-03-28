# 🏨 Stayora – Hotel Booking Website

A full-stack hotel booking website built with React (frontend) and Node.js + Express (backend).

---

## 📁 Project Structure

```
stayora/
├── frontend/          # React app
│   ├── public/
│   └── src/
│       ├── components/    # Navbar, Footer, RoomCard
│       ├── pages/         # Home, Rooms, RoomDetail, Booking, About, Contact
│       └── styles/        # All CSS files
│
└── backend/           # Express API
    ├── server.js
    ├── routes/        # rooms.js, bookings.js, misc.js
    ├── controllers/   # roomController.js, bookingController.js
    └── data/          # rooms.js, misc.js (JSON-like data)
```

---

## 🚀 Getting Started

### 1. Clone or extract the project

### 2. Setup the Backend

```bash
cd backend
npm install
npm run dev
```

Server runs at: `http://localhost:5000`

### 3. Setup the Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs at: `http://localhost:3000`

The frontend uses a proxy to `/api` pointing to port 5000 (already set in package.json).

---

## 📦 npm Packages

### Backend
| Package | Purpose |
|---------|---------|
| express | Web framework |
| cors | Allow cross-origin requests |
| nodemon | Auto-restart on file changes (dev only) |

### Frontend
| Package | Purpose |
|---------|---------|
| react, react-dom | UI library |
| react-router-dom | Client-side routing |
| axios | HTTP requests to backend |

---

## 🔌 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/rooms | Get all rooms (supports ?type=suite&maxPrice=10000) |
| GET | /api/rooms/:id | Get single room by ID |
| POST | /api/bookings | Submit a booking |
| GET | /api/bookings | Get all bookings |
| GET | /api/amenities | Get hotel amenities list |
| GET | /api/testimonials | Get guest testimonials |

### Example POST /api/bookings body:
```json
{
  "name": "Rahul Mehta",
  "email": "rahul@example.com",
  "phone": "+91 98765 43210",
  "roomType": "suite",
  "checkIn": "2024-12-20",
  "checkOut": "2024-12-25",
  "guests": "2"
}
```

---

## 🖼️ Pages

- `/` – Home (hero, featured rooms, amenities, testimonials)
- `/rooms` – Room listing with type & price filters
- `/rooms/:id` – Room detail with image gallery
- `/booking` – Booking form with validation
- `/about` – Hotel story, stats, team
- `/contact` – Contact form + hotel info

---

## 🎨 Design Notes

- **Font**: Cormorant Garamond (headings) + DM Sans (body)
- **Colors**: Dark navy (#1a1a2e), Gold (#c9a84c), Cream (#faf8f3), Charcoal (#2d2d3f)
- **Theme**: Luxury but approachable — soft shadows, rounded cards, clean spacing
- **Responsive**: Works on mobile, tablet, and desktop

---

## 💡 Notes

- Bookings are stored in-memory (array in server.js). They reset when server restarts.
- To use a database, swap the in-memory array in `controllers/bookingController.js` with MongoDB/Mongoose.
- Room images use Unsplash URLs — they need internet to display.
- The contact form is frontend-only (no backend email sending). Wire up Nodemailer or an email API if needed.

---

Built by a 2nd year IT engineering student 🚀
