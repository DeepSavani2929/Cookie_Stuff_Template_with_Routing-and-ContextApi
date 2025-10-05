import React from "react";
import slide1 from "../../assets/images/food.jpg";
import live from "../../assets/images/live.png";

const FoodFirst = () => {
  return (
    <div
      className="backgroundimg"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${slide1})`,
      }}
    >
      <div className="food">
        <div className="favourite">
          <div className="live">
            <img src={live} alt="" />
          </div>
          <div>
            <h2 className="foodpera">
              Find Your
              <span className="favoritefood">Favorite Food & Make Better</span>
              Your Cooking
            </h2>
          </div>
          <div>
            <h5 className="may"> 10th - 20th May </h5>
          </div>
          <div className="lifetime">
            <p>Lifetime access</p>
            <div>
              <div className="videos">Videos</div>
              <div className="pdf">PDF</div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle">
        <p className="cir"></p> <p className="cir"></p>
        <p className="cir"></p>
      </div>
    </div>
  );
};

export default FoodFirst;
