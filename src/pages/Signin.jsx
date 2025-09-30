import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import signinlogo from "../assets/images/SignIn.png";
import googlelogo from "../assets/images/googlelogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../store/cart/cartSlice";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const [userData, setUserData] = useState({})

  const navigate =  useNavigate()
  const dispatch = useDispatch()

    const handleOnChange = (e) => {
    userData[e.target.name] = e.target.value;
    setUserData({...userData})
    console.log(userData)
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row !pt-20 bg-white">

        <div className="w-full md:w-1/2 md:border-r-2 border-gray-300 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-10 sm:gap-16 md:gap-20 p-5">
            <div>
              <img
                src={logo}
                className="w-[180px] sm:w-[250px] md:w-[305px]"
                alt="logo"
              />
            </div>
            <img
              src={signinlogo}
              className="w-[260px] sm:w-[400px] md:w-[562px] h-auto"
              alt="signin"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 !py-7 flex justify-center !px-5 !pt-16 sm:!pt-20 md:!pt-34">
          <div className="flex  flex-col gap-6 sm:gap-8 md:gap-10 !px-4 sm:!px-10 md:!px-15 lg:!px-20">
            <div className="flex justify-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-center font-poppins font-medium max-w-[494px]">
                Welcome to Jammy
              </h1>
            </div>

 
            <div className=" inputarea flex flex-col gap-6 !px-4 !sm:px-6 !md:px-10 !lg:px-20 xl:px-34 ">
              <div>
                <label
                  className="text-[16px] sm:text-[18px] md:text-[20px] text-[rgb(77,89,89)] font-Poppins"
                >
                  Email
                </label>
                <input
                  type="text"
                      name="email"
                  onChange={handleOnChange}
                      value = {userData.email || ""}
                  className="mt-2 w-full !py-3 !pl-5 text-[14px] sm:text-[16px] md:text-[20px] font-Poppins border border-gray-200 bg-gray-200"
                  placeholder="Enter your Email here"
                />
              </div>

              <div>
                <label
                  className="text-[16px] sm:text-[18px] md:text-[20px] text-[rgb(77,89,89)] font-Poppins"
                >
                  Password
                </label>
                <input
                  type="password"
                         name="password"
                  onChange={handleOnChange}
                      value = {userData.password || ""}
                  className="mt-2 w-full !py-3 !pl-5 text-[14px] sm:text-[16px] md:text-[20px] font-Poppins border bg-gray-200"
                  placeholder="Enter your Password"
                />
              </div>
            </div>


            <div className="flex flex-col gap-5 items-center justify-center">
              <button onClick = {() => dispatch(loginUser({userData, navigate}))} className="rounded-sm cursor-pointer border-black text-[18px] sm:text-[22px] md:text-[26px] font-poppins !py-2 !px-8 md:!px-18 text-white bg-[rgb(249,145,6)]">
                Sign In
              </button>

              <div className="flex flex-wrap justify-center gap-1 font-Poppins text-[14px] sm:text-[16px] md:text-[18px]">
                <p className="text-[#838383]">Don't have an account?</p>
                <NavLink to = "/signUp">
                   <span className="text-[rgb(249,145,6)] cursor-pointer">
                  Sign Up
                </span>
                  </NavLink>
              </div>

              <h5 className="text-center text-[16px] sm:text-[18px] md:text-[20px] font-semibold font-Poppins">
                OR
              </h5>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="flex cursor-pointer items-center gap-2 border border-gray-400 !py-2 !px-6">
                  <img
                    src={googlelogo}
                    className="w-[35px] sm:w-[45px] md:w-[50px] h-auto"
                    alt="google"
                  />
                  <p className="text-sm sm:text-md">Sign up with Google</p>
                </button>

                <button className="flex cursor-pointer items-center gap-2 border border-gray-400 !py-2 !px-6">
                  <i className="fa-brands fa-facebook text-2xl sm:text-4xl md:text-5xl"></i>
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

export default SignIn;
