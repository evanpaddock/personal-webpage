import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";
const Header = () => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  useEffect(() => {
    activeSection();
  }, []);
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/">
              <a className="logo-text">Evan Paddock</a>
            </Link>
          </div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* End Header */}
      {/* nav bar */}
      <header
        className={`header-left ${
          sideBarToggle ? "menu-open menu-open-desk" : ""
        }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <img
                  src="static/img/prof-headshot.png"
                  title="Evan Paddock Professional Headshot"
                  alt="Evan Paddock Professional Headshot"
                />
              </div>
              <h5>Evan Paddock</h5>
            </div>
          </div>
          <Menu />
        </div>
        <div className="nav justify-content-center social-icons">
          <a href="https://www.linkedin.com/in/evan-paddock/">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://github.com/evanpaddock">
            <i className="fab fa-github" />
          </a>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;

const Menu = () => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="home" className="active">
        <a className="nav-link" href="#home">
          <i className="ti-home" />
          <span>Home</span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#about">
          <i className="ti-id-badge" />
          <span>About Me</span>
        </a>
      </li>
      <li data-menuanchor="education">
        <a className="nav-link" href="#education">
          <i className="ti-panel" />
          <span>Education</span>
        </a>
      </li>
      <li data-menuanchor="experience">
        <a className="nav-link" href="#experience">
          <i className="ti-bookmark-alt" />
          <span>Experience</span>
        </a>
      </li>
      <li data-menuanchor="expertise">
        <a className="nav-link" href="#expertise">
          <i className="ti-layout-media-overlay-alt-2" />
          <span>Expertise</span>
        </a>
      </li>
    </ul>
  );
};
