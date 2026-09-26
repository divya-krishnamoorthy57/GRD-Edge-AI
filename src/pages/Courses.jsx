import "./Courses.css";

function Courses() {
  const courses = [
    {
      category: "Computer & IT",
      courses: [
        "B.Sc. Computer Science",
        "BCA",
        "B.Sc. Computer Technology",
        "B.Sc. Information Technology",
        "MCA",
        "M.Sc. Information Technology",
      ],
    },
    {
      category: "Commerce",
      courses: [
        "B.Com",
        "B.Com. Information Technology",
        "B.Com. Professional Accounting",
        "B.Com. Accounting & Finance",
        "B.Com. Corporate Secretaryship",
        "B.Com. E-Commerce",
      ],
    },
    {
      category: "Management",
      courses: [
        "BBA",
        "BBA Retail Management",
        "MBA",
        "M.I.B",
      ],
    },
    {
      category: "Science & Humanities",
      courses: [
        "B.Sc. Biotechnology",
        "B.Sc. Psychology",
        "B.Sc. Visual Communication",
        "M.Sc. Biotechnology",
        "M.A. English Literature",
      ],
    },
  ];

  return (
    <section id="courses" className="courses">
      <div className="courses-heading">
        <p className="section-tag">ACADEMIC PROGRAMMES</p>

        <h2>
          Explore our
          <span> programmes</span>
        </h2>

        <p>
          Discover undergraduate and postgraduate programmes across
          technology, commerce, management, science, and humanities.
        </p>
      </div>

      <div className="courses-grid">
        {courses.map((group, index) => (
          <div className="course-card" key={index}>
            <div className="course-number">
              0{index + 1}
            </div>

            <h3>{group.category}</h3>

            <div className="course-list">
              {group.courses.map((course, courseIndex) => (
                <div className="course-item" key={courseIndex}>
                  <span>✓</span>
                  {course}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;