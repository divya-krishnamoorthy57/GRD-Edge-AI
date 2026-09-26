import "./Home.css";
import grdCampus from "../assets/grd-campus-event.png";

function Home() {
  return (
    <section id="home" className="home">

      <div className="home-image">
        <img
          src={grdCampus}
          alt="Students at Dr. G. R. Damodaran College of Science"
        />
      </div>

      <div className="home-overlay"></div>

      <div className="home-content">

        <p className="home-tag">
          DR. G. R. DAMODARAN COLLEGE OF SCIENCE
        </p>

        <h1>
          Education that shapes
          <span>your future.</span>
        </h1>

        <p className="home-description">
          Explore undergraduate, postgraduate and research
          programmes at Dr. G. R. Damodaran College of Science,
          Coimbatore.
        </p>

        <div className="home-buttons">

          <a href="#courses" className="home-primary">
            Explore Programmes
          </a>

          <a href="#assistant" className="home-secondary">
            Ask GRD Edge AI
          </a>

        </div>

        <div className="home-highlights">

          <div>
            <strong>1988</strong>
            <span>Established</span>
          </div>

          <div>
            <strong>A+</strong>
            <span>NAAC Grade</span>
          </div>

          <div>
            <strong>UG • PG</strong>
            <span>Research</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;