import React from "react";
import "./ProductDetail.css";

function Recruitment() {
  return (
    <div className="product-page recruitment-page glassy-bg">
      {/* HERO SECTION */}
      <section className="product-hero-full">
        <div className="product-hero-content">
          <div className="product-hero-text">
            <h1 className="product-hero-title fade-in-up">Recruitment</h1>
            <p className="product-hero-subtitle fade-in-up">
              Optimize every step of your hiring process with automation and
              smart tools designed to attract and retain top talent.
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
              src="https://assets-global.website-files.com/5e9aa66fd3886c1ecf5c3b1c/63f5e2e2e2e2e2e2e2e2e2e2_hero-recruitment.svg"
              alt="Recruitment Illustration"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="product-features-grid">
        {[
          "Automated Workflows",
          "Talent Pool Management",
          "Interview Scheduling",
          "Offer Management",
          "Onboarding Integration",
          "Analytics & Reporting",
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
            <span className="usecase-icon">📝</span>
            <div className="usecase-title">Automated Screening</div>
            <div className="usecase-desc">
              Screen candidates automatically and focus on the best talent.
            </div>
          </div>
          <div className="usecase-card fade-in-up">
            <span className="usecase-icon">📅</span>
            <div className="usecase-title">Smart Scheduling</div>
            <div className="usecase-desc">
              Schedule interviews and manage candidate communications easily.
            </div>
          </div>
          <div className="usecase-card fade-in-up">
            <span className="usecase-icon">🤝</span>
            <div className="usecase-title">Seamless Onboarding</div>
            <div className="usecase-desc">
              Transition new hires smoothly with integrated onboarding tools.
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="product-benefits glassy-bg">
        <h2 className="fade-in-up">Benefits of Recruitment</h2>
        <div className="benefits-grid">
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">⚡</span>
            <div className="benefit-title">Faster Hiring</div>
            <div className="benefit-desc">
              Reduce time-to-hire with automation and smart workflows.
            </div>
          </div>
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">🎯</span>
            <div className="benefit-title">Better Talent</div>
            <div className="benefit-desc">
              Attract and retain top talent with a seamless candidate
              experience.
            </div>
          </div>
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">📊</span>
            <div className="benefit-title">Data-Driven Decisions</div>
            <div className="benefit-desc">
              Use analytics to improve your hiring process and outcomes.
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
                avatar: "https://randomuser.me/api/portraits/men/21.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Bola S.",
                company: "HireRight",
                quote:
                  "We cut our time-to-hire in half and improved candidate experience!",
              },
              {
                avatar: "https://randomuser.me/api/portraits/women/31.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Ada E.",
                company: "TalentPro",
                quote:
                  "Automated screening helped us focus on the best candidates.",
              },
              {
                avatar: "https://randomuser.me/api/portraits/men/41.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                name: "Kunle O.",
                company: "Onboardly",
                quote:
                  "Onboarding is now seamless and new hires are productive from day one.",
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

export default Recruitment;
