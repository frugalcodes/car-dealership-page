import React from "react";
import "../styles/FooterSection.css";
import logo2 from "../images/logo2.svg";
import fb from "../images/fb.svg";
import twitter from "../images/twitter.svg";
import ink from "../images/ink.svg";
import ig from "../images/ig.svg";
import world from "../images/world.svg";
import rightArrow2 from "../images/rightArrow2.svg";

const FooterSection = () => {
  return (
    <div style={{ background: "#021E35" }}>
      <div className="container">
        <div className="row">
          {/* Column - Logo and Social Icons */}
          <div className="col-sm-3">
            <div className="card border-0" style={{ backgroundColor: "transparent", color: "#FCFCFD" }}>
              <a className="navbar-brand" href="#">
                <div style={{ display: "flex", alignItems: "center", marginBottom: "26px", marginTop: "77.66px" }}>
                  <img src={logo2} alt="Logo" className="logo" style={{ width: "29.56px", height: "33.46px" }} />
                  <div className="logo-text ml-2" style={{ marginLeft: "12px", fontSize: "20px", lineHeight: "25px", color: "#FCFCFD", fontWeight: 500 }}>
                    Mobiling
                    <span className="logo-subtext d-block" style={{ fontSize: "12px", lineHeight: "15px", color: "#FCFCFD", fontWeight: 300 }}>
                      Automobile
                    </span>
                  </div>
                </div>
              </a>
              <p className="ptxt">As an upscale and exclusive chauffeur and limousine service near Indonesia, we have been ensuring for more than 15 years that you get to your destination on time and safely.</p>
              <div className="row">
                {[twitter, fb, ink, ig].map((icon, index) => (
                  <div key={index} className="col-md-3 col-3">
                    <img src={icon} alt={`Logo ${index + 1}`} className="logos" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columns - Links */}
          {[{
              title: "Buy Vehicle",
              links: ["Find new car", "Current vehicle offers", "Price lists & brochures"]
            }, {
              title: "Purchase advice",
              links: ["Book a test drive", "Find a dealer near you", "Find used vehicles"]
            }, {
              title: "Customer Service",
              links: [
                "Current service offers",
                "Online service campaign VIN-checker",
                "5 Year staff service",
                "24h roadside assistance",
                "News and events",
                "Press release"
              ]
            }]
            .map((column, index) => (
              <div key={index} className="col-sm-3">
                <div className="card border-0" style={{ backgroundColor: "transparent", color: "#FCFCFD" }}>
                  <p className="buyV">{column.title}</p>
                  {column.links.map((link, idx) => (
                    <p key={idx} className="buyC">{link}</p>
                  ))}
                </div>
              </div>
            ))}

          {/* Bottom Divider */}
          <hr style={{ borderTop: "1px solid #FCFCFD", width: "100%", marginBottom: "40px" }} />

          {/* Footer Links */}
          <div className="row no-gutters" style={{ color: "#FCFCFD" }}>
            {[{
                text: "Copyright 2023 Mobiling Co."
              }, {
                text: "Terms of Service"
              }, {
                text: "Privacy Policy"
              }, {
                text: "Cookies"
              }]
              .map((footerLink, index) => (
                <div key={index} className={`col-lg-${index === 0 ? 3 : 2} col-md-6 col-sm-${index === 0 ? 12 : 6}`}>
                  <div className="card-2">
                    <div>{footerLink.text}</div>
                  </div>
                </div>
              ))}
            <div className="col-lg-3">
              <div className="card-2 m-0">
                <div>
                  <span><img src={world} alt="world" /></span>
                  <span className="engtxt">English </span>
                  <img src={rightArrow2} alt="rightArrow2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
