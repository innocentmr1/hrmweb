import React from "react";
import "./ProductDetail.css";

function Performance() {
  return (
    <div className="product-page performance-page glassy-bg">
      {/* HERO SECTION */}
      <section className="product-hero-full">
        <div className="product-hero-content">
          <div className="product-hero-text">
            <h1 className="product-hero-title fade-in-up">
              Performance Management
            </h1>
            <p className="product-hero-subtitle fade-in-up">
              Drive a high-performance culture with continuous feedback, goal
              tracking, and actionable analytics.
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
              src="https://assets-global.website-files.com/5e9aa66fd3886c1ecf5c3b1c/63f5e2e2e2e2e2e2e2e2e2e2_hero-performance.svg"
              alt="Performance Illustration"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="product-features-grid">
        {[
          "Performance Frameworks",
          "Progress Tracking",
          "Two-Way Feedback",
          "Goal Setting",
          "Performance Reviews",
          "Analytics Dashboard",
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
            <span className="usecase-icon">🎯</span>
            <div className="usecase-title">Continuous Feedback</div>
            <div className="usecase-desc">
              Enable real-time feedback and recognition for employees.
            </div>
          </div>
          <div className="usecase-card fade-in-up">
            <span className="usecase-icon">📈</span>
            <div className="usecase-title">Goal Alignment</div>
            <div className="usecase-desc">
              Align individual and team goals with company objectives.
            </div>
          </div>
          <div className="usecase-card fade-in-up">
            <span className="usecase-icon">📊</span>
            <div className="usecase-title">Performance Analytics</div>
            <div className="usecase-desc">
              Track progress and identify high performers with analytics.
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="product-benefits glassy-bg">
        <h2 className="fade-in-up">Benefits of Performance Management</h2>
        <div className="benefits-grid">
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">🚀</span>
            <div className="benefit-title">Boost Productivity</div>
            <div className="benefit-desc">
              Motivate employees and drive results with clear goals and
              feedback.
            </div>
          </div>
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">🤝</span>
            <div className="benefit-title">Stronger Engagement</div>
            <div className="benefit-desc">
              Foster a culture of recognition and continuous improvement.
            </div>
          </div>
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">📊</span>
            <div className="benefit-title">Data-Driven Decisions</div>
            <div className="benefit-desc">
              Leverage analytics to inform talent and business strategy.
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
                avatar: "https://randomuser.me/api/portraits/men/45.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Ayo T.",
                company: "BetaTech",
                quote:
                  "Performance reviews are now seamless and our teams are more engaged than ever!",
              },
              {
                avatar: "https://randomuser.me/api/portraits/women/55.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Linda E.",
                company: "HealthPlus",
                quote:
                  "The feedback tools have transformed our company culture.",
              },
              {
                avatar: "https://randomuser.me/api/portraits/men/66.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "James K.",
                company: "FinEdge",
                quote:
                  "We finally have the analytics to make smart talent decisions.",
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

export default Performance;
