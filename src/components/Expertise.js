const Expertise = () => {
  return (
    <section
      id="expertise"
      data-nav-tooltip="Expertise"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Expertise.</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Front-end Web Developement</h5>
                <p>
                  I specialize in front-end web development, emphasizing the
                  creation of visually appealing and interactive website
                  elements that respond dynamically to user actions. Proficient
                  in HTML, JavaScript, and CSS, I often leverage frameworks like
                  Bootstrap and React to enhance the efficiency of the
                  development process.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Back-end Web Developement</h5>
                <p>
                  I routinely leverage systems such as Flask, Node.js, and
                  ASP.NET MVC to adeptly handle user requests, execute intricate
                  business logic, and seamlessly interact with databases. My
                  specialization revolves around relational databases,
                  particularly emphasizing SQL for robust data management.
                  However, I also adeptly incorporate MongoDB for non-relational
                  needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <h5>Data Science</h5>
                <p>
                  I&apos;ve recently immersed myself in the field of data science,
                  acquiring hands-on expertise in Python for tasks like ETL
                  processes, crafting visualizations, and constructing machine
                  learning models. In addition to my proficiency in Python, I
                  possess a strong grasp of Excel and Power BI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Expertise;
