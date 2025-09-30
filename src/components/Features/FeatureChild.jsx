// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router";
// import {
//   addCourseIntoTheCart,
//   decrementQuantity,
//   incrementQuantity,
// } from "../../store/cart/cartSlice";

// const FeatureChild = ({ fatureele }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Get cart state from Redux
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const cartItem = cartItems.find(
//     (item) =>
//       item.courseId === fatureele._id &&
//       item.courseType === fatureele.courseType
//   );

//   const handleOnCart = (id) => {
//     navigate(`/individualCourseDeatils/${id}`);
//   };

//   return (
//     <div className="singlefeature flex flex-col border p-3">
//       {/* Image */}
//       <div className="image cursor-pointer" onClick={() => handleOnCart(fatureele.id)}>
//         <img
//           id="img"
//           src={`http://localhost:8000/images/${fatureele.image}`}
//           alt={fatureele.title}
//         />
//       </div>

//       {/* Content */}
//       <div className="featurecontent flex-1">
//         <h3>
//           {fatureele.title} <div>(Lifetime Access)</div>
//         </h3>

//         {/* Rating */}
//         <p className="ratingpart">
//           <span id="rating">4.2</span>
//           <span className="star">
//             <span className="filledstar">&#9733;&#9733;&#9733;&#9733;</span>
//             &#9734;<span className="year">(2,002)</span>
//           </span>
//         </p>

//         {/* Price */}
//         <p className="price">
//           <span className="amount">₹ {fatureele.amount}</span>
//           <span className="originalamount">₹ {fatureele.originalAmount}</span>
//         </p>
//       </div>

//       {/* Cart Controls BELOW the card */}
//       <div className="mt-4 flex justify-center">
//         {cartItem ? (
//           <div className="flex gap-3 items-center">
//             <button
//               className="decre px-3 py-1 border"
//               onClick={() =>
//                 dispatch(
//                   decrementQuantity({
//                     id: fatureele._id,
//                     courseType: fatureele.courseType,
//                   })
//                 )
//               }
//             >
//               -
//             </button>
//             <p className="quantitypera">{cartItem.quantity}</p>
//             <button
//               className="incre px-3 py-1 border"
//               onClick={() =>
//                 dispatch(
//                   incrementQuantity({
//                     id: fatureele._id,
//                     courseType: fatureele.courseType,
//                   })
//                 )
//               }
//             >
//               +
//             </button>
//           </div>
//         ) : (
//           <button
//             className="cartadding px-4 py-2 bg-blue-600 text-white rounded"
//             onClick={() =>
//               dispatch(
//                 addCourseIntoTheCart({
//                   id: fatureele._id,
//                   courseType: fatureele.courseType,
//                 })
//               )
//             }
//           >
//             Add To Cart
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeatureChild;




// import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { useNavigate } from "react-router";
// import { addCourseIntoTheCart, decrementQuantity, incrementQuantity } from "../../store/cart/cartSlice";

// const FeatureChild = ({ fatureele }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate()
//   const handleOnCart = (id) => {
//      navigate(`/individualCourseDeatils/${id}`)
//   }

//   const cartItems = useSelector((state) => state.cart.cartItems);

//   const cartItem = cartItems.find(
//     (item) =>
//       item.courseId === fatureele._id &&
//       item.courseType === fatureele.courseType
//   );

//   return (
//     <div className="singlefeature" >
//       <div className="image" onClick = {() => handleOnCart(fatureele.id)}>
//         <img id="img" src={`http://localhost:8000/images/${fatureele.image}`} alt={fatureele.title} />
//       </div>
//       <div className="featurecontent">
//         <h3>
//           {fatureele.title} <div>(Lifetime Access)</div>
//         </h3>
//         <p className="ratingpart">
//           <span id="rating">4.2</span>
//           <span className="star">
//             <span className="filledstar">&#9733;&#9733;&#9733;&#9733;</span>
//             &#9734;<span className="year">(2,002)</span>
//           </span>
//         </p>
//         <p className="price">
//           <span className="amount"> &#8377; {fatureele.amount}</span>
//           <span className="originalamount">₹ {fatureele.originalAmount}</span>
//         </p>
//         {fatureele.buttonText && (
//           <>
//             <button id="featurebtn">{fatureele.buttonText}</button>
//           </>
//         )}

//         {fatureele.buttonText ? (
//           <>

//             <div className="addintocart addintocart1">
//               <div className="quantitycal">
//                 <button
//                   className="decre"
//                     onClick = {() => dispatch(decrementQuantity({id: fatureele._id, courseType: fatureele.courseType}))}
//                 >
//                   -
//                 </button>
//                 <p className="quantitypera">{fatureele.quantity}</p>
//                 <button
//                   className="incre"
//                   onClick = {() => dispatch(incrementQuantity({id: fatureele._id, courseType: fatureele.courseType}))}
//                 >
//                   +
//                 </button>
//               </div>
//               <button
//                 className="cartadding"
//                  onClick = {() => dispatch(addCourseIntoTheCart({id: fatureele._id, courseType: fatureele.courseType}))}
//               >
//                 Add To Cart
//               </button>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="addintocart addintocart2" style={{ marginTop: "29px"}} >
//               <div className="quantitycal">
//                 <button
//                   className="decre"
//                   onClick = {() => dispatch(decrementQuantity({id: fatureele._id, courseType: fatureele.courseType}))}
//                 >
//                   -
//                 </button>
//                 <p className="quantitypera">{fatureele.quantity}</p>
//                 <button
//                   className="incre"
//                   onClick = {() =>dispatch(incrementQuantity({id: fatureele._id, courseType: fatureele.courseType}))}
//                 >
//                   +
//                 </button>
//               </div>
//               <button
//                 className="cartadding"
//                 onClick = {() => dispatch(addCourseIntoTheCart({id: fatureele._id, courseType: fatureele.courseType}))}
//               >
//                 Add To Cart
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FeatureChild;


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
