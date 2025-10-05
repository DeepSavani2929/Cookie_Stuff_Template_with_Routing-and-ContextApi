import React, { useEffect } from "react";
import FeatureChild from "../features/FeatureChild";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCourses } from "../../store/cart/cartSlice";

const FreeRecipes = () => {
  const dispatch = useDispatch()
  const recipes = useSelector((state) => state.cart.recipes);
  const location = useLocation();

  useEffect(() => {
        dispatch(getCourses("Recipes"))
    }, [dispatch])


  // check paths
  const hideHeaderAndButton = location.pathname.startsWith("/coursedetail/"); 

  return (
    <div className="freerecipes">

      
        <div className="section-header">
          <h1>Free Recipes</h1>
        </div>


      <div className="foodcards">
        {recipes.map((ele, i) => {
 
          return (
            <FeatureChild key={i} fatureele={ele}  />
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
