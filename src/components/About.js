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
                    className="rounded"
                    title="Evan Paddock at the Nick Saban Statue"
                    alt="Evan Paddock at the Nick Saban Statue"
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
                  current technologies.
                </h3>
                <p>
                  I'm a Student at the University of Alabama studying Management
                  Information Systems. I'm from Springville, Alabama. I am
                  pursuing a Bachelor's and Master's with a concentration in
                  Data Analytics. Every day I challenge myself to learn
                  something new.
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
                <div className="btn-bar text-center">
                  <a
                    className="px-btn px-btn-theme d-inline-block mx-2 mb-2 mb-md-0 float-left"
                    href="mailto:edpaddock@crimson.ua.edu"
                  >
                    <span>Contact Me</span>
                  </a>
                  <a
                    className="px-btn px-btn-theme d-inline-block mx-2 mb-2 mb-md-0 float-left"
                    href="Paddock_Evan_resume.pdf"
                  >
                    <span>View Resume</span>
                  </a>
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
