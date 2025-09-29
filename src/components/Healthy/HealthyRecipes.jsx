import React, { useEffect } from "react";
import FeatureChild from "../Features/FeatureChild";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../store/cart/cartSlice";

const HealthyRecipes = () => {
  const dispatch = useDispatch();
  const healthy = useSelector((state) => state.cart.healthy);


     useEffect(() => {
        dispatch(getCourses("Healthy"))
     }, [dispatch])

  return (
    <div className="healthy-recipes">
      <div className="recipessection">
        <div className="sectionHeader">
          <h1>Healthy & Tasty Recipes</h1>
        </div>

        <div className="recipes">
          <div className="foodcards">
            {healthy.map((ele, i) => {
     
              return (
                <>
                  <FeatureChild key={i} fatureele={ele} />
                </>
              );
            })}
          </div>
        </div>

<div className="flex justify-center">
         <button
          className="viewallbtn"
          style={{
            display: location.pathname === "/courses" ? "none" : "block",
          }}
        >
          View All <span className="rightarrow">→</span>
        </button>
</div>

      </div>
    </div>
  );
};

export default HealthyRecipes;
