import React from "react";
import "./ProductDetail.css";

function EmployeeBenefits() {
  return (
    <div className="product-page employee-benefits-page glassy-bg">
      {/* HERO SECTION */}
      <section className="product-hero-full">
        <div className="product-hero-content">
          <div className="product-hero-text">
            <h1 className="product-hero-title fade-in-up">Employee Benefits</h1>
            <p className="product-hero-subtitle fade-in-up">
              Enhance employee satisfaction and retention with flexible
              benefits, wellness programs, and more.
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
              src="https://assets-global.website-files.com/5e9aa66fd3886c1ecf5c3b1c/63f5e2e2e2e2e2e2e2e2e2e2_hero-benefits.svg"
              alt="Employee Benefits Illustration"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="product-features-grid">
        {[
          "Flexible Benefits",
          "Wellness Programs",
          "Financial Solutions",
          "Employee Assistance",
          "Rewards & Recognition",
          "Benefits Analytics",
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
            <span className="usecase-icon">🎁</span>
            <div className="usecase-title">Flexible Benefits</div>
            <div className="usecase-desc">
              Offer employees a choice of benefits that fit their needs.
            </div>
          </div>
          <div className="usecase-card fade-in-up">
            <span className="usecase-icon">💪</span>
            <div className="usecase-title">Wellness Programs</div>
            <div className="usecase-desc">
              Promote health and well-being with integrated wellness
              initiatives.
            </div>
          </div>
          <div className="usecase-card fade-in-up">
            <span className="usecase-icon">🏆</span>
            <div className="usecase-title">Recognition & Rewards</div>
            <div className="usecase-desc">
              Boost morale with rewards and recognition programs.
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="product-benefits glassy-bg">
        <h2 className="fade-in-up">Benefits of Employee Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">😊</span>
            <div className="benefit-title">Happier Employees</div>
            <div className="benefit-desc">
              Increase satisfaction and retention with valuable benefits.
            </div>
          </div>
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">💡</span>
            <div className="benefit-title">Attract Talent</div>
            <div className="benefit-desc">
              Stand out in the job market with competitive benefits.
            </div>
          </div>
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">📈</span>
            <div className="benefit-title">Boost Productivity</div>
            <div className="benefit-desc">
              Support employee well-being and performance.
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
                avatar: "https://randomuser.me/api/portraits/women/12.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Grace A.",
                company: "WellCo",
                quote:
                  "Our employees love the flexible benefits and wellness programs!",
              },
              {
                avatar: "https://randomuser.me/api/portraits/men/22.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Ibrahim M.",
                company: "TalentEdge",
                quote:
                  "Recognition and rewards have boosted our team's morale.",
              },
              {
                avatar: "https://randomuser.me/api/portraits/women/33.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Ngozi O.",
                company: "CarePlus",
                quote:
                  "Employee assistance programs have made a real difference.",
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
                <div className="customer-quote">"{story.quote}"</div>
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

export default EmployeeBenefits;
