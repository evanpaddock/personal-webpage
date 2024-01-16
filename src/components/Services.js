const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>What I do?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Front-end Web Developement</h5>
                <p>
                  My focus is on building visuals and interactive aspects of
                  websites that are reactive to users. I am familiar with HTML,
                  JavaScript, and some CSS, but typically use frameworks and
                  libraries such as BootStrap and React to streamline
                  development.
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
                  I commonly use systems such as Flask, Node.js, and ASP.NET MVC
                  to handle user requests, execute business logic, and interact
                  with databases. For database management I have the most
                  experience with relational databases using SQL, but am known
                  to use MongoDB for non-relation purposes.
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
                  I have recently began studying and implimenting data science
                  technologies. I have the most experience with Python managing
                  the ETL process as well as building visualization and ML
                  models. I also have a decent understanding of Excel and
                  PowerBi as well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
