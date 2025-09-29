import { useSelector } from "react-redux";
import FeatureChild from "./FeatureChild.jsx";
import React from "react";
import FreeRecipes from "../Recipes/FreeRecipes.jsx";
import { useLocation } from "react-router";
import HealthyRecipes from "../Healthy/HealthyRecipes.jsx";

const Features = () => {
    const location = useLocation();  
   const features = useSelector((state) => state.cart.features)

  const productQuantities = useSelector((state) => state.cart.productQuantities);

 const getQuantity = (id) => productQuantities[id] || 1;

  return (
    <>
          <div className="featured" >
      <div className="innerfeatures" >
        <div className="features">
          
          <div className="featureheaderInner" >
            <h1>Featured</h1>
            <p style = {{ display : location.pathname === "/courses" ? "none" : "block"}}>
              We Specialise in organising Professional
              <div className="training">Training Courses</div>
            </p>
          </div>
          <div className="foodcards">
            {features?.map((ele, i) => {
              const quantity = getQuantity(ele.id); 
              return (
                <FeatureChild key={i} fatureele={ele} quantity={quantity} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
      <FreeRecipes />
      <HealthyRecipes />
    </>

  );
};

export default Features;
