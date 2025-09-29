import React from "react";
import slide2 from "../../assets/images/bg-2.jpg";
import live from "../../assets/images/live.png";

const FoodSecond = () => {
  return (
    <>
      <div
        className="backgroundimg"
        style={{ backgroundImage: `url(${slide2})` }}
      >
        <div className="juiceverity">
          <div className="livelogo">
            <img src={live} alt="" />
          </div>

          <div>
            <p className="juiceworkshop">
              <span className="differentverity">Variety of Juice</span> <br />{" "}
              <p>Workshop</p>
            </p>
          </div>

          <div className="foodtiming">
            <p>6th - 10th June 12:00PM</p>
          </div>

          <div className="juiceprice">
            <div className="juiceoriginalpricebox">
              <p className="juiceRupee"> ₹ </p>
              <p className="juiceoriginalprice">5000</p>
            </div>

            <div className="juicecurrentpricebox">
              <p className="rupe">₹</p>
              <p className="currentprice">500</p>
              <p className="access">(Lifetime access)</p>
            </div>
          </div>

          <div className="recipetypes">
            <div className="abovetenRecipesone">
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

export default FoodSecond;
