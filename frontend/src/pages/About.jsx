import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  const whyUs = [
    { icon: "🏆", title: "Award-Winning Service", desc: "Recognized by Hospitality India Awards 2022 for excellence in guest experience." },
    { icon: "🌿", title: "Eco-Conscious", desc: "We use sustainable practices across our property — from energy to food sourcing." },
    { icon: "👨‍🍳", title: "In-House Chefs", desc: "Our culinary team crafts menus inspired by regional and international flavors." },
    { icon: "🛎️", title: "24/7 Concierge", desc: "Whatever you need, whenever you need it — our team is always just a call away." }
  ];

  const team = [
    { name: "Arjun Kapoor", role: "General Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300" },
    { name: "Nisha Patel", role: "Head of Hospitality", img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300" },
    { name: "Vivek Sharma", role: "Executive Chef", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" }
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <div className="about-hero">
        <div className="about-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1400"
            alt="Stayora lobby"
          />
          <div className="about-hero-overlay" />
        </div>
        <div className="container about-hero-content">
          <p className="section-label" style={{ color: "var(--gold-light)" }}>Our Story</p>
          <h1>More Than a Hotel.<br /><em>A Home.</em></h1>
        </div>
      </div>

      {/* Story Section */}
      <section className="story-section">
        <div className="container story-inner">
          <div className="story-text">
            <p className="section-label">Est. 2012</p>
            <h2 className="section-title">The Stayora Story</h2>
            <p>
              It started with a simple idea — what if a hotel could feel less like a building and more like belonging somewhere? Stayora was founded in 2012 by the Mehta family in the heart of Mumbai, right on the iconic Marine Drive.
            </p>
            <p style={{ marginTop: "16px" }}>
              Over a decade later, we've hosted over 3,000 guests from across the world — families on vacation, couples on their honeymoon, solo travelers chasing sunsets, and business guests who keep coming back. Every one of them leaves with a memory they carry home.
            </p>
            <p style={{ marginTop: "16px" }}>
              We've grown, renovated, and refined — but the one thing that hasn't changed is our belief that hospitality is personal. Every guest is a guest in our home.
            </p>
          </div>
          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=700"
              alt="Hotel interior"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-item">
            <span>12+</span>
            <p>Years in Business</p>
          </div>
          <div className="stat-item">
            <span>3k+</span>
            <p>Happy Guests</p>
          </div>
          <div className="stat-item">
            <span>4.9★</span>
            <p>Average Rating</p>
          </div>
          <div className="stat-item">
            <span>3</span>
            <p>Room Categories</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="container">
          <div style={{ marginBottom: "56px" }}>
            <p className="section-label">Why Stayora</p>
            <h2 className="section-title">The Difference You'll Feel</h2>
          </div>
          <div className="why-grid">
            {whyUs.map((item, i) => (
              <div className="why-card" key={i}>
                <div className="why-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p className="section-label">The People</p>
            <h2 className="section-title">Meet Our Team</h2>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-img">
                  <img src={member.img} alt={member.name} />
                </div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Ready to Experience Stayora?</h2>
          <p>Book your stay today and become part of our story.</p>
          <Link to="/booking" className="btn-primary" style={{ marginTop: "28px", display: "inline-block", padding: "16px 48px" }}>
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
