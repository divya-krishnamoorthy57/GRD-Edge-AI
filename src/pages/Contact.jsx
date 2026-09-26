import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-heading">

        <p className="section-tag">
          CONTACT GRD
        </p>

        <h2>
          Connect with
          <span> GRD College.</span>
        </h2>

        <p>
          Find the college location, contact details and
          other ways to connect with Dr. G. R. Damodaran
          College of Science.
        </p>

      </div>


      <div className="contact-grid">

        {/* CONTACT INFORMATION */}

        <div className="contact-info">

          {/* LOCATION */}

          <div className="contact-item">

            <div className="contact-icon">
              L
            </div>

            <div>
              <h3>Location</h3>

              <p>
                Dr. G. R. Damodaran College of Science<br />
                Avinashi Road, Civil Aerodrome Post<br />
                Coimbatore – 641 014<br />
                Tamil Nadu, India
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Dr.+G.+R.+Damodaran+College+of+Science+Coimbatore"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                View on Google Maps →
              </a>
            </div>

          </div>


          {/* EMAIL */}

          <div className="contact-item">

            <div className="contact-icon">
              @
            </div>

            <div>
              <h3>Email</h3>

              <a
                href="mailto:grdcs@grd.org"
                className="contact-link"
              >
                grdcs@grd.org
              </a>
            </div>

          </div>


          {/* PHONE */}

          <div className="contact-item">

            <div className="contact-icon">
              P
            </div>

            <div>
              <h3>Phone</h3>

              <a
                href="tel:+919842221162"
                className="contact-link"
              >
                +91 98422 21162
              </a>

              <p className="contact-phone-details">
                0422 – 2572719<br />
                0422 – 2591863 / 2591864
              </p>

            </div>

          </div>

        </div>


        {/* GRD EDGE CARD */}

        <div className="contact-card">

          <p className="contact-card-tag">
            GRD EDGE AI
          </p>

          <h3>
            Need information about GRD?
          </h3>

          <p>
            Ask GRD Edge about programmes, admissions,
            eligibility and other college-related
            information available in its knowledge base.
          </p>

          <a href="#assistant">
            Ask GRD Edge →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;