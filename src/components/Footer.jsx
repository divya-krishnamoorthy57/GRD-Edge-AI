import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>
            <span>GRD</span> Edge
          </h2>

          <p>
            AI-Powered College Assistance Agent for students
            exploring Dr. G.R. Damodaran College of Science.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#admissions">Admissions</a>
        </div>

        <div className="footer-links">
          <h3>Assistant</h3>

          <a href="#assistant">Ask GRD Edge</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 GRD Edge. AI-Powered College Assistance Agent.
        </p>

        <p>
          Built for student assistance.
        </p>
      </div>
    </footer>
  );
}

export default Footer;