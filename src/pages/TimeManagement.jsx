import React from "react";
import "./ProductDetail.css";

function TimeManagement() {
  return (
    <div className="product-page time-management-page glassy-bg">
      {/* HERO SECTION */}
      <section className="product-hero-full">
        <div className="product-hero-content">
          <div className="product-hero-text">
            <h1 className="product-hero-title fade-in-up">Time Management</h1>
            <p className="product-hero-subtitle fade-in-up">
              Keep your workforce accountable and productive with advanced time
              tracking and scheduling tools.
            </p>
            <div className="product-hero-cta fade-in-up">
              <a href="/request-demo" className="cta-primary">
                Request Demo
              </a>
              <a href="/pricing" className="cta-secondary">
                View Pricing
              </a>
            </div>
          </div>
          <div className="product-hero-visual fade-in-up">
            <img
              src="https://assets-global.website-files.com/5e9aa66fd3886c1ecf5c3b1c/63f5e2e2e2e2e2e2e2e2e2e2_hero-time.svg"
              alt="Time Management Illustration"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="product-features-grid">
        {[
          "Time Tracking",
          "Attendance Monitoring",
          "Shift Scheduling",
          "Leave Management",
          "Geo-Location Features",
          "Reporting & Analytics",
        ].map((feature, idx) => (
          <div
            className="feature-item glassy-card fade-in-up"
            key={feature}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <span className="feature-check">✓</span> {feature}
          </div>
        ))}
      </section>

      {/* USE CASES SECTION */}
      <section className="product-usecases glassy-bg">
        <h2 className="fade-in-up">Popular Use Cases</h2>
        <div className="usecases-grid">
          <div className="usecase-card fade-in-up">
            <span className="usecase-icon">⏰</span>
            <div className="usecase-title">Automated Attendance</div>
            <div className="usecase-desc">
              Track employee hours and attendance with ease.
            </div>
          </div>
          <div className="usecase-card fade-in-up">
            <span className="usecase-icon">📅</span>
            <div className="usecase-title">Smart Scheduling</div>
            <div className="usecase-desc">
              Create and manage shifts, leave, and overtime automatically.
            </div>
          </div>
          <div className="usecase-card fade-in-up">
            <span className="usecase-icon">📍</span>
            <div className="usecase-title">Geo-Location Tracking</div>
            <div className="usecase-desc">
              Monitor remote and field staff with location-based check-ins.
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="product-benefits glassy-bg">
        <h2 className="fade-in-up">Benefits of Time Management</h2>
        <div className="benefits-grid">
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">⏳</span>
            <div className="benefit-title">Save Time</div>
            <div className="benefit-desc">
              Automate manual processes and reduce errors in time tracking.
            </div>
          </div>
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">📊</span>
            <div className="benefit-title">Accurate Analytics</div>
            <div className="benefit-desc">
              Get real-time insights into attendance and productivity.
            </div>
          </div>
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">📱</span>
            <div className="benefit-title">Mobile Friendly</div>
            <div className="benefit-desc">
              Manage time and attendance from any device, anywhere.
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER SUCCESS STORIES / TESTIMONIALS */}
      <section className="product-testimonials glassy-bg">
        <h2 className="fade-in-up">Customer Success Stories</h2>
        <div className="customer-carousel">
          <div className="customer-carousel-track">
            {[
              {
                avatar: "https://randomuser.me/api/portraits/men/77.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Chinedu A.",
                company: "LogiPro",
                quote:
                  "Time tracking is now effortless and our payroll is always accurate!",
              },
              {
                avatar: "https://randomuser.me/api/portraits/women/88.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Fatima S.",
                company: "RetailHub",
                quote:
                  "Scheduling and leave management have never been easier.",
              },
              {
                avatar: "https://randomuser.me/api/portraits/men/99.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Olu O.",
                company: "FieldForce",
                quote:
                  "Geo-location check-ins are a game changer for our field teams.",
              },
            ].map((story, idx) => (
              <div
                className="customer-card fade-in-up"
                key={story.name}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="customer-avatar">
                  <img src={story.avatar} alt="Customer" />
                </div>
                <div className="customer-quote">“{story.quote}”</div>
                <div className="customer-meta">
                  <img
                    className="customer-company-logo"
                    src={story.logo}
                    alt="Company Logo"
                  />
                  <div className="customer-name">{story.name}</div>
                  <div className="customer-company">{story.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="product-cta glassy-bg">
        <a href="/contact" className="cta-primary">
          Request Demo
        </a>
        <a href="/pricing" className="cta-secondary">
          View Pricing
        </a>
      </section>
    </div>
  );
}

export default TimeManagement;
