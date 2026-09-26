import "./Navbar.css";
import grdLogo from "../assets/grd-logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        <a href="#home" className="navbar-brand">

          <img
            src={grdLogo}
            alt="GRD College Logo"
            className="brand-logo"
          />

          <div className="brand-text">
            <h2>GRD College</h2>
            <p>Dr. G. R. Damodaran College of Science</p>
          </div>

        </a>

        <nav className="navbar-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#courses">Programmes</a>

          <a href="#admissions">Admissions</a>

          <a href="#assistant" className="ai-link">
            GRD Edge AI
          </a>

          <a href="#contact">Contact</a>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;