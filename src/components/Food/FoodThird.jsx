import React from "react";
import slide3 from "../../assets/images/bg-3.jpg";


const FoodThird = () => {
  return (
    <>
      <div
        className="backgroundimg"
        style={{ backgroundImage: `url(${slide3})` }}
      >
        <div className="strawberry">
          <div>
            <p className="strawberryworkshop">
              <span className="differentstrawberry">Gaint Strawberry</span>{" "}
              <br /> <p>Workshop</p>
            </p>
          </div>

          <div className="soon">
            <p>Coming Soon</p>
          </div>

          <div className="strawberytypes">
            <div className="newRecipenumbers">
              <p>10+</p>
              <p>Recipes</p>
            </div>

            <div className="accessone">
              <div className="accessonedes">Lifetime access</div>
              <div className="videoaccess">Videos</div>
              <div className="pdfaccess">PDF</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodThird;
