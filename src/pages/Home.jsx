import { Link } from "react-router-dom";
import "./Home.css";
import heroIllustration from "../assets/hero-illustration.svg";
import Lottie from "lottie-react";
import heroLottie from "../assets/hero-lottie.json";
import { useState, useEffect, useRef } from "react";
import React from "react";

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
      id: "performance",
      title: "Growth & Performance",
      subtitle: "Drive a high-performance culture.",
      description:
        "Empower your teams with goal tracking, feedback, and analytics to foster continuous improvement and business growth.",
      icon: "📈",
      color: "#4ecdc4",
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
      id: "benefits",
      title: "Employee Benefits",
      subtitle: "Enhance employee satisfaction and retention",
      description:
        "Offer your team valuable benefits, including flexible financing and wellness programs, all in one place.",
      icon: "🎁",
      color: "#feca57",
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
  ];

  const trustedCompanies = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      url: "https://www.microsoft.com/",
    },
    {
      name: "Sage",
      logo: "https://cdn.worldvectorlogo.com/logos/sage-3.svg",
      url: "https://www.sage.com/",
    },
    {
      name: "SAP",
      logo: "https://cdn.worldvectorlogo.com/logos/sap-1.svg",
      url: "https://www.sap.com/",
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      url: "https://www.oracle.com/",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      url: "https://www.google.com/",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      url: "https://www.amazon.com/",
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      url: "https://www.netflix.com/",
    },
    {
      name: "Spotify",
      logo: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg",
      url: "https://www.spotify.com/",
    },
    {
      name: "Facebook",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      url: "https://www.facebook.com/",
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      url: "https://www.apple.com/",
    },
    {
      name: "Slack",
      logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
      url: "https://slack.com/",
    },
    {
      name: "Uber",
      logo: "https://cdn.worldvectorlogo.com/logos/uber-2.svg",
      url: "https://www.uber.com/",
    },
    {
      name: "Zoom",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Zoom_Communications_Logo.svg",
      url: "https://zoom.us/",
    },
    {
      name: "Dropbox",
      logo: "https://cdn.worldvectorlogo.com/logos/dropbox-2.svg",
      url: "https://www.dropbox.com/",
    },
    {
      name: "Adobe",
      logo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
      url: "https://www.adobe.com/",
    },
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

  // Carousel logic at top level
  const [carouselCurrent, setCarouselCurrent] = useState(0);
  const carouselRef = useRef();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 700;
  const cardsToShow = isMobile ? 1 : 2;
  const stories = [
    {
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      name: "Samuel O.",
      company: "TGI Group",
      quote:
        "Techpal HR made our onboarding process 3x faster and our data is always up to date.",
      linkedin: "https://www.linkedin.com/in/samuel-o-placeholder/",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      name: "Jane D.",
      company: "Afya Care",
      quote:
        "We love the analytics and the ease of managing employee records in one place.",
      linkedin: "https://www.linkedin.com/in/jane-d-placeholder/",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      name: "Michael B.",
      company: "Tangerine Africa",
      quote: "Our HR team is now more productive than ever!",
      linkedin: "https://www.linkedin.com/in/michael-b-placeholder/",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/51.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      name: "Fatima S.",
      company: "RetailHub",
      quote: "Scheduling and leave management have never been easier.",
      linkedin: "https://www.linkedin.com/in/fatima-s-placeholder/",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/77.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      name: "Chinedu A.",
      company: "LogiPro",
      quote:
        "Time tracking is now effortless and our payroll is always accurate!",
      linkedin: "https://www.linkedin.com/in/chinedu-a-placeholder/",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      name: "Ngozi O.",
      company: "CarePlus",
      quote: "Employee assistance programs have made a real difference.",
      linkedin: "https://www.linkedin.com/in/ngozi-o-placeholder/",
    },
    // Additional customers
    {
      avatar: "https://randomuser.me/api/portraits/men/81.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      name: "David K.",
      company: "FinEdge",
      quote: "Payroll is now stress-free and always on time!",
      linkedin: "https://www.linkedin.com/in/david-k-placeholder/",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/85.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      name: "Linda E.",
      company: "HealthPlus",
      quote: "The feedback tools have transformed our company culture.",
      linkedin: "https://www.linkedin.com/in/linda-e-placeholder/",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/90.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      name: "James K.",
      company: "BetaTech",
      quote: "We finally have the analytics to make smart talent decisions.",
      linkedin: "https://www.linkedin.com/in/james-k-placeholder/",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/92.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      name: "Ada E.",
      company: "TalentPro",
      quote: "Automated screening helped us focus on the best candidates.",
      linkedin: "https://www.linkedin.com/in/ada-e-placeholder/",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/93.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      name: "Kunle O.",
      company: "Onboardly",
      quote:
        "Onboarding is now seamless and new hires are productive from day one.",
      linkedin: "https://www.linkedin.com/in/kunle-o-placeholder/",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/94.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      name: "Grace A.",
      company: "WellCo",
      quote: "Our employees love the flexible benefits and wellness programs!",
      linkedin: "https://www.linkedin.com/in/grace-a-placeholder/",
    },
  ];
  const total = stories.length;
  const maxIndex = total - cardsToShow;
  useEffect(() => {
    let interval = null;
    const node = carouselRef.current;
    let paused = false;
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };
    if (node) {
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      node.addEventListener("focusin", pause);
      node.addEventListener("focusout", resume);
    }
    interval = setInterval(() => {
      if (!paused) {
        setCarouselCurrent((prev) =>
          prev + cardsToShow > maxIndex ? 0 : prev + cardsToShow
        );
      }
    }, 4000);
    return () => {
      clearInterval(interval);
      if (node) {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        node.removeEventListener("focusin", pause);
        node.removeEventListener("focusout", resume);
      }
    };
  }, [cardsToShow, maxIndex, windowWidth]);
  const goLeft = () =>
    setCarouselCurrent((prev) =>
      prev - cardsToShow < 0 ? maxIndex : prev - cardsToShow
    );
  const goRight = () =>
    setCarouselCurrent((prev) =>
      prev + cardsToShow > maxIndex ? 0 : prev + cardsToShow
    );

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-up-scroll");
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ctaSlides = [
    {
      headline: "Ready to Transform Your HR?",
      subtext:
        "Book a personalized demo and see how Techpal HR can empower your business.",
      bg: "linear-gradient(120deg, #e6f7fa 0%, #049fff 100%)",
    },
    {
      headline: "Automate Payroll, Leave, and More",
      subtext: "Experience seamless HR operations with Techpal HR.",
      bg: "linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)",
    },
    {
      headline: "Empower Your Team with Analytics",
      subtext: "Make data-driven decisions for a modern workforce.",
      bg: "linear-gradient(120deg, #f9d423 0%, #ff4e50 100%)",
    },
    {
      headline: "Modern HR for Modern Teams",
      subtext: "All your HR needs in one powerful platform.",
      bg: "linear-gradient(120deg, #43cea2 0%, #185a9d 100%)",
    },
  ];
  const [ctaIndex, setCtaIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCtaIndex((prev) => (prev + 1) % ctaSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

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
            recruitment to retirement, manage every HR process on one platform.
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
        <div
          className="home-hero__visual floating-hero"
          style={{
            position: "relative",
            minHeight: "260px",
            minWidth: "340px",
            width: "100%",
          }}
        >
          {/* Lottie animation as background */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "140%",
              height: "140%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "visible",
            }}
          >
            <Lottie
              animationData={heroLottie}
              loop
              style={{
                width: "100%",
                height: "100%",
                minWidth: "480px",
                minHeight: "360px",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
          {/* Optionally, add foreground content here */}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="home-trusted home-trusted--modern">
        <div className="home-trusted__container">
          <span className="home-trusted__label">
            Trusted by leading companies
          </span>
          <div className="home-trusted__logos-slider-modern">
            <div className="home-trusted__logos-track-modern">
              {[...trustedCompanies, ...trustedCompanies].map(
                (company, idx) => (
                  <a
                    className="home-trusted__logo modern"
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={company.name}
                    key={company.name + idx}
                  >
                    <img
                      src={company.logo}
                      alt={company.name + " logo"}
                      className="home-trusted__logo-img modern"
                    />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="home-products fade-in-up-scroll">
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
                to={
                  product.id === "hrms"
                    ? "/hrms"
                    : product.id === "payroll"
                    ? "/payroll"
                    : product.id === "performance"
                    ? "/performance"
                    : product.id === "recruitment"
                    ? "/recruitment"
                    : product.id === "time"
                    ? "/time-management"
                    : product.id === "benefits"
                    ? "/employee-benefits"
                    : `/products#${product.id}`
                }
                className="home-product-card__link"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="home-features fade-in-up-scroll">
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

      {/* Integration Section */}
      <section className="home-integrations fade-in-up-scroll">
        <h2 className="home-integrations__title">
          Integrate with Your Favorite Tools
        </h2>
        <p className="home-integrations__desc">
          Techpal HR connects seamlessly with leading platforms to streamline
          your workflow.
        </p>
        <div className="home-integrations__logos">
          <img
            src="https://www.zoho.com/mail/images/zoho-mail-logo.svg"
            alt="Zoho Mail"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Indeed_Logo.svg"
            alt="Indeed"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/59/Glassdoor_logo.svg"
            alt="Glassdoor"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
            alt="Slack"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
            alt="LinkedIn"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/trello.svg"
            alt="Trello"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/jira-3.svg"
            alt="Jira"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/zoom-2.svg"
            alt="Zoom"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/adobe.svg"
            alt="Adobe"
          />
        </div>
      </section>

      {/* Customer Success Stories / Case Studies */}
      <section className="home-case-studies">
        <h2 className="home-case-studies__title fade-in-up">
          Customer Success Stories
        </h2>
        <div
          className="home-case-carousel home-case-carousel--manual"
          ref={carouselRef}
        >
          <button
            className="home-case-carousel__arrow left"
            onClick={goLeft}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <div className="home-case-carousel__track home-case-carousel__track--manual">
            {stories
              .slice(carouselCurrent, carouselCurrent + cardsToShow)
              .map((story, idx) => (
                <div
                  className="home-case-card fade-in-up home-case-card--active"
                  key={story.name + idx}
                  style={{
                    minWidth: isMobile ? "90%" : "45%",
                    maxWidth: isMobile ? "90%" : "45%",
                    margin: "0 1.5%",
                    flex: "0 0 auto",
                  }}
                >
                  <img
                    className="home-case-card__image"
                    src={story.avatar}
                    alt="Customer"
                  />
                  <div className="home-case-card__name">
                    {story.linkedin ? (
                      <a
                        href={story.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-case-card__linkedin-name"
                        title="View LinkedIn profile"
                        style={{
                          color: "#0077b5",
                          textDecoration: "none",
                          fontWeight: 600,
                        }}
                      >
                        {story.name}
                      </a>
                    ) : (
                      story.name
                    )}
                  </div>
                  <div className="home-case-card__quote">"{story.quote}"</div>
                  <div className="home-case-card__meta">
                    <img
                      className="home-case-card__logo"
                      src={story.logo}
                      alt="Company Logo"
                    />
                    <div className="home-case-card__company">
                      {story.company}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button
            className="home-case-carousel__arrow right"
            onClick={goRight}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="home-cta-bg" />
        <div
          className="home-cta__content"
          style={{
            background: ctaSlides[ctaIndex].bg,
            borderRadius: "24px",
            transition: "background 0.7s cubic-bezier(.4,1.5,.6,1)",
          }}
        >
          <h2>{ctaSlides[ctaIndex].headline}</h2>
          <p>{ctaSlides[ctaIndex].subtext}</p>
          <Link to="/request-demo" className="home-cta__btn">
            Request a Demo
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="home-faq fade-in-up-scroll">
        <h2 className="home-faq__title">Frequently Asked Questions</h2>
        <div className="home-faq__accordion">
          {[
            {
              q: "What is Techpal HR?",
              a: "Techpal HR is an all-in-one cloud platform for managing HR, payroll, performance, recruitment, and more—designed for modern teams.",
            },
            {
              q: "Can I integrate Techpal HR with other tools?",
              a: "Yes! Techpal HR integrates with popular platforms like Google, Microsoft, Slack, LinkedIn, and more.",
            },
            {
              q: "Is my data secure on Techpal HR?",
              a: "Absolutely. We use enterprise-grade security, encryption, and privacy controls to keep your data safe.",
            },
            {
              q: "How do I get started?",
              a: "Just click 'Request a Demo' and our team will guide you through a personalized setup.",
            },
            {
              q: "Do you offer support?",
              a: "Yes, our support team is available 24/7 to help you with any questions or issues.",
            },
          ].map((faq, idx) => (
            <details key={idx} className="home-faq__item">
              <summary className="home-faq__question">{faq.q}</summary>
              <div className="home-faq__answer">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
