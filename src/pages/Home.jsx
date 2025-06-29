import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const products = [
    {
      id: "hrms",
      title: "HRMS",
      subtitle: "Comprehensive people and data management platform.",
      description:
        "Effortlessly manage employee data, automate HR processes, gain actionable insights, and boost engagement with Techpal HR's robust HRMS.",
      icon: "👥",
      color: "#00bfae",
    },
    {
      id: "payroll",
      title: "Payroll",
      subtitle: "Streamlined payroll management and financing",
      description:
        "Ensure accurate payroll, maintain compliance, and access flexible payroll financing with Techpal HR's efficient payroll solution.",
      icon: "💰",
      color: "#ff6b35",
    },
    {
      id: "performance",
      title: "Performance",
      subtitle: "Drive a high-performance culture.",
      description:
        "Empower your teams with goal tracking, feedback, and analytics to foster continuous improvement and business growth.",
      icon: "📈",
      color: "#4ecdc4",
    },
    {
      id: "recruitment",
      title: "Recruitment",
      subtitle: "Smart hiring for business growth",
      description:
        "Optimize every step of your hiring process with automation and smart tools designed to attract and retain top talent.",
      icon: "🎯",
      color: "#45b7d1",
    },
    {
      id: "time",
      title: "Time Management",
      subtitle: "Accountability and productivity, simplified.",
      description:
        "Track work hours, manage schedules, and monitor attendance with Techpal HR's advanced time management system.",
      icon: "⏰",
      color: "#96ceb4",
    },
    {
      id: "benefits",
      title: "Employee Benefits",
      subtitle: "Enhance employee satisfaction and retention",
      description:
        "Offer your team valuable benefits, including flexible financing and wellness programs, all in one place.",
      icon: "🎁",
      color: "#feca57",
    },
  ];

  const trustedCompanies = [
    "Microsoft",
    "Sage",
    "SAP",
    "Oracle",
    "Google",
    "Amazon",
    "Netflix",
    "Spotify",
  ];

  const caseStudies = [
    {
      title: "TGI Group Optimises HR Processes",
      description: "50% less time spent on running payroll",
      image: "🏢",
    },
    {
      title: "Afya Care Boosts Operational Efficiency",
      description: "Streamlined operations across multiple locations",
      image: "🏥",
    },
    {
      title: "Tangerine Africa Moves from Spreadsheets",
      description: "Complete automation of HR processes",
      image: "🍊",
    },
  ];

  return (
    <div className="home seamless-home">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="home-hero__title">
            The All-in-One <span>HR Platform</span> for Modern Teams
          </h1>
          <p className="home-hero__subtitle">
            Automate, optimize, and empower your workforce with Techpal HR. From
            recruitment to retirement, manage every HR process in one seamless
            platform.
          </p>
          <div className="home-hero__cta">
            <Link
              to="/request-demo"
              className="home-hero__btn home-hero__btn--primary"
            >
              Request a Demo
            </Link>
            <Link
              to="/products"
              className="home-hero__btn home-hero__btn--secondary"
            >
              Explore Products
            </Link>
          </div>
        </div>
        <div className="home-hero__visual">
          {/* Placeholder SVG/graphic */}
          <svg
            width="340"
            height="260"
            viewBox="0 0 340 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-hero__svg"
          >
            <ellipse cx="170" cy="130" rx="160" ry="90" fill="#f2f7f6" />
            <rect
              x="60"
              y="60"
              width="220"
              height="80"
              rx="20"
              fill="#049fff"
              opacity="0.15"
            />
            <rect
              x="100"
              y="100"
              width="140"
              height="40"
              rx="12"
              fill="#000"
              opacity="0.12"
            />
          </svg>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="home-trusted">
        <div className="home-trusted__label">Trusted by leading companies</div>
        <div className="home-trusted__logos">
          {trustedCompanies.map((company) => (
            <div className="home-trusted__logo" key={company}>
              {company}
            </div>
          ))}
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="home-products">
        <h2 className="home-products__title">
          All Your HR Needs, One Platform
        </h2>
        <div className="home-products__grid">
          {products.map((product) => (
            <div className="home-product-card" key={product.id}>
              <div
                className="home-product-card__icon"
                style={{ backgroundColor: product.color }}
              >
                {product.icon}
              </div>
              <h3 className="home-product-card__title">{product.title}</h3>
              <p className="home-product-card__subtitle">{product.subtitle}</p>
              <p className="home-product-card__desc">{product.description}</p>
              <Link
                to={`/products#${product.id}`}
                className="home-product-card__link"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="home-features">
        <div className="home-features__grid">
          <div className="home-feature">
            <div className="home-feature__icon">🔗</div>
            <h4>Effortless Integrations</h4>
            <p>
              Connect Techpal HR with your favorite tools and platforms for a
              seamless workflow.
            </p>
          </div>
          <div className="home-feature">
            <div className="home-feature__icon">🌍</div>
            <h4>Global Compliance</h4>
            <p>
              Stay compliant with local and international regulations as you
              scale your business.
            </p>
          </div>
          <div className="home-feature">
            <div className="home-feature__icon">🔒</div>
            <h4>Enterprise-Grade Security</h4>
            <p>
              Protect your HR data with advanced security, encryption, and
              privacy controls.
            </p>
          </div>
          <div className="home-feature">
            <div className="home-feature__icon">📊</div>
            <h4>Actionable Analytics</h4>
            <p>
              Gain insights into your workforce with real-time dashboards and
              reports.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies/Testimonials Section */}
      <section className="home-case-studies">
        <h2 className="home-case-studies__title">Customer Success Stories</h2>
        <div className="home-case-studies__grid">
          {caseStudies.map((study) => (
            <div className="home-case-card" key={study.title}>
              <div className="home-case-card__image">{study.image}</div>
              <div className="home-case-card__content">
                <h3 className="home-case-card__title">{study.title}</h3>
                <p className="home-case-card__desc">{study.description}</p>
                <span className="home-case-card__quote">
                  “Techpal HR made our HR processes seamless and efficient!”
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="home-cta__content">
          <h2>Ready to Transform Your HR?</h2>
          <p>
            Book a personalized demo and see how Techpal HR can empower your
            business.
          </p>
          <Link to="/request-demo" className="home-cta__btn">
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
