import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-heading">

        <p className="section-tag">
          ABOUT GRD
        </p>

        <h2>
          A college built around
          <span> education and excellence.</span>
        </h2>

        <p>
          Dr. G. R. Damodaran College of Science is an
          autonomous institution in Coimbatore with a focus
          on quality education, emerging fields and
          student development.
        </p>

      </div>


      <div className="about-container">

        <div className="about-main">

          <h3>
            Dr. G. R. Damodaran College of Science
          </h3>

          <p>
            Established by the GRD Trust in 1988, the college
            was created to provide career-oriented education
            in emerging fields and to respond to changing
            educational and professional needs.
          </p>

          <p>
            The college is autonomous, affiliated to
            Bharathiar University and recognized by the
            University Grants Commission. It offers
            undergraduate, postgraduate and research
            programmes.
          </p>

          <p>
            The institution's academic areas include
            Management, Computer Science and Information
            Technology, Biotechnology, Visual and Mass
            Communication, Commerce and International
            Business, Tamil Literature and Psychology.
          </p>

        </div>


        <div className="about-cards">

          <div className="about-card">
            <span>01</span>
            <h4>Established</h4>
            <p>
              Founded in 1988 under the GRD Trust.
            </p>
          </div>

          <div className="about-card">
            <span>02</span>
            <h4>Autonomous Institution</h4>
            <p>
              Autonomous and affiliated to
              Bharathiar University.
            </p>
          </div>

          <div className="about-card">
            <span>03</span>
            <h4>Academic Programmes</h4>
            <p>
              Undergraduate, postgraduate and
              research programmes.
            </p>
          </div>

          <div className="about-card">
            <span>04</span>
            <h4>Student Development</h4>
            <p>
              Academic learning supported by
              seminars, workshops, events and
              other student activities.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;