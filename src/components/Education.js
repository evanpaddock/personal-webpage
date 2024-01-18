function Education() {
  return (
    <section
      id="education"
      data-nav-tooltip="Education"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="col-lg-6 m-15px-tb"></div>
        <div className="title">
          <h3>Education &amp; Skills.</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="education-box">
              <li>
                <span>August 2023 - May 2025</span>
                <h6>Master of Science in Management Information Systems</h6>
                <p>The University of Alabama</p>
              </li>
              <li>
                <span>August 2021 - May 2025</span>
                <h6>Bachelor of Science in Management Information Systems</h6>
                <p>The University of Alabama</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                I am currently pursuing both a Bachelor&apos;s and Master&apos;s
                degree in Management Information Systems with a concentration in
                Data Analytics. My academic journey has equipped me with a
                robust understanding of:
              </p>
              <div className="skill-lt">
                <h6>C#</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "98%" }}>
                    <span data-toggle="tooltip" title="98%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Python</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>JavaScript</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "86%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>SQL</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Database Design and Management</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "86%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Client Management</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "93%" }}>
                    <span data-toggle="tooltip" title="93%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Project Management</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "96%" }}>
                    <span data-toggle="tooltip" title="96%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
