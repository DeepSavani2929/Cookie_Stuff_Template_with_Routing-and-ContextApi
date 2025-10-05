import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import signinlogo from "../assets/images/SignIn.png";
import googlelogo from "../assets/images/googlelogo.png";
import signInSideLogo from "../assets/images/signin_sidelogo.png";
import { NavLink, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/auth/authSlice";
import { toast } from "react-toastify";

const SignUp = () => {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!userData.fullName) {
      newErrors.fullName = "Please Enter Your Name";
    }

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
      dispatch(registerUser({ userData, navigate }));
    } else {
      toast.error("Please fix the validation errors.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row !pt-20 bg-white">
      <div className="w-full md:w-1/2 border-r border-gray-300 flex justify-center items-center !p-5">
        <div className="flex flex-col justify-center items-center gap-10 sm:gap-14 md:gap-18 lg:gap-22">
          <img
            src={logo}
            className="w-[200px] sm:w-[250px] md:w-[305px]"
            alt="Logo"
          />
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

      <div className="w-full md:w-1/2 flex justify-center !px-4 sm:!px-6 md:!px-12 lg:!px-20 !py-30 !pt-24">
        <div className="w-full max-w-lg flex flex-col !gap-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-[500] text-center  text-[#043133] poppins">
            Welcome to Jammy
          </h1>

          <div className="flex flex-col !gap-7">
            <div className="flex flex-col">
              <label
                htmlFor="fullName"
                className="!mb-1 text-[16px] sm:text-[18px] md:text-[20px] text-[#4D5959] font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                onChange={handleOnChange}
                value={userData.fullName || ""}
                className="w-full rounded-md !py-3 !px-4 text-base sm:text-lg border border-gray-200 bg-[#EFF0F2] poppins"
                placeholder="John Doe"
              />

              {errors.fullName && (
                <p className="text-red-500 text-lg mt-1">{errors.fullName}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="!mb-1 text-[16px] sm:text-[18px] md:text-[20px] text-[#4D5959] font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleOnChange}
                value={userData.email || ""}
                className="w-full rounded-md !py-3 !px-4 text-base sm:text-lg border border-gray-200 bg-[#EFF0F2] poppins"
                placeholder="Enter your Email here"
              />

              {errors.email && (
                <p className="text-red-500 text-lg mt-1">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="!mb-1 text-[16px] sm:text-[18px] md:text-[20px] text-[#4D5959] font-medium"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleOnChange}
                value={userData.password || ""}
                className="w-full rounded-md !py-3 !px-4 text-base sm:text-lg border border-gray-200 bg-[#EFF0F2] poppins"
                placeholder="Enter your Password"
              />
              {errors.password && (
                <p className="text-red-500 text-lg mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col !gap-5 items-center">
            <button
              onClick={handleSubmit}
              className=" rounded-sm cursor-pointer  sm:text-sm md:text-xl font-[500] poppins !py-3 !px-12  bg-[#F99106] text-white"
            >
              Create Account
            </button>

            <div className="flex flex-wrap justify-center items-center sm:text-sm md:text-md !gap-1 text-[16px] sm:text-[18px]">
              <p className="text-gray-500  poppins">Already have an account?</p>
              <NavLink to="/signIn">
                <span className="text-[#F99106] cursor-pointer poppins">
                  Log in
                </span>
              </NavLink>
            </div>

            <h5 className="text-center text-[18px] sm:text-[20px] text-[#043133] font-medium">
              OR
            </h5>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-center gap-4 w-full">
            <button className="flex items-center justify-center gap-3 border border-[#D2D2D2] bg-white hover:bg-gray-50 transition-all duration-200 rounded-md w-full sm:w-[260px] lg:w-[280px] !py-3 px-6 shadow-sm whitespace-nowrap">
              <img
                src={googlelogo}
                className="w-[24px] sm:w-[28px] md:w-[32px] h-auto"
                alt="Google"
              />
              <p className="text-sm sm:text-base md:text-lg font-[500] text-[#043133] whitespace-nowrap">
                Sign up with Google
              </p>
            </button>

            <button className="flex items-center justify-center gap-3 border border-[#D2D2D2] bg-white hover:bg-gray-50 transition-all duration-200 rounded-md w-full sm:w-[260px] lg:w-[280px] !py-3  shadow-sm ">
              <i className="fa-brands fa-facebook  text-xl sm:text-2xl md:text-3xl"></i>
              <p className="text-sm sm:text-base md:text-lg font-[500] text-[#043133] whitespace-nowrap">
                Sign in with Facebook
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
