import { Link } from "react-router-dom";
import "./Partnership.css";

function Partnership() {
  const partnerBenefits = [
    {
      title: "Revenue Sharing",
      description:
        "Earn competitive commissions on every successful partnership.",
      icon: "💰",
    },
    {
      title: "Marketing Support",
      description:
        "Access to marketing materials, training, and ongoing support.",
      icon: "📢",
    },
    {
      title: "Technical Training",
      description: "Comprehensive training on our products and implementation.",
      icon: "🎓",
    },
    {
      title: "Dedicated Support",
      description: "Direct access to our partnership team for assistance.",
      icon: "🤝",
    },
  ];

  const referralRewards = [
    {
      tier: "Bronze",
      requirements: "1-5 referrals",
      reward: "$100 per referral",
      benefits: ["Basic support", "Marketing materials", "Training access"],
    },
    {
      tier: "Silver",
      requirements: "6-15 referrals",
      reward: "$150 per referral",
      benefits: [
        "Priority support",
        "Enhanced materials",
        "Dedicated account manager",
      ],
    },
    {
      tier: "Gold",
      requirements: "16+ referrals",
      reward: "$200 per referral",
      benefits: [
        "VIP support",
        "Custom materials",
        "Exclusive events",
        "Higher commission rates",
      ],
    },
  ];

  const communityEvents = [
    {
      title: "HR Tech Summit 2024",
      date: "March 15-17, 2024",
      location: "Lagos, Nigeria",
      description:
        "Join industry leaders for insights on the future of HR technology.",
    },
    {
      title: "Digital Transformation Workshop",
      date: "April 5, 2024",
      location: "Nairobi, Kenya",
      description:
        "Learn how to implement digital HR solutions in your organization.",
    },
    {
      title: "Partner Success Conference",
      date: "May 20-22, 2024",
      location: "Accra, Ghana",
      description:
        "Network with partners and discover new business opportunities.",
    },
  ];

  return (
    <div className="partnership-page">
      {/* Hero Section */}
      <section className="partnership-hero">
        <div className="partnership-hero__content">
          <h1 className="partnership-hero__title">Partnership Opportunities</h1>
          <p className="partnership-hero__subtitle">
            Join our network of partners and help businesses transform their HR
            operations while growing your business.
          </p>
        </div>
      </section>

      {/* Channel Partners Section */}
      <section id="channel" className="channel-section">
        <div className="channel-content">
          <h2>Channel Partners</h2>
          <p>
            Partner with us to deliver cutting-edge HR technology solutions.
            Whether you're a consulting firm, technology provider, or business
            services company, we offer comprehensive partnership programs
            designed for mutual success.
          </p>

          <div className="partner-benefits">
            <h3>Why Partner With Us?</h3>
            <div className="benefits-grid">
              {partnerBenefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="benefit-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="partner-cta">
            <Link to="/contact" className="partner-btn">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* Refer and Earn Section */}
      <section id="refer" className="refer-section">
        <div className="refer-content">
          <h2>Refer and Earn</h2>
          <p>
            Refer businesses to our HR tech solutions and earn rewards. Our
            referral program offers competitive commissions and exclusive
            benefits for successful referrals.
          </p>

          <div className="referral-tiers">
            <h3>Referral Tiers</h3>
            <div className="tiers-grid">
              {referralRewards.map((tier, index) => (
                <div
                  key={tier.tier}
                  className="tier-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="tier-header">
                    <h4>{tier.tier}</h4>
                    <div className="tier-requirements">{tier.requirements}</div>
                  </div>
                  <div className="tier-reward">{tier.reward}</div>
                  <ul className="tier-benefits">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="refer-cta">
            <Link to="/contact" className="refer-btn">
              Start Referring
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="tribe" className="community-section">
        <div className="community-content">
          <h2>SeamlessTribe</h2>
          <p>
            Connect with like-minded professionals in our customer community.
            Share experiences, learn from peers, and stay updated on the latest
            HR trends and best practices.
          </p>

          <div className="community-features">
            <div className="feature-item">
              <div className="feature-icon">💬</div>
              <h4>Discussion Forums</h4>
              <p>
                Engage in meaningful discussions about HR challenges and
                solutions.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📚</div>
              <h4>Resource Library</h4>
              <p>
                Access exclusive content, templates, and best practice guides.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h4>Expert Webinars</h4>
              <p>Attend live sessions with HR experts and industry leaders.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <h4>Networking Events</h4>
              <p>
                Connect with peers at exclusive networking and learning events.
              </p>
            </div>
          </div>

          <div className="upcoming-events">
            <h3>Upcoming Events</h3>
            <div className="events-grid">
              {communityEvents.map((event, index) => (
                <div
                  key={event.title}
                  className="event-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="event-date">{event.date}</div>
                  <h4>{event.title}</h4>
                  <p className="event-location">{event.location}</p>
                  <p className="event-description">{event.description}</p>
                  <Link to="/contact" className="event-btn">
                    Register Now
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="community-cta">
            <Link to="/contact" className="community-btn">
              Join the Tribe
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <h2>Partner Success Stories</h2>
        <div className="stories-grid">
          <div className="story-card">
            <div className="story-quote">
              "Partnering with HRMPro has transformed our business. We've seen a
              300% increase in our HR consulting revenue."
            </div>
            <div className="story-author">
              <div className="author-name">Sarah Williams</div>
              <div className="author-company">TechHR Solutions</div>
            </div>
          </div>
          <div className="story-card">
            <div className="story-quote">
              "The referral program is fantastic. We've earned over $50,000 in
              commissions while helping our clients succeed."
            </div>
            <div className="story-author">
              <div className="author-name">Michael Osei</div>
              <div className="author-company">Business Growth Partners</div>
            </div>
          </div>
          <div className="story-card">
            <div className="story-quote">
              "The SeamlessTribe community has been invaluable for networking
              and staying ahead of HR trends."
            </div>
            <div className="story-author">
              <div className="author-name">Aisha Mohammed</div>
              <div className="author-company">HR Excellence Consulting</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partnership-cta">
        <div className="partnership-cta__content">
          <h2>Ready to Partner With Us?</h2>
          <p>
            Join our network of successful partners and start growing your
            business today.
          </p>
          <div className="partnership-cta__buttons">
            <Link to="/contact" className="cta-primary">
              Become a Partner
            </Link>
            <Link to="/contact" className="cta-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partnership;
