import { Link } from "react-router-dom";
import "../styles/RoomCard.css";

function RoomCard({ room }) {
  return (
    <div className="room-card">
      <div className="room-card-img">
        <img src={room.images[0]} alt={room.name} loading="lazy" />
        <div className="room-type-badge">{room.type}</div>
      </div>
      <div className="room-card-body">
        <div className="room-card-top">
          <h3>{room.name}</h3>
          <div className="room-price">
            <span className="price-amount">₹{room.price.toLocaleString()}</span>
            <span className="price-night">/night</span>
          </div>
        </div>
        <p className="room-desc">{room.description}</p>
        <div className="room-meta">
          <span>👤 {room.capacity} guests</span>
          <span>📐 {room.size}</span>
        </div>
        <div className="room-card-actions">
          <Link to={`/rooms/${room.id}`} className="btn-outline">View Details</Link>
          <Link to={`/booking?room=${room.type}`} className="btn-primary">Book Now</Link>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
