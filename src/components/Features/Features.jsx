import { useDispatch, useSelector } from "react-redux";
import FeatureChild from "./FeatureChild.jsx";
import React, { useEffect } from "react";
import FreeRecipes from "../recipes/FreeRecipes.jsx";
import { useLocation } from "react-router";
import HealthyRecipes from "../healthy/HealthyRecipes.jsx";
import { getCourses } from "../../store/cart/cartSlice.jsx";

const Features = () => {

  const dispatch = useDispatch()
    const location = useLocation();  
   const features = useSelector((state) => state.cart.features)

   useEffect(() => {
      dispatch(getCourses("Features"))
   }, [dispatch])

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
              return (
                <FeatureChild key={i} fatureele={ele}  />
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
