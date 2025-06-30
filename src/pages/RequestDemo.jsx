import "./RequestDemo.css";

function RequestDemo() {
  return (
    <div className="request-demo-page seamless-request-demo">
      {/* Hero Section */}
      <section className="request-demo-hero glassy-bg">
        <div className="request-demo-hero__content">
          <h1 className="fade-in-up">Request a Personalized Demo</h1>
          <p className="fade-in-up">
            See Techpal HR in action! Fill out the form and our team will reach
            out to schedule your personalized walkthrough.
          </p>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="request-demo-form-section">
        <form className="request-demo-form glassy-card fade-in-up">
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Company Name" required />
            <input type="tel" placeholder="Phone Number" />
          </div>
          <div className="form-row">
            <select required>
              <option value="">Area of Interest</option>
              <option value="hrms">HRMS</option>
              <option value="payroll">Payroll</option>
              <option value="performance">Performance</option>
              <option value="recruitment">Recruitment</option>
              <option value="time">Time Management</option>
              <option value="benefits">Employee Benefits</option>
            </select>
          </div>
          <textarea
            placeholder="How can we help you?"
            required
            rows={5}
          ></textarea>
          <button type="submit" className="cta-primary">
            Request Demo
          </button>
        </form>
      </section>

      {/* Benefits Section */}
      <section className="request-demo-benefits">
        <h2 className="fade-in-up">Why Book a Demo?</h2>
        <div className="benefits-grid">
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">🎯</span>
            <div className="benefit-title">Personalized Walkthrough</div>
            <div className="benefit-desc">
              See features tailored to your business needs.
            </div>
          </div>
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">🤝</span>
            <div className="benefit-title">Expert Guidance</div>
            <div className="benefit-desc">
              Get answers from our HR technology experts.
            </div>
          </div>
          <div className="benefit-card fade-in-up">
            <span className="benefit-icon">🚀</span>
            <div className="benefit-title">No Commitment</div>
            <div className="benefit-desc">
              Explore Techpal HR with no obligation to buy.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="request-demo-cta glassy-bg">
        <h2 className="fade-in-up">Ready to Get Started?</h2>
        <a href="/contact" className="cta-primary fade-in-up">
          Contact Sales
        </a>
      </section>
    </div>
  );
}

export default RequestDemo;
