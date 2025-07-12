import "./Insights.css";

function Insights() {
  return (
    <div className="insights-page">
      <section className="insights-hero">
        <div className="insights-hero__content">
          <h1 className="insights-hero__title">Insights & Analytics</h1>
          <p className="insights-hero__subtitle">
            Discover data-driven insights to optimize your HR operations and
            drive business growth.
          </p>
        </div>
      </section>

      <section className="insights-content">
        <div className="insights-grid">
          <div className="insight-card">
            <h3>Employee Performance Analytics</h3>
            <p>
              Track key metrics and identify top performers with comprehensive
              analytics.
            </p>
          </div>
          <div className="insight-card">
            <h3>Recruitment Insights</h3>
            <p>
              Optimize your hiring process with data-driven recruitment
              analytics.
            </p>
          </div>
          <div className="insight-card">
            <h3>Retention Analysis</h3>
            <p>
              Understand employee satisfaction and reduce turnover with
              predictive analytics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Insights;
