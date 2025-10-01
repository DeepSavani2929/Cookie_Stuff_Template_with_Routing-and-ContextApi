
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  addCourseIntoTheCart,
  decrementQuantity,
  incrementQuantity,
} from "../../store/cart/cartSlice";

const FeatureChild = ({ fatureele }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnCart = (id) => {
    navigate(`/individualCourseDeatils/${id}`);
  };

  const cartItems = useSelector((state) => state.cart.cartItems);


  const cartItem = cartItems.find(
    (item) =>
      item.courseId === fatureele._id &&
      item.courseType === fatureele.courseType
  );

  return (
    <div className="singlefeature">

      <div className="image" onClick={() => handleOnCart(fatureele._id)}>
        <img
          id="img"
          src={`http://localhost:8000/images/${fatureele.image}`}
          alt={fatureele.title}
        />
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
          <span className="amount">₹ {fatureele.amount}</span>
          <span className="originalamount">₹ {fatureele.originalAmount}</span>
        </p>

        {fatureele.buttonText ? (
          <button id="featurebtn">{fatureele.buttonText}</button>
        ) : <div></div>}


        <div
          className={`addintocart ${
            fatureele.buttonText ? "addintocart1" : "addintocart2"
          }`}
          style={!fatureele.buttonText ? { marginTop: "29px" } : {}}
        >
          {cartItem ? (

            <div className="quantitycal">
              <button
                className="decre"
                onClick={() =>
                  dispatch(
                    decrementQuantity({
                      id: fatureele._id,
                      courseType: fatureele.courseType,
                    })
                  )
                }
              >
                -
              </button>
              <p className="quantitypera">{cartItem.quantity}</p>
              <button
                className="incre"
                onClick={() =>
                  dispatch(
                    incrementQuantity({
                      id: fatureele._id,
                      courseType: fatureele.courseType,
                    })
                  )
                }
              >
                +
              </button>
            </div>
          ) : (

            <button
              className="cartadding"
              onClick={() =>
                dispatch(
                  addCourseIntoTheCart({
                    id: fatureele._id,
                    courseType: fatureele.courseType,
                  })
                )
              }
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureChild;
