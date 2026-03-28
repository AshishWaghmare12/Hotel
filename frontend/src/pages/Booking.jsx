import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import "../styles/Booking.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  roomType: "deluxe",
  checkIn: "",
  checkOut: "",
  guests: "1",
  specialRequests: ""
};

function Booking() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({
    ...initialForm,
    roomType: searchParams.get("room") || "deluxe"
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.checkIn) errs.checkIn = "Check-in date required";
    if (!form.checkOut) errs.checkOut = "Check-out date required";
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) {
      errs.checkOut = "Check-out must be after check-in";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    try {
      const res = await axios.post("/api/bookings", form);
      setSuccess(res.data);
      setForm(initialForm);
    } catch (err) {
      const msg = err.response?.data?.error || "Something went wrong. Please try again.";
      setErrors({ general: msg });
    } finally {
      setSubmitting(false);
    }
  };

  const getTodayStr = () => {
    const d = new Date();
    return d.toISOString().split("T")[0];
  };

  if (success) {
    return (
      <div className="booking-success">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Booking Confirmed!</h2>
          <p>{success.message}</p>
          <div className="success-details">
            <p><strong>Booking ID:</strong> #{success.booking.id}</p>
            <p><strong>Room:</strong> {success.booking.roomType}</p>
            <p><strong>Check-in:</strong> {success.booking.checkIn}</p>
            <p><strong>Check-out:</strong> {success.booking.checkOut}</p>
          </div>
          <button className="btn-primary" onClick={() => setSuccess(null)}>
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <div className="booking-hero">
        <div className="booking-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400"
            alt="Booking"
          />
          <div className="booking-hero-overlay" />
        </div>
        <div className="container booking-hero-content">
          <p className="section-label" style={{ color: "var(--gold-light)" }}>Reserve Your Stay</p>
          <h1>Book Your Room</h1>
          <p>Fill in your details and we'll take care of the rest.</p>
        </div>
      </div>

      <div className="booking-main">
        <div className="container booking-layout">
          <div className="booking-form-wrap">
            <h3>Reservation Details</h3>

            {errors.general && (
              <div className="form-error-banner">{errors.general}</div>
            )}

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Rahul Mehta"
                    value={form.name}
                    onChange={handleChange}
                    className={errors.name ? "input-error" : ""}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? "input-error" : ""}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Room Type *</label>
                  <select name="roomType" value={form.roomType} onChange={handleChange}>
                    <option value="deluxe">Classic Deluxe Room</option>
                    <option value="suite">Family Suite</option>
                    <option value="penthouse">Royal Penthouse</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Check-In Date *</label>
                  <input
                    type="date"
                    name="checkIn"
                    min={getTodayStr()}
                    value={form.checkIn}
                    onChange={handleChange}
                    className={errors.checkIn ? "input-error" : ""}
                  />
                  {errors.checkIn && <span className="field-error">{errors.checkIn}</span>}
                </div>
                <div className="form-group">
                  <label>Check-Out Date *</label>
                  <input
                    type="date"
                    name="checkOut"
                    min={form.checkIn || getTodayStr()}
                    value={form.checkOut}
                    onChange={handleChange}
                    className={errors.checkOut ? "input-error" : ""}
                  />
                  {errors.checkOut && <span className="field-error">{errors.checkOut}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Number of Guests *</label>
                <select name="guests" value={form.guests} onChange={handleChange}>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>

              <div className="form-group">
                <label>Special Requests <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional)</span></label>
                <textarea
                  name="specialRequests"
                  rows={4}
                  placeholder="Early check-in, dietary needs, anniversary setup..."
                  value={form.specialRequests}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn-primary submit-btn" disabled={submitting}>
                {submitting ? "Processing..." : "Confirm Booking"}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="booking-sidebar">
            <div className="sidebar-card">
              <h4>Why Book Direct?</h4>
              <ul>
                <li>✓ Best rate guarantee</li>
                <li>✓ Free cancellation (48hr policy)</li>
                <li>✓ Complimentary breakfast</li>
                <li>✓ Early check-in when available</li>
                <li>✓ Instant confirmation</li>
              </ul>
            </div>

            <div className="sidebar-card">
              <h4>Need Help?</h4>
              <p>Our team is available 24/7 to assist you with your booking.</p>
              <p style={{ marginTop: "12px" }}>📞 +91 98765 43210</p>
              <p>✉️ hello@stayora.com</p>
            </div>

            <div className="sidebar-img">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600"
                alt="Room preview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
