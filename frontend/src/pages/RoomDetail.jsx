import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/RoomDetail.css";

function RoomDetail() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`/api/rooms/${id}`)
      .then((res) => setRoom(res.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="loading-state" style={{ paddingTop: "120px" }}>Loading room details...</div>;
  if (error || !room) return (
    <div className="error-state" style={{ paddingTop: "120px" }}>
      <p>Room not found. <Link to="/rooms" style={{ color: "var(--gold)" }}>Back to rooms</Link></p>
    </div>
  );

  return (
    <div className="room-detail-page">
      <div className="container">
        <div className="detail-breadcrumb">
          <Link to="/">Home</Link> / <Link to="/rooms">Rooms</Link> / <span>{room.name}</span>
        </div>

        <div className="detail-grid">
          {/* Gallery */}
          <div className="detail-gallery">
            <div className="gallery-main">
              <img src={room.images[activeImg]} alt={room.name} />
            </div>
            <div className="gallery-thumbs">
              {room.images.map((img, i) => (
                <div
                  key={i}
                  className={`gallery-thumb ${activeImg === i ? "active" : ""}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={`view ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Info Panel */}
          <div className="detail-info">
            <div className="detail-type-badge">{room.type}</div>
            <h1>{room.name}</h1>

            <div className="detail-meta">
              <span>👤 Up to {room.capacity} guests</span>
              <span>📐 {room.size}</span>
            </div>

            <div className="detail-price">
              <span className="dp-amount">₹{room.price.toLocaleString()}</span>
              <span className="dp-night">per night</span>
            </div>

            <p className="detail-desc">{room.longDescription}</p>

            <div className="detail-amenities">
              <h4>Room Amenities</h4>
              <div className="amenities-list">
                {room.amenities.map((a, i) => (
                  <div className="amenity-pill" key={i}>✓ {a}</div>
                ))}
              </div>
            </div>

            <div className="detail-actions">
              <Link to={`/booking?room=${room.type}`} className="btn-primary detail-book-btn">
                Book This Room
              </Link>
              <Link to="/contact" className="btn-outline">
                Ask a Question
              </Link>
            </div>

            <div className="detail-note">
              <p>🔒 Free cancellation up to 48 hours before check-in</p>
              <p>✉️ Instant confirmation sent to your email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetail;
