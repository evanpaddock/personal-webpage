import dynamic from "next/dynamic";
import About from "../src/components/About";
import ParticlesBackground from "../src/components/ParticlesBackground";
import Services from "../src/components/Services";
import Layout from "../src/layout/Layout";
import TypingAnimation from "../src/components/TypingAnimation";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const IndexParticles = () => {
  return (
    <Layout>
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
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Evan Paddock</h1>
                  <p className="lead">
                    I&apos;m A Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                    I create curated solutions with a specialization in full
                    stack web developement.
                  </p>
                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      href="./Paddock_Evan_resume.pdf"
                      download="PaddockEvanResume"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img
                    src="static/img/mirror-photo.JPG"
                    title="Personal Photo of Evan"
                    alt="Personal Photo of Evan"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about me */}
      <About />
      {/* End about me */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      {/* <Portfolio /> */}
      {/* End Portfolio */}
    </Layout>
  );
};
export default IndexParticles;
