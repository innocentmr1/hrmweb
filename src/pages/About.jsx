import { Link } from "react-router-dom";
import "./About.css";

function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "👩‍💼",
      bio: "Passionate about transforming HR technology and empowering businesses.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "👨‍💻",
      bio: "Leading our technical innovation and product development.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "👩‍🎨",
      bio: "Creating user-centric solutions that drive business success.",
    },
    {
      name: "David Kim",
      role: "Head of Sales",
      image: "👨‍💼",
      bio: "Building lasting partnerships with our valued clients.",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "Constantly pushing boundaries to create cutting-edge HR solutions.",
      icon: "🚀",
    },
    {
      title: "Excellence",
      description:
        "Delivering the highest quality products and services to our clients.",
      icon: "⭐",
    },
    {
      title: "Integrity",
      description:
        "Operating with transparency, honesty, and ethical business practices.",
      icon: "🤝",
    },
    {
      title: "Customer Success",
      description:
        "Putting our customers first and ensuring their success is our priority.",
      icon: "🎯",
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to revolutionize HR technology.",
    },
    {
      year: "2019",
      title: "First Product Launch",
      description: "Successfully launched our flagship HRMS platform.",
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Expanded operations to multiple countries across Africa.",
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Secured $10M in funding to accelerate growth.",
    },
    {
      year: "2022",
      title: "1000+ Customers",
      description: "Reached milestone of serving over 1000 businesses.",
    },
    {
      year: "2023",
      title: "Market Leader",
      description: "Recognized as the leading HR tech platform in Africa.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__content">
          <h1 className="about-hero__title">Our Story</h1>
          <p className="about-hero__subtitle">
            Learn how our passion for human productivity drives our mission and
            values.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              To empower businesses across Africa and beyond with innovative HR
              technology that streamlines operations, enhances employee
              experience, and drives organizational success. We believe that
              every business deserves access to world-class HR solutions that
              enable them to focus on what matters most - their people and their
              growth.
            </p>
          </div>
          <div className="mission-visual">
            <div className="mission-animation">
              <div className="mission-circle mission-circle--1"></div>
              <div className="mission-circle mission-circle--2"></div>
              <div className="mission-circle mission-circle--3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2 className="values-title">Our Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="value-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="team-title">Meet Our Leadership Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="team-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="team-card__image">{member.image}</div>
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__role">{member.role}</p>
              <p className="team-card__bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones Section */}
      <section className="milestones-section">
        <h2 className="milestones-title">Our Journey</h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="careers-section">
        <div className="careers-content">
          <h2>Join Our Team</h2>
          <p>
            We're always looking for talented individuals who are passionate
            about technology and making a difference in the HR space. Join us in
            our mission to transform how businesses manage their human
            resources.
          </p>
          <div className="careers-grid">
            <div className="career-card">
              <h3>Software Engineer</h3>
              <p>
                Build innovative HR solutions that impact thousands of
                businesses.
              </p>
              <Link to="/contact" className="career-btn">
                Apply Now
              </Link>
            </div>
            <div className="career-card">
              <h3>Product Manager</h3>
              <p>
                Shape the future of HR technology with user-centric product
                design.
              </p>
              <Link to="/contact" className="career-btn">
                Apply Now
              </Link>
            </div>
            <div className="career-card">
              <h3>Sales Representative</h3>
              <p>Help businesses discover the power of our HR solutions.</p>
              <Link to="/contact" className="career-btn">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section id="press" className="press-section">
        <h2>Press & Media</h2>
        <div className="press-grid">
          <div className="press-item">
            <h3>HRMPro Raises $10M in Series A Funding</h3>
            <p>TechCrunch - March 2023</p>
            <Link to="/contact" className="press-link">
              Read More →
            </Link>
          </div>
          <div className="press-item">
            <h3>Leading HR Tech Platform Expands to 5 New Countries</h3>
            <p>Business Insider - January 2023</p>
            <Link to="/contact" className="press-link">
              Read More →
            </Link>
          </div>
          <div className="press-item">
            <h3>HRMPro Named Best HR Software 2023</h3>
            <p>HR Tech Weekly - December 2022</p>
            <Link to="/contact" className="press-link">
              Read More →
            </Link>
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section id="impact" className="impact-section">
        <div className="impact-content">
          <h2>SeamlessForGood</h2>
          <h3>Driving Productivity & Transforming Communities</h3>
          <p>
            Through our SeamlessForGood initiative, we're committed to making a
            positive impact in the communities we serve. We partner with
            educational institutions, provide technology training, and support
            local businesses in their digital transformation journey.
          </p>
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Students Trained</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Schools Supported</div>
            </div>
            <div className="impact-stat">
              <div className="stat-number">$2M+</div>
              <div className="stat-label">Community Investment</div>
            </div>
          </div>
          <Link to="/contact" className="impact-btn">
            Learn More
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta__content">
          <h2>Ready to Join Our Mission?</h2>
          <p>
            Get in touch to learn more about our company, careers, or
            partnership opportunities.
          </p>
          <div className="about-cta__buttons">
            <Link to="/contact" className="cta-primary">
              Contact Us
            </Link>
            <Link to="/partnership" className="cta-secondary">
              Partnership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
