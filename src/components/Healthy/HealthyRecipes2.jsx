import React from "react";
import FeatureChild from "../Features/FeatureChild";
import { useSelector } from "react-redux";

const HealthyRecipes = () => {
  const healthy = useSelector((state) => state.cart.healthy);

  const productQuantities = useSelector(
    (state) => state.cart.productQuantities
  );

  const getQuantity = (id) => productQuantities[id] || 1;

  return (
    <div className="healthy-recipes">
      <div className="recipessection">
        <div className="sectionHeader">
          <h1>Healthy & Tasty Recipes</h1>
        </div>

        <div className="recipes">
          <div className="foodcards">
            {healthy.map((ele, i) => {
              const quantity = getQuantity(ele.id);
              return (
                <>
                  <FeatureChild key={i} fatureele={ele} quantity={quantity} />
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
