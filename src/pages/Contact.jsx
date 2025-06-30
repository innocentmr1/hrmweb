import "./Contact.css";

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

function Contact() {
  return (
    <div className="contact-page seamless-contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1 className="contact-hero__title fade-in-up">Contact Techpal HR</h1>
          <p className="contact-hero__subtitle fade-in-up">
            We're here to help! Reach out to our team for support, sales, or
            partnership inquiries.
          </p>
        </div>
      </section>

      {/* Split Layout */}
      <section className="contact-main-split">
        <div className="contact-main-left fade-in-up">
          <h2>Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Company (optional)" />
              <input type="tel" placeholder="Phone (optional)" />
            </div>
            <textarea
              placeholder="How can we help you?"
              required
              rows={5}
            ></textarea>
            <button type="submit" className="contact-submit-btn cta-primary">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-main-right fade-in-up">
          <div className="contact-methods-grid">
            {contactMethods.map((method, idx) => (
              <a
                key={method.type}
                href={method.link}
                className="contact-method-card"
                style={{ animationDelay: `${idx * 0.15}s` }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={method.icon}
                  alt={method.type + " icon"}
                  className="contact-method-icon"
                />
                <div className="contact-method-type">{method.type}</div>
                <div className="contact-method-value">{method.value}</div>
              </a>
            ))}
          </div>
          <div className="contact-map-illustration">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Map or Illustration"
            />
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="contact-offices">
        <h2 className="fade-in-up">Our Offices</h2>
        <div className="offices-grid">
          {offices.map((office, idx) => (
            <div
              className="office-card fade-in-up"
              key={office.city}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <img
                src={office.image}
                alt={office.city + " office"}
                className="office-image"
              />
              <div className="office-info">
                <div className="office-city">{office.city}</div>
                <div className="office-address">{office.address}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="contact-cta-content">
          <h2 className="fade-in-up">Let's Connect</h2>
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
