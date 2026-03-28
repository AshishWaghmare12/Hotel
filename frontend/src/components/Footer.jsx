import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3 className="footer-logo">Stay<span>ora</span></h3>
          <p>Where luxury meets comfort. Your home away from home, crafted for every kind of traveler.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">TW</a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/booking">Book a Room</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Our Rooms</h4>
          <ul>
            <li><Link to="/rooms">Classic Deluxe</Link></li>
            <li><Link to="/rooms">Family Suite</Link></li>
            <li><Link to="/rooms">Royal Penthouse</Link></li>
          </ul>
        </div>

        <div className="footer-contact-info">
          <h4>Contact Us</h4>
          <p>📍 Marine Drive, Mumbai 400020</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@stayora.com</p>
          <p>⏰ Front Desk: 24/7</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2024 Stayora. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
