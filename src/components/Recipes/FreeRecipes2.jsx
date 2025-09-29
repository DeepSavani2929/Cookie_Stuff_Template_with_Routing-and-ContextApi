import React from "react";
import FeatureChild from "../Features/FeatureChild";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const FreeRecipes = () => {
  const recipes = useSelector((state) => state.cart.recipes);
  const productQuantities = useSelector((state) => state.cart.productQuantities);
  const location = useLocation();

  const getQuantity = (id) => productQuantities[id] || 1;

  // check paths
  const hideHeaderAndButton = location.pathname.startsWith("/coursedetail/"); 

  return (
    <div className="freerecipes">

      
        <div className="section-header">
          <h1>Free Recipes</h1>
        </div>


      <div className="foodcards">
        {recipes.map((ele, i) => {
          const quantity = getQuantity(ele.id);
          return (
            <FeatureChild key={i} fatureele={ele} quantity={quantity} />
          );
        })}
      </div>

      {hideHeaderAndButton && location.pathname !== "/courses" && (
        <div className="flex justify-center">
          <button className="viewallbtn">
            View All <span className="rightarrow">→</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FreeRecipes;
