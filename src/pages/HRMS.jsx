import React from "react";
import "./ProductDetail.css";

function HRMS() {
  return (
    <div className="product-page hrms-page glassy-bg">
      {/* HERO SECTION */}
      <section className="product-hero-full">
        <div className="product-hero-content">
          <div className="product-hero-text">
            <h1 className="product-hero-title fade-in-up">Techpal HRMS</h1>
            <p className="product-hero-subtitle fade-in-up">
              The all-in-one HR management system to streamline, automate, and
              empower your workforce.
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
              src="https://assets-global.website-files.com/5e9aa66fd3886c1ecf5c3b1c/63f5e2e2e2e2e2e2e2e2e2e2_hero-hrms.svg"
              alt="HRMS Illustration"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="product-features-grid">
        {[
          "Employee Data Management",
          "Process Automation",
          "Performance Insights",
          "Employee Engagement",
          "Advanced Reporting",
          "Secure Platform",
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
            <span className="usecase-icon">📋</span>
            <div className="usecase-title">Onboarding Automation</div>
            <div className="usecase-desc">
              Automate employee onboarding, document collection, and orientation
              tasks.
            </div>
          </div>
          <div className="usecase-card fade-in-up">
            <span className="usecase-icon">📊</span>
            <div className="usecase-title">Centralized Employee Records</div>
            <div className="usecase-desc">
              Maintain a single source of truth for all employee data and
              documents.
            </div>
          </div>
          <div className="usecase-card fade-in-up">
            <span className="usecase-icon">🔒</span>
            <div className="usecase-title">Compliance Management</div>
            <div className="usecase-desc">
              Ensure compliance with labor laws and automate reporting
              requirements.
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="product-benefits glassy-bg">
        <h2 className="fade-in-up">Benefits of Techpal HRMS</h2>
        <div className="benefits-grid">
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">⚡</span>
            <div className="benefit-title">Faster HR Operations</div>
            <div className="benefit-desc">
              Save time and reduce manual work with automation.
            </div>
          </div>
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">🔍</span>
            <div className="benefit-title">Actionable Insights</div>
            <div className="benefit-desc">
              Make better decisions with real-time analytics and reporting.
            </div>
          </div>
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">🔗</span>
            <div className="benefit-title">Seamless Integrations</div>
            <div className="benefit-desc">
              Connect with payroll, performance, and other HR modules easily.
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
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Samuel O.",
                company: "TGI Group",
                quote:
                  "Techpal HRMS made our onboarding process 3x faster and our data is always up to date.",
              },
              {
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Jane D.",
                company: "Afya Care",
                quote:
                  "We love the analytics and the ease of managing employee records in one place.",
              },
              {
                avatar: "https://randomuser.me/api/portraits/men/65.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Michael B.",
                company: "Tangerine Africa",
                quote: "Our HR team is now more productive than ever!",
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

export default HRMS;
