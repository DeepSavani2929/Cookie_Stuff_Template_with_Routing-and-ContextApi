import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, setProductQuantity } from "../../store/cart/cartSlice";
import { useNavigate } from "react-router";

const FeatureChild = ({ fatureele, quantity }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleOnCart = (id) => {
     navigate(`/individualCourseDeatils/${id}`)
  }

  return (
    <div className="singlefeature" >
      <div className="image" onClick = {() => handleOnCart(fatureele.id)}>
        <img id="img" src={fatureele.image} alt={fatureele.title} />
      </div>
      <div className="featurecontent">
        <h3>
          {fatureele.title} <div>(Lifetime Access)</div>
        </h3>
        <p className="ratingpart">
          <span id="rating">4.2</span>
          <span className="star">
            <span className="filledstar">&#9733;&#9733;&#9733;&#9733;</span>
            &#9734;<span className="year">(2,002)</span>
          </span>
        </p>
        <p className="price">
          <span className="amount"> &#8377; {fatureele.amount}</span>
          <span className="originalamount">₹ {fatureele.originalAmount}</span>
        </p>
        {fatureele.buttonText && (
          <>
            <button id="featurebtn">{fatureele.buttonText}</button>
          </>
        )}

        {fatureele.buttonText ? (
          <>
            <div className="addintocart addintocart1">
              <div className="quantitycal">
                <button
                  className="decre"
                  onClick={(e) => {
                  e.stopPropagation();             
                  
                    dispatch(
                      setProductQuantity({
                        id: fatureele.id,
                        quantity: Math.max(1, quantity - 1),
                      })
                    )
                  }
                  }
                >
                  -
                </button>{" "}
                <p className="quantitypera">{quantity}</p>
                <button
                  className="incre"
                  onClick={(e) =>{
                    e.stopPropagation();
                      dispatch(
                      setProductQuantity({
                        id: fatureele.id,
                        quantity: quantity + 1,
                      })
                    )
                  }
                  
                  }
                >
                  +
                </button>
              </div>
              <button
                className="cartadding"
                onClick={(e) => 
                  {
                    e.stopPropagation();
                    dispatch(addToCart({ fatureele, quantity }))
                  } }
              >
                Add To Cart
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="addintocart addintocart2" style={{ marginTop: "29px"}} >
              <div className="quantitycal">
                <button
                  className="decre"
                  onClick={() =>
                    dispatch(
                      setProductQuantity({
                        id: fatureele.id,
                        quantity: Math.max(1, quantity - 1),
                      })
                    )
                  }
                >
                  -
                </button>
                <p className="quantitypera">{quantity}</p>
                <button
                  className="incre"
                  onClick={() =>
                    dispatch(
                      setProductQuantity({
                        id: fatureele.id,
                        quantity: quantity + 1,
                      })
                    )
                  }
                >
                  +
                </button>
              </div>
              <button
                className="cartadding"
                onClick={() => dispatch(addToCart({ fatureele, quantity, }))}
              >
                Add To Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FeatureChild;
