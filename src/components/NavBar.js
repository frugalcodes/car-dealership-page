import React from "react";
import logoSVG from "../images/logoSVG.svg";
import arrowDown3 from "../images/arrowDown3.svg";
import "../styles/NavBar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

// NavBar component
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ height: "119px", background: "#F2F4F7" }}>
      <div className="container">
        {/* Logo section */}
        <a className="navbar-brand" href="#">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logoSVG} alt="Logo" className="logo" style={{ width: "29.56px", height: "33.46px" }} />
            <div className="logo-text ml-2" style={{ marginLeft: "12px", fontSize: "20px", lineHeight: "25px", color: "#1A89EC", fontWeight: 500 }}>
              Mobiling
              <span className="logo-subtext d-block" style={{ fontSize: "12px", lineHeight: "15px", color: "#98A2B3", fontWeight: 300 }}>
                Automobile
              </span>
            </div>
          </div>
        </a>

        {/* Navbar toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link mr-3" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3" href="#">
                Services{" "}
                <img src={arrowDown3} alt="Arrow" style={{ width: "16px", height: "16px", marginLeft: "8px", fill: "#667085" }} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3" href="#">
                Products{" "}
                <img src={arrowDown3} alt="Arrow" style={{ width: "16px", height: "16px", marginLeft: "8px", fill: "#667085", ":hover": { fill: "#000000" } }} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-3" href="#">
                Testimonials
              </a>
            </li>
          </ul>

          {/* Sign In button */}
          <div className="ml-auto">
            <button
              className="btn btn-outline-primary centered-button"
              style={{
                width: "140px",
                height: "47px",
                textAlign: "center",
                padding: "12px 40px",
                borderRadius: "10px",
                border: "1px solid",
                gap: "8px",
                color: "#E4E7EC",
                background: "linear-gradient(0deg, #1A89EC, #1A89EC), linear-gradient(0deg, #E4E7EC, #E4E7EC)",
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
