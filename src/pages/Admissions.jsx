import "./Admissions.css";

function Admissions() {
  return (
    <section id="admissions" className="admissions">

      <div className="admissions-heading">

        <p className="section-tag">
          ADMISSIONS
        </p>

        <h2>
          Begin your journey
          <span> at GRD.</span>
        </h2>

        <p>
          Explore the admission process and choose a
          programme that matches your academic interests
          and career goals.
        </p>

      </div>


      <div className="admission-grid">

        <div className="admission-card">

          <div className="admission-number">
            01
          </div>

          <h3>
            Undergraduate Admissions
          </h3>

          <p>
            Admissions to undergraduate programmes generally
            commence after the Tamil Nadu Higher Secondary
            (+2) results.
          </p>

          <span>
            UG Programmes
          </span>

        </div>


        <div className="admission-card">

          <div className="admission-number">
            02
          </div>

          <h3>
            Postgraduate Admissions
          </h3>

          <p>
            Postgraduate admissions generally begin after
            undergraduate degree results. Admission
            requirements can vary depending on the programme.
          </p>

          <span>
            PG Programmes
          </span>

        </div>


        <div className="admission-card">

          <div className="admission-number">
            03
          </div>

          <h3>
            MBA & MCA
          </h3>

          <p>
            The official admission information states that
            MBA and MCA admissions involve a selection process
            including entrance tests followed by group
            discussion and/or interviews.
          </p>

          <span>
            Selection Process
          </span>

        </div>

      </div>


      <div className="admissions-note">

        <h3>
          Need admission information?
        </h3>

        <p>
          Ask GRD Edge about programmes, eligibility and
          admission-related information available in the
          college knowledge base.
        </p>

        <a href="#assistant">
          Ask GRD Edge →
        </a>

      </div>

    </section>
  );
}

export default Admissions;