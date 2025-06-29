import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
  const products = [
    {
      id: "hrms",
      title: "HRMS",
      subtitle: "Comprehensive people and data management platform",
      description:
        "Effortlessly manage employee data, automate HR processes, gain actionable insights, and boost engagement with Techpal HR's robust HRMS.",
      features: [
        "Employee Data Management",
        "Process Automation",
        "Performance Insights",
        "Employee Engagement",
        "Advanced Reporting",
        "Secure Platform",
      ],
      icon: "👥",
      color: "#00bfae",
      image: "🏢",
    },
    {
      id: "payroll",
      title: "Payroll",
      subtitle: "Streamlined payroll management and financing",
      description:
        "Ensure accurate payroll, maintain compliance, and access flexible payroll financing with Techpal HR's efficient payroll solution.",
      features: [
        "Accurate Calculations",
        "Compliance Management",
        "Payment Disbursement",
        "Payroll Financing",
        "Time-Saving Automation",
        "Multi-Country Support",
      ],
      icon: "💰",
      color: "#ff6b35",
      image: "💳",
    },
    {
      id: "performance",
      title: "Performance Management",
      subtitle: "Drive a high-performance culture",
      description:
        "Empower your teams with goal tracking, feedback, and analytics to foster continuous improvement and business growth.",
      features: [
        "Performance Frameworks",
        "Progress Tracking",
        "Two-Way Feedback",
        "Goal Setting",
        "Performance Reviews",
        "Analytics Dashboard",
      ],
      icon: "📈",
      color: "#4ecdc4",
      image: "🎯",
    },
    {
      id: "recruitment",
      title: "Recruitment",
      subtitle: "Smart hiring for business growth",
      description:
        "Optimize every step of your hiring process with automation and smart tools designed to attract and retain top talent.",
      features: [
        "Automated Workflows",
        "Talent Pool Management",
        "Interview Scheduling",
        "Offer Management",
        "Onboarding Integration",
        "Analytics & Reporting",
      ],
      icon: "🎯",
      color: "#45b7d1",
      image: "💼",
    },
    {
      id: "time",
      title: "Time Management",
      subtitle: "Accountability and productivity, simplified",
      description:
        "Track work hours, manage schedules, and monitor attendance with Techpal HR's advanced time management system.",
      features: [
        "Time Tracking",
        "Attendance Monitoring",
        "Shift Scheduling",
        "Leave Management",
        "Geo-Location Features",
        "Reporting & Analytics",
      ],
      icon: "⏰",
      color: "#96ceb4",
      image: "🕒",
    },
    {
      id: "benefits",
      title: "Employee Benefits",
      subtitle: "Enhance employee satisfaction and retention",
      description:
        "Offer your team valuable benefits, including flexible financing and wellness programs, all in one place.",
      features: [
        "Flexible Benefits",
        "Wellness Programs",
        "Financial Solutions",
        "Employee Assistance",
        "Rewards & Recognition",
        "Benefits Analytics",
      ],
      icon: "🎁",
      color: "#feca57",
      image: "🎉",
    },
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero__content">
          <h1 className="products-hero__title">Our Products</h1>
          <p className="products-hero__subtitle">
            Discover Techpal HR's suite of solutions designed to streamline your
            business operations and elevate the employee experience.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid">
        {products.map((product, index) => (
          <div
            key={product.id}
            id={product.id}
            className="product-section"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="product-section__content">
              <div className="product-section__header">
                <div
                  className="product-section__icon"
                  style={{ backgroundColor: product.color }}
                >
                  {product.icon}
                </div>
                <div className="product-section__text">
                  <h2 className="product-section__title">{product.title}</h2>
                  <h3 className="product-section__subtitle">
                    {product.subtitle}
                  </h3>
                  <p className="product-section__description">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="product-section__features">
                <h4>Key Features:</h4>
                <div className="features-grid">
                  {product.features.map((feature, featureIndex) => (
                    <div
                      key={feature}
                      className="feature-item"
                      style={{ animationDelay: `${featureIndex * 0.1}s` }}
                    >
                      <span className="feature-check">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="product-section__cta">
                <Link to="/contact" className="product-cta-btn">
                  Request Demo
                </Link>
                <Link to="/pricing" className="product-learn-btn">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="product-section__visual">
              <div
                className="product-visual"
                style={{ backgroundColor: product.color + "20" }}
              >
                <span className="product-visual__icon">{product.image}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Integration Section */}
      <section className="integration-section">
        <div className="integration-content">
          <h2>Effortless Integrations</h2>
          <p>
            Techpal HR integrates smoothly with your existing ERP platforms,
            including Microsoft, Sage, SAP, and Oracle.
          </p>
          <div className="integration-logos">
            <div className="integration-logo">Microsoft</div>
            <div className="integration-logo">Sage</div>
            <div className="integration-logo">SAP</div>
            <div className="integration-logo">Oracle</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="products-cta__content">
          <h2>Ready to Transform Your HR Operations?</h2>
          <p>Get started with Techpal HR's comprehensive solutions today.</p>
          <div className="products-cta__buttons">
            <Link to="/contact" className="cta-primary">
              Request a Demo
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

export default Products;
