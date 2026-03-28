import { useState, useEffect } from "react";
import axios from "axios";
import RoomCard from "../components/RoomCard";
import "../styles/Rooms.css";

const roomTypes = ["all", "deluxe", "suite", "penthouse"];

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeType, setActiveType] = useState("all");
  const [maxPrice, setMaxPrice] = useState(20000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/rooms")
      .then((res) => {
        setRooms(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let result = [...rooms];
    if (activeType !== "all") {
      result = result.filter((r) => r.type === activeType);
    }
    result = result.filter((r) => r.price <= maxPrice);
    setFiltered(result);
  }, [activeType, maxPrice, rooms]);

  return (
    <div className="rooms-page">
      <div className="rooms-hero">
        <div className="rooms-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400"
            alt="Rooms"
          />
          <div className="rooms-hero-overlay" />
        </div>
        <div className="container rooms-hero-content">
          <p className="section-label" style={{ color: "var(--gold-light)" }}>Our Rooms & Suites</p>
          <h1>Find Your Perfect Stay</h1>
          <p>From cozy deluxe rooms to lavish penthouses — a space designed for every kind of guest.</p>
        </div>
      </div>

      <div className="rooms-main">
        <div className="container">
          <div className="filters-bar">
            <div className="type-filters">
              {roomTypes.map((type) => (
                <button
                  key={type}
                  className={`filter-btn ${activeType === type ? "active" : ""}`}
                  onClick={() => setActiveType(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
            <div className="price-filter">
              <label>
                Max Price: <strong>₹{maxPrice.toLocaleString()}</strong>
              </label>
              <input
                type="range"
                min={3000}
                max={20000}
                step={500}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
          </div>

          {loading ? (
            <div className="loading-state">Loading rooms...</div>
          ) : filtered.length === 0 ? (
            <div className="error-state">
              <p style={{ fontSize: "2rem" }}>😕</p>
              <p>No rooms match your filters. Try adjusting the price or type.</p>
            </div>
          ) : (
            <>
              <p className="results-count">{filtered.length} room{filtered.length !== 1 ? "s" : ""} found</p>
              <div className="rooms-grid-page">
                {filtered.map((room) => (
                  <RoomCard key={room.id} room={room} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Rooms;
