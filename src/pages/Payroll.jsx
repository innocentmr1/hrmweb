import React from "react";
import "./ProductDetail.css";

function Payroll() {
  return (
    <div className="product-page payroll-page glassy-bg">
      {/* HERO SECTION */}
      <section className="product-hero-full">
        <div className="product-hero-content">
          <div className="product-hero-text">
            <h1 className="product-hero-title fade-in-up">Payroll</h1>
            <p className="product-hero-subtitle fade-in-up">
              Streamline payroll management, ensure compliance, and access
              flexible payroll financing with ease.
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
              src="https://assets-global.website-files.com/5e9aa66fd3886c1ecf5c3b1c/63f5e2e2e2e2e2e2e2e2e2e2_hero-payroll.svg"
              alt="Payroll Illustration"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="product-features-grid">
        {[
          "Accurate Calculations",
          "Compliance Management",
          "Payment Disbursement",
          "Payroll Financing",
          "Time-Saving Automation",
          "Multi-Country Support",
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
            <span className="usecase-icon">💸</span>
            <div className="usecase-title">Automated Payroll</div>
            <div className="usecase-desc">
              Run payroll in minutes, not hours, with automated calculations and
              disbursements.
            </div>
          </div>
          <div className="usecase-card fade-in-up">
            <span className="usecase-icon">🧾</span>
            <div className="usecase-title">Tax Compliance</div>
            <div className="usecase-desc">
              Stay compliant with local and international payroll regulations.
            </div>
          </div>
          <div className="usecase-card fade-in-up">
            <span className="usecase-icon">🏦</span>
            <div className="usecase-title">Payroll Financing</div>
            <div className="usecase-desc">
              Access flexible payroll financing to support your business growth.
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="product-benefits glassy-bg">
        <h2 className="fade-in-up">Benefits of Payroll</h2>
        <div className="benefits-grid">
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">⏱️</span>
            <div className="benefit-title">Save Time</div>
            <div className="benefit-desc">
              Automate payroll processes and reduce manual errors.
            </div>
          </div>
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">🔒</span>
            <div className="benefit-title">Secure & Compliant</div>
            <div className="benefit-desc">
              Protect sensitive payroll data and ensure compliance.
            </div>
          </div>
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">🌍</span>
            <div className="benefit-title">Global Ready</div>
            <div className="benefit-desc">
              Support for multi-country payroll and currencies.
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
                avatar: "https://randomuser.me/api/portraits/men/12.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Tunde F.",
                company: "PayFast",
                quote: "Payroll is now stress-free and always on time!",
              },
              {
                avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Ngozi M.",
                company: "GlobalTech",
                quote:
                  "We love the compliance features and the support for multiple countries.",
              },
              {
                avatar: "https://randomuser.me/api/portraits/men/33.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Emeka I.",
                company: "BizEdge",
                quote:
                  "Payroll financing helped us grow without cashflow worries.",
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

export default Payroll;
