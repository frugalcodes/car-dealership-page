// Import required libraries and styles
import React from "react";
import "../styles/mobiling.css";
import rightArrow from "../images/rightArrow.svg";
import car from "../images/car.svg";
import locationPin from "../images/locationPin.svg";
import touchScreen from "../images/touchScreen.svg";
import clock from "../images/clock.svg";

// Define the functional component
const Mobiling = () => {
  return (
    <div className="container">
      <h1>Mobiling Social</h1>
      <div className="outer-container">
        <div className="inner-container">
          {/* Section for data processing information */}
          <h3>Information on data processing</h3>
          <h6>
            On our website we provide content from Storystream. To view this
            content, you must agree to the data processing by Storystream.
          </h6>
          <div className="d-grid gap-2 d-md-block">
            {/* Agree button */}
            <button className="btn btn-primary bt-1" type="button">
              <span>
                <img className="bt-img" src={rightArrow} alt="btn1" />
              </span>
              Agree
            </button>
            {/* Information button */}
            <button className="btn btn-primary bt-2" type="button">
              <span>
                <img className="bt-img" src={rightArrow} alt="btn2" />
              </span>
              Information on data privacy
            </button>
          </div>
        </div>
      </div>

      <div className="about-container">
        <div className="row">
          {/* About Us section */}
          <div className="col-md-6 custom-column">
            <h2 className="abt">About Us</h2>
            <h4 className="fnd">Find out briefly but informatively</h4>
            <h5 className="expl">
              {/* About Us text */}
              As an upscale and exclusive chauffeur and limousine service near
              Indonesia, we have been ensuring for more than 15 years that you
              get to your destination on time and safely. We sell in around
              Indonesia, as well as beyond to destinations throughout the World.
              From Indonesia to shuttle service, you can look forward to a
              professional team and the comfort of our car service.
            </h5>
          </div>

          {/* Features section */}
          <div className="col-md-6 custom-column-2" style={{ background: "#E3E6E9" }}>
            <div className="short-text">
              {/* Feature points */}
              <p className="text-1 logo-text ml-2">
                <span className="logo-subtext d-flex align-items-center justify-content-center"><img src={car} alt="car" /></span>From business to Luxuryclass
              </p>
              <p className="text-2 logo-text ml-2">
                <span className="logo-subtext d-flex align-items-center justify-content-center"><img src={locationPin} alt="location pin" /></span>125 Location
                in Indonesia
              </p>
              <p className="text-3 logo-text ml-2">
                <span className="logo-subtext d-flex align-items-center justify-content-center"><img src={touchScreen} alt="touch screen" /></span>Convenient Online Book
              </p>
              <p className="text-4 logo-text ml-2">
                <span className="logo-subtext d-flex align-items-center justify-content-center"><img src={clock} alt="clock" /></span>24/7 Exclusive On the road
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the component
export default Mobiling;
