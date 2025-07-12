import { Link } from "react-router-dom";
import "./Pricing.css";

const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    period: "mo",
    description: "For small teams getting started with HR automation.",
    features: [
      "Core HRMS",
      "Employee Self-Service",
      "Basic Analytics",
      "Email Support",
    ],
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    popular: false,
  },
  {
    name: "Growth",
    price: "$99",
    period: "mo",
    description: "For growing companies that need more power and flexibility.",
    features: [
      "All Starter features",
      "Performance Management",
      "Payroll & Benefits",
      "Integrations",
      "Priority Support",
    ],
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with advanced needs.",
    features: [
      "All Growth features",
      "Custom Integrations",
      "Dedicated Success Manager",
      "Advanced Security",
      "24/7 Support",
    ],
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
    popular: false,
  },
];

const faqs = [
  {
    q: "Can I try Techpal HR for free?",
    a: "Yes! We offer a 14-day free trial for all plans. No credit card required.",
  },
  {
    q: "Can I change my plan later?",
    a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time.",
  },
  {
    q: "Is my data secure?",
    a: "Yes, we use enterprise-grade security and encryption to protect your data.",
  },
  {
    q: "Do you offer custom solutions?",
    a: "Yes, our Enterprise plan is fully customizable to your needs. Contact us for a tailored quote.",
  },
];

function Pricing() {
  return (
    <div className="pricing-page seamless-pricing">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="pricing-hero__content">
          <h1 className="pricing-hero__title fade-in-up">
            Simple, Transparent Pricing
          </h1>
          <p className="pricing-hero__subtitle fade-in-up">
            Choose the plan that fits your business. All plans include our core
            HR features, beautiful UI, and world-class support.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-plans">
        <div className="pricing-grid">
          {pricingPlans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`pricing-card fade-in-up${
                plan.popular ? " pricing-card--popular bounce-in" : ""
              }`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className="pricing-card__icon">
                <img src={plan.icon} alt={plan.name + " icon"} />
              </div>
              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
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
              <Link to="/request-demo" className="pricing-cta">
                Get Started
              </Link>
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq">
        <h2 className="pricing-faq__title fade-in-up">
          Frequently Asked Questions
        </h2>
        <div className="faq-grid">
          {faqs.map((faq, idx) => (
            <div
              className="faq-item fade-in-up"
              key={faq.q}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <h4 className="faq-question">{faq.q}</h4>
              <p className="faq-answer">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta-section">
        <div className="pricing-cta-content">
          <h2 className="fade-in-up">Ready to Get Started?</h2>
          <p className="fade-in-up">
            Start your free trial today and see how Techpal HR can transform
            your HR operations.
          </p>
          <div className="pricing-cta-buttons fade-in-up">
            <Link to="/request-demo" className="cta-primary">
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
