import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const offices = [
    {
      city: "Lagos",
      country: "Nigeria",
      address: "8b Metalbox Road, Ikeja, Lagos.",
      email: "hello@hrmpro.com",
      phone: "+234 1 234 5678",
    },
    {
      city: "Nairobi",
      country: "Kenya",
      address: "36, Othaya Road, Kileleshwa, Nairobi.",
      email: "hello@hrmpro.com",
      phone: "+254 20 123 4567",
    },
    {
      city: "Accra",
      country: "Ghana",
      address: "123 Ring Road Central, Accra.",
      email: "hello@hrmpro.com",
      phone: "+233 30 123 4567",
    },
  ];

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description:
        "Send us an email and we'll get back to you within 24 hours.",
      action: "hello@hrmpro.com",
    },
    {
      icon: "📞",
      title: "Call Us",
      description:
        "Speak with our sales team to learn more about our solutions.",
      action: "+234 1 234 5678",
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with our support team for immediate assistance.",
      action: "Start Chat",
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Get in Touch</h1>
          <p className="contact-hero__subtitle">
            Ready to transform your HR operations? Let's discuss how we can help
            your business succeed.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="methods-content">
          <h2>How Can We Help You?</h2>
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="method-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="method-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
                <div className="method-action">{method.action}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="form-content">
          <div className="form-info">
            <h2>Send Us a Message</h2>
            <p>
              Fill out the form below and our team will get back to you within
              24 hours. We're here to help you find the perfect HR solution for
              your business.
            </p>
            <div className="form-benefits">
              <div className="benefit-item">
                <span className="benefit-check">✓</span>
                Free consultation
              </div>
              <div className="benefit-item">
                <span className="benefit-check">✓</span>
                Personalized demo
              </div>
              <div className="benefit-item">
                <span className="benefit-check">✓</span>
                Implementation support
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="company">Company Name *</label>
              <input type="text" id="company" name="company" required />
            </div>
            <div className="form-group">
              <label htmlFor="employees">Number of Employees</label>
              <select id="employees" name="employees">
                <option value="">Select range</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="interest">What are you interested in?</label>
              <select id="interest" name="interest">
                <option value="">Select option</option>
                <option value="hrms">HRMS</option>
                <option value="payroll">Payroll</option>
                <option value="performance">Performance Management</option>
                <option value="recruitment">Recruitment</option>
                <option value="time">Time Management</option>
                <option value="benefits">Employee Benefits</option>
                <option value="demo">Product Demo</option>
                <option value="pricing">Pricing Information</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us more about your needs..."
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Office Locations */}
      <section className="office-locations">
        <div className="locations-content">
          <h2>Our Offices</h2>
          <div className="locations-grid">
            {offices.map((office, index) => (
              <div
                key={office.city}
                className="office-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="office-header">
                  <h3>{office.city}</h3>
                  <span className="office-country">{office.country}</span>
                </div>
                <div className="office-details">
                  <div className="office-address">
                    <strong>Address:</strong>
                    <br />
                    {office.address}
                  </div>
                  <div className="office-contact">
                    <div className="contact-item">
                      <strong>Email:</strong> {office.email}
                    </div>
                    <div className="contact-item">
                      <strong>Phone:</strong> {office.phone}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-content">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <div className="map-icon">🗺️</div>
            <p>Interactive map showing our office locations</p>
            <p>Lagos • Nairobi • Accra</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="contact-cta__content">
          <h2>Ready to Get Started?</h2>
          <p>
            Join thousands of businesses that have transformed their HR
            operations with HRMPro.
          </p>
          <div className="contact-cta__buttons">
            <Link to="/products" className="cta-primary">
              Explore Products
            </Link>
            <Link to="/pricing" className="cta-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
