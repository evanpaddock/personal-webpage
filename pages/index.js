import About from "../src/components/About";
import Layout from "../src/layout/Layout";
import Education from "../src/components/Education";
import Expertise from "../src/components/Expertise";
import Experience from "../src/components/Experience";
import Home from "../src/components/Home";

const IndexParticles = () => {
  return (
    <Layout>
      {/* Home */}
      <Home />
      {/* End Home */}
      {/* about me */}
      <About />
      {/* End about me */}
      {/* education and skills */}
      <Education />
      {/* End education and skills */}
      {/* Experience */}
      <Experience />
      {/* End experience */}
      {/* Services */}
      <Expertise />
      {/* End Services */}
    </Layout>
  );
};
export default IndexParticles;
