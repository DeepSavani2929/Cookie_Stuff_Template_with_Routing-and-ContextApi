import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import signinlogo from "../assets/images/SignIn.png";
import googlelogo from "../assets/images/googlelogo.png";
import { NavLink, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/cart/cartSlice";

const SignUp = () => {
  const [userData, setUserData] = useState({});
//   const [blankUserData, setBlankUserData] = useState({});
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    userData[e.target.name] = e.target.value;
    setUserData({...userData})
    console.log(userData)
  };
  return (
    <>
      <div className="min-h-screen border border-green flex flex-col md:flex-row !pt-20 bg-white">
        <div className="w-full md:w-1/2 border-r md:border-r-2 border-gray-300 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-20 p-5">
            <div>
              <img
                src={logo}
                className="w-[200px] sm:w-[250px] md:w-[305px]"
                alt=""
              />
            </div>
            <img
              src={signinlogo}
              className="w-[300px] sm:w-[400px] md:w-[562px] h-auto"
              alt=""
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 !py-7 flex justify-center !px-5 !pt-21">
          <div className="flex w-full flex-col gap-6 sm:gap-8 md:gap-10 !px-15 !pt-12 sm:px-6 md:px-12 lg:px-20">
            <div className="flex justify-center ">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-center font-poppins font-medium max-w-[494px]">
                Welcome to Jammy
              </h1>
            </div>

            <div className="inputarea gap-6 sm:gap-8 md:gap-10 flex flex-col  !px-4 !sm:px-6 !md:px-10 !lg:px-20 xl:px-34 ">
              <div>
                <label
                  htmlFor=""
                  className="text-[18px] sm:text-[20px] text-[rgb(77, 89, 89, 1)] font-Poppins"
                >
                  Full Name
                </label>
                <br />
                <input
                  type="text"
                  name="fullName"
                  onChange={handleOnChange}
                      value = {userData.fullName || ""}
                  className="w-full !py-3 !pl-5 text-[16px] sm:text-[20px] font-Poppins border border-gray-200 bg-gray-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="text-[18px] sm:text-[20px] text-[rgb(77, 89, 89, 1)] font-Poppins"
                >
                  Email
                </label>
                <br />
                <input
                  type="text"
                  name="email"
                  onChange={handleOnChange}
                      value = {userData.email || ""}
                  className="w-full !py-3 !pl-5 text-[16px] sm:text-[20px]  font-Poppins border border-gray-200 bg-gray-200"
                  placeholder="Enter your Email here"
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="text-[18px] sm:text-[20px] text-[rgb(77, 89, 89, 1)] font-Poppins"
                >
                  Password
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  value = {userData.password || ""}
                  onChange={handleOnChange}
                  className="w-full !py-3 !pl-5 text-[16px] sm:text-[20px]   font-Poppins border bg-gray-200"
                  placeholder="Enter your Password"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center justify-center">
              <button onClick = {() => dispatch(registerUser({userData, navigate}))} className="rounded-sm cursor-pointer border-black text-[20px] sm:text-[22px] md:text-[26px] font-poppins !py-2 !px-8 !pb-3 md:!px-10 text-[rgba(255,255,255,1)] bg-[rgba(249,145,6,1)]">
                Create Account
              </button>

              <div className="flex flex-wrap justify-center gap-1 font-Poppins text-[16px] sm:text-[18px]">
                <p className="text-[rgba(131, 131, 131, 1)]">
                  Already have an account?
                </p>
                <NavLink to="/signIn">
                  <span className="text-[rgba(249,145,6,1)] cursor-pointer">
                    Log in
                  </span>
                </NavLink>
              </div>

              <h5 className="text-center text-[18px] sm:text-[20px] font-semibold font-Poppins">
                OR
              </h5>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="flex cursor-pointer items-center gap-2 border border-gray-400 !py-2 !px-6">
                  <img
                    src={googlelogo}
                    className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]"
                    alt=""
                  />
                  <p className="text-sm sm:text-md">Sign up with Google</p>
                </button>

                <button className="flex cursor-pointer items-center gap-2 border border-gray-400 !py-2 !px-6">
                  <i className="fa-brands fa-facebook text-3xl sm:text-5xl"></i>
                  <p className="text-sm sm:text-md">Sign up with Facebook</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
