import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim()) errs.email = "Required";
    if (!form.message.trim()) errs.message = "Required";
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    // in a real app you'd post this to an API
    setSent(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1400"
            alt="Contact"
          />
          <div className="contact-hero-overlay" />
        </div>
        <div className="container contact-hero-content">
          <p className="section-label" style={{ color: "var(--gold-light)" }}>Reach Out</p>
          <h1>Get in Touch</h1>
          <p>We're here to help. Reach out and our team will get back to you shortly.</p>
        </div>
      </div>

      <div className="contact-main">
        <div className="container contact-layout">
          {/* Info */}
          <div className="contact-info">
            <div className="info-block">
              <div className="info-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>Marine Drive, Nariman Point<br />Mumbai, Maharashtra 400020</p>
              </div>
            </div>
            <div className="info-block">
              <div className="info-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
                <p>+91 22 4567 8901</p>
              </div>
            </div>
            <div className="info-block">
              <div className="info-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>hello@stayora.com</p>
                <p>reservations@stayora.com</p>
              </div>
            </div>
            <div className="info-block">
              <div className="info-icon">⏰</div>
              <div>
                <h4>Front Desk Hours</h4>
                <p>Open 24 hours, 7 days a week</p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="map-placeholder">
              <div className="map-inner">
                <p>📍 Marine Drive, Mumbai</p>
                <p style={{ fontSize: "0.8rem", marginTop: "8px", opacity: 0.7 }}>
                  Embed Google Maps here using an iframe with your API key
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <h3>Send Us a Message</h3>

            {sent ? (
              <div className="contact-sent">
                <div className="sent-icon">✓</div>
                <h4>Message Sent!</h4>
                <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button className="btn-outline" onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row-contact">
                  <div className="form-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={errors.name ? "input-error" : ""}
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
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
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? "input-error" : ""}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>
                <button type="submit" className="btn-primary" style={{ padding: "15px 40px", fontSize: "0.95rem" }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
