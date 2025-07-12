import { Link } from "react-router-dom";
import "./About.css";

function About() {
  // Demo team
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "People are our greatest asset.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Innovation drives everything we do.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "User experience is at the heart of our platform.",
    },
    {
      name: "David Kim",
      role: "Head of People",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      quote: "We build workplaces where everyone can thrive.",
    },
  ];
  // Demo stats
  const stats = [
    { icon: "👥", value: "10,000+", label: "Employees Managed" },
    { icon: "🏢", value: "200+", label: "Companies Served" },
    { icon: "🌍", value: "15+", label: "Countries" },
    { icon: "⭐", value: "99%", label: "Client Satisfaction" },
  ];
  // Demo testimonials
  const testimonials = [
    {
      text: "TechPal HR transformed our onboarding process and made compliance effortless!",
      name: "Jane Doe",
      role: "HR Director, Acme Corp",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      text: "Our team loves the intuitive interface and powerful analytics.",
      name: "John Smith",
      role: "COO, Beta Inc",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
  ];
  // Demo client logos
  const clientLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  ];
  // Demo values
  const values = [
    {
      icon: "💡",
      title: "Innovation",
      desc: "We build cutting-edge HR solutions.",
    },
    {
      icon: "🤝",
      title: "People First",
      desc: "We put people at the center of everything.",
    },
    {
      icon: "🔒",
      title: "Trust",
      desc: "Your data and privacy are our top priority.",
    },
    {
      icon: "🌱",
      title: "Growth",
      desc: "We help businesses and people grow together.",
    },
  ];

  return (
    <div className="about-modern-page">
      {/* Hero Section */}
      <section className="about-hero-modern">
        <div className="about-hero-modern__bg" />
        <div className="about-hero-modern__content">
          <h1>Empowering People. Transforming Work.</h1>
          <p>
            TechPal HR is the modern HR platform for growing teams. We help you
            manage people, payroll, and performance—all in one place.
          </p>
          <Link to="/contact" className="about-hero-modern__cta">
            Request a Demo
          </Link>
        </div>
      </section>

      {/* Mission Section (Full-Width Banner) */}
      <section className="about-mission-banner">
        <div className="about-mission-banner__bg" />
        <div className="about-mission-banner__content">
          <h2>Our Mission</h2>
          <p>
            We exist to make work more human. Our mission is to empower every
            organization to build a workplace where people thrive.
          </p>
          <span className="about-mission-banner__quote">
            “Empowering People. Transforming Work.”
          </span>
        </div>
      </section>

      {/* Stats/Impact Section */}
      <section className="about-stats-modern">
        {stats.map((s) => (
          <div className="about-stat-modern" key={s.label}>
            <span className="about-stat-modern__icon">{s.icon}</span>
            <div className="about-stat-modern__value">{s.value}</div>
            <div className="about-stat-modern__label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Team Section */}
      <section className="about-team-modern">
        <h2>Meet Our Team</h2>
        <div className="about-team-modern__grid">
          {teamMembers.map((m) => (
            <div className="about-team-modern__card" key={m.name}>
              <img src={m.image} alt={m.name} />
              <h4>{m.name}</h4>
              <div className="about-team-modern__role">{m.role}</div>
              <div className="about-team-modern__quote">“{m.quote}”</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="about-clients-modern">
        <div className="about-clients-modern__title">
          Trusted by leading companies
        </div>
        <div className="about-clients-modern__logos">
          {clientLogos.map((logo, i) => (
            <img src={logo} alt="Client logo" key={i} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="about-testimonials-modern">
        <h2>What Our Clients Say</h2>
        <div className="about-testimonials-modern__grid">
          {testimonials.map((t, i) => (
            <div className="about-testimonials-modern__card" key={i}>
              <div className="about-testimonials-modern__text">“{t.text}”</div>
              <div className="about-testimonials-modern__person">
                <img src={t.image} alt={t.name} />
                <div>
                  <div className="about-testimonials-modern__name">
                    {t.name}
                  </div>
                  <div className="about-testimonials-modern__role">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta-modern">
        <h2>Ready to build a better workplace?</h2>
        <Link to="/contact" className="about-cta-modern__btn">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

export default About;
