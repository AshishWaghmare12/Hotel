import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import RoomCard from "../components/RoomCard";
import "../styles/Home.css";

function Home() {
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [roomsRes, amenitiesRes, testimonialsRes] = await Promise.all([
          axios.get("/api/rooms"),
          axios.get("/api/amenities"),
          axios.get("/api/testimonials")
        ]);
        setFeaturedRooms(roomsRes.data.filter((r) => r.featured));
        setAmenities(amenitiesRes.data);
        setTestimonials(testimonialsRes.data);
      } catch (err) {
        console.error("Failed to load home data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600"
            alt="Stayora Hotel"
          />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <p className="section-label" style={{ color: "var(--gold-light)" }}>Welcome to Stayora</p>
          <h1>Where Every Stay<br /><em>Becomes a Memory</em></h1>
          <p className="hero-subtitle">
            Luxury redefined for families, couples, and explorers. Experience comfort, elegance, and warmth — all under one roof.
          </p>
          <div className="hero-actions">
            <Link to="/rooms" className="btn-primary">Explore Rooms</Link>
            <Link to="/about" className="btn-outline hero-btn-outline">Our Story</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><span>12+</span><p>Years of Excellence</p></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat"><span>3k+</span><p>Happy Guests</p></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat"><span>4.9★</span><p>Guest Rating</p></div>
          </div>
        </div>
      </section>

      {/* Quick Booking Bar */}
      <section className="quick-booking-bar">
        <div className="container">
          <div className="quick-booking-inner">
            <div className="qb-field">
              <label>Check In</label>
              <input type="date" />
            </div>
            <div className="qb-divider" />
            <div className="qb-field">
              <label>Check Out</label>
              <input type="date" />
            </div>
            <div className="qb-divider" />
            <div className="qb-field">
              <label>Guests</label>
              <select>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            <Link to="/booking" className="btn-primary qb-btn">Check Availability</Link>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="featured-rooms">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-label">Our Rooms</p>
              <h2 className="section-title">Crafted for Your Comfort</h2>
            </div>
            <Link to="/rooms" className="btn-outline view-all-btn">View All Rooms</Link>
          </div>

          {loading ? (
            <div className="loading-state">Loading rooms...</div>
          ) : (
            <div className="rooms-grid">
              {featuredRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Amenities */}
      <section className="amenities-section">
        <div className="container">
          <div className="amenities-header">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">World-Class Amenities</h2>
            <p className="section-subtitle">
              Everything you need for the perfect stay, thoughtfully curated for your comfort and enjoyment.
            </p>
          </div>
          <div className="amenities-grid">
            {amenities.map((item, i) => (
              <div className="amenity-card" key={i}>
                <div className="amenity-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section className="about-strip">
        <div className="container about-strip-inner">
          <div className="about-strip-img">
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700"
              alt="Hotel lobby"
            />
          </div>
          <div className="about-strip-content">
            <p className="section-label">Our Story</p>
            <h2 className="section-title">A Legacy of Warmth and Hospitality</h2>
            <p className="section-subtitle" style={{ maxWidth: "100%" }}>
              Founded in 2012 on the shores of Mumbai, Stayora was born from a simple belief — that every guest deserves to feel truly at home. Over the years, we've hosted thousands of families, honeymooners, and solo adventurers, crafting experiences that go beyond a room and a bed.
            </p>
            <Link to="/about" className="btn-primary" style={{ marginTop: "28px", display: "inline-block" }}>
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p className="section-label">Guest Reviews</p>
            <h2 className="section-title">What Our Guests Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.id}>
                <div className="testi-rating">{"★".repeat(t.rating)}</div>
                <p className="testi-comment">"{t.comment}"</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.avatar}</div>
                  <div>
                    <p className="testi-name">{t.name}</p>
                    <p className="testi-location">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner-bg">
          <img
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400"
            alt="Hotel pool"
          />
          <div className="cta-overlay" />
        </div>
        <div className="container cta-content">
          <h2>Ready for Your Stay?</h2>
          <p>Book directly with us and enjoy exclusive member rates and complimentary breakfast.</p>
          <Link to="/booking" className="btn-primary cta-btn">Reserve Your Room</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
