import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCartCourses } from "../../store/cart/cartSlice";
import { NavLink } from "react-router";

const PaymentSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartCourses());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 via-green-300 to-green-400 font-sans">
      <div className="bg-white !p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-5xl !mb-4 text-green-600 animate-bounce">
          🎉 Success!
        </h1>
        <p className="text-gray-700 !mb-6 text-lg">
          Your courses have been purchased successfully.
        </p>
        <NavLink to="/">
          <button className="bg-green-600 hover:bg-green-700 text-white !px-6 !py-3 rounded-lg font-semibold transition-all duration-300">
            Go to Dashboard
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default PaymentSuccess;
