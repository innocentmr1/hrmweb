import { Link } from "react-router-dom";
import "./Pricing.css";

function Pricing() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description:
        "Perfect for small businesses getting started with HR automation.",
      features: [
        "Up to 50 employees",
        "Basic HRMS features",
        "Payroll processing",
        "Time tracking",
        "Email support",
        "Basic reporting",
      ],
      popular: false,
      color: "#96ceb4",
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description:
        "Ideal for growing companies that need comprehensive HR solutions.",
      features: [
        "Up to 200 employees",
        "Full HRMS suite",
        "Advanced payroll",
        "Performance management",
        "Recruitment tools",
        "Priority support",
        "Advanced analytics",
        "API access",
      ],
      popular: true,
      color: "#00bfae",
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description:
        "For large organizations requiring enterprise-grade HR solutions.",
      features: [
        "Unlimited employees",
        "All features included",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom reporting",
        "Multi-country support",
        "White-label options",
      ],
      popular: false,
      color: "#ff6b35",
    },
  ];

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="pricing-hero__content">
          <h1 className="pricing-hero__title">Simple, Transparent Pricing</h1>
          <p className="pricing-hero__subtitle">
            Choose the plan that best fits your business needs. All plans
            include our core HR features.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-plans">
        <div className="pricing-content">
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`pricing-card ${
                  plan.popular ? "pricing-card--popular" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                <div className="pricing-header">
                  <h3 className="pricing-name">{plan.name}</h3>
                  <div className="pricing-price">
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">/{plan.period}</span>
                  </div>
                  <p className="pricing-description">{plan.description}</p>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="pricing-feature">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="pricing-cta">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq">
        <div className="faq-content">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Can I change my plan later?</h3>
              <p>
                Yes, you can upgrade or downgrade your plan at any time. Changes
                will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="faq-item">
              <h3>Is there a setup fee?</h3>
              <p>
                No, there are no hidden setup fees. You only pay the monthly
                subscription fee for your chosen plan.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer a free trial?</h3>
              <p>
                Yes, we offer a 14-day free trial for all plans. No credit card
                required to start your trial.
              </p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>
                We accept all major credit cards, PayPal, and bank transfers for
                annual plans.
              </p>
            </div>
            <div className="faq-item">
              <h3>Is there a contract?</h3>
              <p>
                No long-term contracts required. You can cancel your
                subscription at any time.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer discounts for nonprofits?</h3>
              <p>
                Yes, we offer special pricing for nonprofit organizations.
                Contact us for more details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta-section">
        <div className="pricing-cta-content">
          <h2>Ready to Get Started?</h2>
          <p>
            Start your free trial today and see how HRMPro can transform your HR
            operations.
          </p>
          <div className="pricing-cta-buttons">
            <Link to="/contact" className="cta-primary">
              Start Free Trial
            </Link>
            <Link to="/contact" className="cta-secondary">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
