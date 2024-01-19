import ParticlesBackground from "./ParticlesBackground";
import TypingAnimation from "./TypingAnimation";

function Home() {
  return (
    <section
      id="home"
      data-nav-tooltip="Home"
      className="pp-section pp-scrollable"
    >
      <div className="home-banner">
        {/* <div id="particles-box" className="particles" /> */}
        <ParticlesBackground />
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-6">
              <div className="type-box">
                <h6>Nice to meet you! I&apos;m</h6>
                <h1 className="font-alt">Evan Paddock</h1>
                <p className="lead">
                  A Passionate <TypingAnimation />
                </p>
                <p className="desc">
                  I create curated solutions with a specialization in full stack
                  web developement.
                </p>
                <div className="btn-bar">
                  <a
                    className="px-btn px-btn-theme"
                    href="Paddock_Evan_resume.pdf"
                    download="Paddock_Evan_resume.pdf"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hb-img">
                <img
                  src="static/img/mirror-photo-square.JPG"
                  className="rounded-circle"
                  title="Personal Photo of Evan"
                  alt="Personal Photo of Evan"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separated" />
    </section>
  );
}

export default Home;
