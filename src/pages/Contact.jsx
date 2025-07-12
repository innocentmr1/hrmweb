import "./Contact.css";
import { useState } from "react";

const contactMethods = [
  {
    type: "Email",
    value: "support@techpalhr.com",
    icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
    link: "mailto:support@techpalhr.com",
  },
  {
    type: "Phone",
    value: "+1 (800) 123-4567",
    icon: "https://cdn-icons-png.flaticon.com/512/724/724664.png",
    link: "tel:+18001234567",
  },
  {
    type: "Live Chat",
    value: "Chat with us",
    icon: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png",
    link: "#chat",
  },
];

const offices = [
  {
    city: "Lagos",
    address: "123 Techpal Ave, Victoria Island, Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    city: "London",
    address: "456 HRM St, Canary Wharf, London, UK",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    city: "New York",
    address: "789 HR Blvd, Manhattan, New York, USA",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
];

const contactBenefits = [
  "Fast response from our team",
  "Personalized support for your needs",
  "Expert HR advice and guidance",
  "Global offices for local support",
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <div className="contact-page seamless-contact">
      {/* Hero Section */}
      <section className="contact-hero redesigned-contact-hero">
        <div className="contact-hero__content">
          <h1 className="contact-hero__title fade-in-up">
            Get in Touch with Techpal HR
          </h1>
          <p className="contact-hero__subtitle fade-in-up">
            Our team is here to help you with product questions, support, or
            partnership opportunities. Reach out and we'll respond promptly.
          </p>
        </div>
        <div className="contact-hero__visual">
          <img
            src="/src/assets/hero-illustration.svg"
            alt="Contact Illustration"
            style={{ width: 120, height: 120, opacity: 0.9 }}
          />
        </div>
      </section>

      {/* Main Split Section */}
      <section className="contact-main-split redesigned-contact-main">
        <div className="contact-main-left fade-in-up">
          <div className="contact-form-card glassy-card">
            <h2>Contact Us</h2>
            <p className="contact-form-desc">
              Let us know how we can help you. Our team will get back to you as
              soon as possible.
            </p>
            <form className="contact-form redesigned-contact-form">
              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    id="contact-name"
                  />
                  <label htmlFor="contact-name">Your Name</label>
                  <span className="input-icon">
                    {/* User SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="8"
                        r="4"
                        stroke="#049fff"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4"
                        stroke="#049fff"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    id="contact-email"
                  />
                  <label htmlFor="contact-email">Your Email</label>
                  <span className="input-icon">
                    {/* Email SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="3"
                        stroke="#049fff"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M3.5 6.5L12 13.5L20.5 6.5"
                        stroke="#049fff"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder=" "
                    id="contact-company"
                  />
                  <label htmlFor="contact-company">Company (optional)</label>
                  <span className="input-icon">
                    {/* Building SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="3"
                        stroke="#049fff"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M9 20v-6h6v6"
                        stroke="#049fff"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder=" "
                    id="contact-phone"
                  />
                  <label htmlFor="contact-phone">Phone (optional)</label>
                  <span className="input-icon">
                    {/* Phone SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M5.5 3A2.5 2.5 0 003 5.5v2A2.5 2.5 0 005.5 10h.09a1 1 0 01.95.68l.7 2.1a1 1 0 01-.23 1.04l-1.13 1.13a16.06 16.06 0 007.07 7.07l1.13-1.13a1 1 0 011.04-.23l2.1.7a1 1 0 01.68.95v.09A2.5 2.5 0 0021 19.5v-2A2.5 2.5 0 0018.5 15h-.09a1 1 0 01-.95-.68l-.7-2.1a1 1 0 01.23-1.04l1.13-1.13a16.06 16.06 0 00-7.07-7.07l-1.13 1.13a1 1 0 01-1.04.23l-2.1-.7A1 1 0 015.5 3z"
                        stroke="#049fff"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="form-group">
                <div className="input-wrapper">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    id="contact-message"
                    rows={5}
                  ></textarea>
                  <label htmlFor="contact-message">How can we help you?</label>
                  <span className="input-icon input-icon--textarea">
                    {/* Message SVG */}
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="3"
                        stroke="#049fff"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M3.5 6.5L12 13.5L20.5 6.5"
                        stroke="#049fff"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="contact-submit-btn cta-primary redesigned-contact-submit-btn"
              >
                Send Message
              </button>
              <div className="contact-form-success" style={{ display: "none" }}>
                Thank you! Your message has been sent.
              </div>
            </form>
          </div>
        </div>
        <div className="contact-main-right fade-in-up">
          <div className="contact-methods-card glassy-card">
            <h3>Contact Methods</h3>
            <div className="contact-methods-list">
              <a
                href="mailto:support@techpalhr.com"
                className="contact-method-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-method-icon-svg">
                  {/* Email SVG */}
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11A2.5 2.5 0 0119.5 20h-15A2.5 2.5 0 012 17.5v-11z"
                      stroke="#049fff"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3.5 6.75L12 13.25l8.5-6.5"
                      stroke="#049fff"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <span>Email: support@techpalhr.com</span>
              </a>
              <a
                href="tel:+18001234567"
                className="contact-method-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-method-icon-svg">
                  {/* Phone SVG */}
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M5.5 3A2.5 2.5 0 003 5.5v2A2.5 2.5 0 005.5 10h.09a1 1 0 01.95.68l.7 2.1a1 1 0 01-.23 1.04l-1.13 1.13a16.06 16.06 0 007.07 7.07l1.13-1.13a1 1 0 011.04-.23l2.1.7a1 1 0 01.68.95v.09A2.5 2.5 0 0021 19.5v-2A2.5 2.5 0 0018.5 15h-.09a1 1 0 01-.95-.68l-.7-2.1a1 1 0 01.23-1.04l1.13-1.13a16.06 16.06 0 00-7.07-7.07l-1.13 1.13a1 1 0 01-1.04.23l-2.1-.7A1 1 0 015.5 3z"
                      stroke="#049fff"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <span>Phone: +1 (800) 123-4567</span>
              </a>
              <a href="#chat" className="contact-method-link">
                <span className="contact-method-icon-svg">
                  {/* Chat SVG */}
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M4 19v-2.5A2.5 2.5 0 016.5 14h11A2.5 2.5 0 0120 16.5V19a1 1 0 01-1 1H5a1 1 0 01-1-1z"
                      stroke="#049fff"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v5A2.5 2.5 0 0117.5 14h-11A2.5 2.5 0 014 11.5v-5z"
                      stroke="#049fff"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <span>Live Chat</span>
              </a>
            </div>
            <div className="contact-map-illustration">
              <img
                src="/src/assets/hero-illustration.svg"
                alt="Map or Illustration"
                style={{
                  width: "100%",
                  maxWidth: 220,
                  margin: "1.5rem auto 0 auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Help Section */}
      <section className="contact-help-section">
        <h2 className="fade-in-up">How Can We Help?</h2>
        <div className="help-cards-grid">
          <div
            className="help-card fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="help-card-icon">
              {/* Sales Inquiry SVG */}
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#eaf6ff" />
                <path
                  d="M8 12h8M8 16h5"
                  stroke="#049fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M8 8h8"
                  stroke="#049fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="help-card-title">Sales Inquiry</div>
            <div className="help-card-desc">
              Learn more about our products, pricing, and how Techpal HR can
              help your business grow.
            </div>
          </div>
          <div
            className="help-card fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="help-card-icon">
              {/* Support SVG */}
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#eaf6ff" />
                <path
                  d="M12 8v4l3 2"
                  stroke="#049fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="help-card-title">Customer Support</div>
            <div className="help-card-desc">
              Get help with your account, technical issues, or any questions
              about using Techpal HR.
            </div>
          </div>
          <div
            className="help-card fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="help-card-icon">
              {/* Partnerships SVG */}
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#eaf6ff" />
                <path
                  d="M8 12h8M12 8v8"
                  stroke="#049fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="help-card-title">Partnerships</div>
            <div className="help-card-desc">
              Interested in partnering with us? Let's explore how we can work
              together for mutual success.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section redesigned-contact-cta">
        <div className="contact-cta-content">
          <h2 className="fade-in-up">Ready to Connect?</h2>
          <p className="fade-in-up">
            Our team is ready to answer your questions and help you get started
            with Techpal HR.
          </p>
          <div className="contact-cta-buttons fade-in-up">
            <a href="/request-demo" className="cta-primary">
              Request a Demo
            </a>
            <a href="mailto:support@techpalhr.com" className="cta-secondary">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
