import React from "react";
import "../styles/AfterNav.css"; // Importing styles
import Search from "./Search"; // Importing Search component
import vectorCircle from "../images/vectorCircle.svg"; // Importing SVG image
import carimage from "../images/carimage.svg"; // Importing car image

const MainSection = () => (
  <div style={{ background: "#F2F4F7", margin: "0" }}> {/* Background styling */}
    <div className="container"> {/* Container for content */}
      <div className="row align-items-center"> {/* Row with aligned content */}
        <div className="col-md-5"> {/* Column for left side content */}
          <h1 className="text-md-start h1-text">Best Car For Your Performance</h1> {/* Car title */}
          <div>
            <p className="text-md-start p-text">
            We will serve you to get dream car here easily and quickly that is reliable.
            </p> {/* Description */}
          </div>
          <div className="search-sp">
          <Search />
          </div> {/* Rendering the Search component */}
          <div className="bmw">
            <h1 className="bmw-text">BMW Series 3 BLUE</h1> {/* Car model title */}
            <div className="container-2"> {/* Container for car details */}
              <div className="column-2">
                <div className="logo-text ml-2">
                  Base Price <span className="logo-subtext d-block">$ 40,750</span>
                </div> {/* Base price of the car */}
              </div>
              <div className="column">
                <div className="logo-text ml-2">
                  Power <span className="logo-subtext d-block">365 HP</span>
                </div> {/* Car power specification */}
              </div>
              <div className="column">
                <div className="logo-text ml-2">
                  Engine <span className="logo-subtext d-block">362 V6</span>
                </div> {/* Car engine specification */}
              </div>
            </div>
            <div className="container-line">
              <div className="line"></div> {/* Horizontal line separator */}
              <img className="svg-img" src={vectorCircle} alt="SVG Image" /> {/* SVG image */}
            </div>
          </div>
        </div>
        <div className="col-md-7 text-md-end order-first order-md-last">
          <img
            src={carimage}
            alt="Car-image"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          /> {/* Rendering car image */}
        </div>
      </div>
    </div>
  </div>
);

export default MainSection;
