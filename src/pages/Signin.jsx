import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import signinlogo from "../assets/images/SignIn.png";
import signInSideLogo from "../assets/images/signin_sidelogo.png";
import googlelogo from "../assets/images/googlelogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/auth/authSlice";
import { toast } from "react-toastify";

const SignIn = () => {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  const handleOnChange = (e) => {
    userData[e.target.name] = e.target.value;
    setUserData({ ...userData });
    console.log(userData);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!userData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(userData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!userData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(userData.password)) {
      newErrors.password =
        "Password must be at least 6 characters, include 1 letter, 1 number, and 1 special character";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      dispatch(loginUser({ userData, navigate }));
    } else {
      toast.error("Please fix the validation errors.");
    }
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

            <div className="relative flex justify-center items-center">
              <img
                src={signinlogo}
                className="w-[220px] sm:w-[350px] md:w-[500px] lg:w-[562px] h-auto"
                alt="signin"
              />

              <img
                src={signInSideLogo}
                alt="centerImage"
                className="absolute top-1/2 left-1/2 w-[60px] sm:w-[80px] md:w-[100px] lg:w-[123px] transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 !py-7 flex justify-center !px-5 !pt-16 sm:!pt-20 md:!pt-45">
          <div className="flex  flex-col gap-6 sm:gap-8 md:gap-10 !px-4 sm:!px-10 md:!px-15 lg:!px-20">
            <div className="flex justify-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl  lg:text-[38px] font-[500] text-center text-[#043133]  poppins  max-w-[494px]">
                Welcome to Jammy
              </h1>
            </div>

            <div className=" inputarea flex flex-col gap-6 !px-4 !sm:px-6 !md:px-10 !lg:px-24 !xl:px-34 ">
              <div>
                <label className="!mb-1 text-[16px] sm:text-[18px] md:text-[20px] text-[#4D5959] font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  value={userData.email || ""}
                  className="mt-2 w-full rounded-md !py-3 !pl-5  text-base sm:text-lg border border-gray-200 bg-[#EFF0F2] poppins"
                  placeholder="Enter your Email here"
                />

                {errors.email && (
                  <p className="text-red-500 text-lg mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="!mb-1 text-[16px] sm:text-[18px] md:text-[20px] text-[#4D5959] font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  value={userData.password || ""}
                  className="mt-2 w-full rounded-md !py-3 !pl-5 text-base sm:text-lg border border-gray-200 bg-[#EFF0F2] poppins"
                  placeholder="Enter your Password"
                />
                {errors.password && (
                  <p className="text-red-500 text-lg mt-1">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center justify-center">
              <button
                onClick={handleSubmit}
                className="rounded-sm cursor-pointer border-black sm:text-sm md:text-xl font-[500] poppins !py-2 !px-8 md:!px-18  bg-[#F99106] text-white"
              >
                Sign In
              </button>

              <div className="flex flex-wrap justify-center gap-1 items-center sm:text-sm md:text-md poppins text-[14px] sm:text-[16px] md:text-[18px]">
                <p className="text-gray-500  poppins">Don't have an account?</p>
                <NavLink to="/signUp">
                  <span className="text-[rgb(249,145,6)] cursor-pointer">
                    Sign Up
                  </span>
                </NavLink>
              </div>

              <p className="text-center text-[16px] sm:text-[18px] md:text-[20px] text-[#043133] font-medium poppins">
                OR
              </p>

              <div className="flex flex-col xl:flex-row items-center justify-center !gap-4 w-full">
                <button className="flex justify-center items-center gap-2 border border-[#D2D2D2] !py-2 sm:!py-3 md:!py-2 !px-4 sm:!px-6 w-full sm:w-auto rounded-md cursor-pointer">
                  <img
                    src={googlelogo}
                    className="w-[35px] sm:w-[45px] md:w-[50px] h-auto"
                    alt="Google"
                  />
                  <p className="!text-sm sm:!text-base md:!text-lg font-[500] Poppins text-[#043133]">
                    Sign up with Google
                  </p>
                </button>

                <button className="flex justify-center items-center gap-2 border border-[#D2D2D2] !py-2 sm:!py-3 md:!py-2 !px-4 sm:!px-6 w-full sm:w-auto rounded-md cursor-pointer">
                  <i className="fa-brands fa-facebook !text-2xl sm:!text-3xl md:!text-4xl !py-1"></i>
                  <p className="!text-sm sm:!text-base md:!text-lg font-[500] Poppins text-[#043133]">
                    Sign up with Facebook
                  </p>
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
