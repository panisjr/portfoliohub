import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./LandingPage.css";
function LandingPage() {
  useEffect(() => {
    document.title = "Ramz | Portfolio";
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
  }, []);
  const [scrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return (
    <>
      <div className="container-fluid vw-100">
        <nav
          id="navScroll"
          className={`navbar navbar-expand-lg navbar-light fixed-top bg-white transition ${
            scrolling ? "scrolled" : ""
          }`}
          tabIndex="0"
        >
          <div className="container align-items-center justify-content-around">
            <div>
              <a className="navbar-brand pe-4 fs-4" href="/">
                <span className="ms-1 fw-bolder">Ramz</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tools">
                      Tools
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="row vh-100">
          <div className="col-12 mt-5 profile bg-primary">
              <div className="h-100 d-flex flex-column align-items-start p-5 justify-content-center text-white">
                <h1 className="ms-5">Hi, I am Ramel</h1>
                <p className="ms-5">Full Stack Web Developer</p>
              <div className="ms-5 mt-5">
                <button className="btn btn-outline-warning ms-5 me-4 p-3 ps-4 pe-4">Show Profile</button>
                <button className="btn btn-light p-3 ps-4 pe-4">Know More</button>
              </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;