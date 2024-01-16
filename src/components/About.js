const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img
                    src="static/img/statue-photo.jpg"
                    title=""
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  A Student Leader with a passion for learning and applying
                  current technologies.{" "}
                </h3>
                <p>
                  I&apos;m a Student at the University of Alabama studying
                  Management Information Systems. I&apos;m from Springville,
                  Alabama. I am pursuing a Bachelor&apos;s and Master&apos;s
                  with a concentation in Data Analytics. Everyday I challenge
                  myself to learn something new.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">4.0</span>
                      <div className="media-body">
                        GPA <br />
                        Undergrad
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">4.0</span>
                      <div className="media-body">
                        GPA <br />
                        Graduate
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a
                    className="px-btn px-btn-theme"
                    href="mailto:edpaddock@crimson.ua.edu"
                  >
                    <span>Contact Me</span>
                  </a>
                  <a
                    className="px-btn px-btn-theme"
                    href="./Paddock_Evan_resume.pdf"
                  >
                    <span>View My Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
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
                I&apos;m am pursuing a Bachelor&apos;s and Master&apos;s in
                Management Information Systems with a concentation in Data
                Analytics. Through my expereiences I have a strong understanding
                of:
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
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img
                    src="static/img/ua-square-logo.png"
                    title="University of Alabama Logo"
                    alt="University of Alabama Logo"
                  />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Teaching Assistant</h6>
                  <label>
                    UA MIS Department | In-Person | Jan 2023 - Present
                  </label>
                  <div className="rb-time">Part Time</div>
                  <p>
                    • Facilitate instruction in C# programming, providing
                    technical evaluations and support to over 100 students each
                    semester.
                    <br />
                    • Evaluate assignments, offering comprehensive feedback and
                    addressing student inquiries related to course content.
                    <br />• Aid the professor in navigating and resolving
                    unforeseen instructional challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img
                    src="static/img/ua-square-logo.png"
                    title="University of Alabama Logo"
                    alt="University of Alabama Logo"
                  />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Resident Advisor</h6>
                  <label>
                    The University of Alabama | In-Person | Aug 2023 - Present
                  </label>
                  <div className="rb-time">Part Time</div>
                  <p>
                    • Spearhead community-building events, showcasing strong
                    organizational and interpersonal skills.
                    <br /> • Demonstrate adept conflict resolution abilities,
                    ensuring a harmonious living environment.
                    <br /> • Facilitate educational programs, highlighting
                    skills in program coordination and resource provision for
                    resident development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img
                    src="static/img/mis-ambassadors-logo.jpg"
                    title="MIS Ambassadors Logo"
                    alt="MIS Ambassadors Logo"
                  />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Data Operations Lead</h6>
                  <label>
                    UA MIS Ambassadors | In-Person | Aug 2023 - Present
                  </label>
                  <div className="rb-time">Volunteer</div>
                  <p>
                    • Lead data initiatives for program events, ensuring
                    accurate collection, cleaning, and reporting.
                    <br /> • Oversee a data operations team, providing guidance
                    and training for tasks. <br />• Manage operations in a
                    compact setting, ensuring streamlined processes from
                    collection to reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img
                    src="static/img/bcbsal-logo.png"
                    title="Blue Cross and Blue Shield of Alabama Logo"
                    alt="Blue Cross and Blue Shield of Alabama Logo"
                  />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Systems Analyst/Programmer Intern</h6>
                  <label>
                    Blue Cross and Blue Shield of Alabama | In-Person | May 2023
                    - Aug 2023
                  </label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    • Conducted in-depth analysis, identified system
                    inefficiencies, and proposed strategic improvements for
                    enhanced functionality.
                    <br /> • Collaborated cross-functionally, translating user
                    needs into tech solutions aligned with business goals.
                    <br /> • Contributed to an agile team, fostering
                    adaptability and efficient collaboration for streamlined
                    project development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
