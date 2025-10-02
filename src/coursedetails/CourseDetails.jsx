import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import pfp from "../assets/images/prp.jpg";
import FreeRecipes from "../components/Recipes/FreeRecipes";
import FeatureChild from "../components/features/FeatureChild";
import ContactUs from "../components/contact/ContactUs";
import { getCourses } from "../store/cart/cartSlice";
import { toast } from "react-toastify";
import axios from "axios";
const CourseDetails = () => {
  const [singleCourse, setSingleCourse] = useState({});
  const params = useParams();
  const recipes = useSelector((state) => state.cart.recipes);

  const dispatch = useDispatch();

  const getCourse = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/allCourses/getCourse/${
          params.courseId
        }`,
        {
          withCredentials: true,
        }
      );

      if (res.data?.success) {
        toast.success(res.data.message);
        setSingleCourse({ ...res.data.data });
        console.log(res.data.data);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getCourse();
    dispatch(getCourses("Recipes"));
  }, [params.courseId]);

  if (!singleCourse || Object.keys(singleCourse).length === 0) {
    return (
      <div className="text-center text-red-500 font-semibold !py-20">
        Course not found
      </div>
    );
  }

  return (
    <>
      <div className="bgCourse">
        <div className="container">
          <div className="content">
            <h1 className="text-[42px] font-bold">Course Details</h1>
            <p className="text-[20px]">
              Home // <span className="text-orange-500">Courses</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex justify-center bg-white !py-10">
        <div className=" thirdpart  flex flex-col lg:flex-row justify-between gap-10 mx-auto">
          <div className="w-[100%] lg:w-[35%] xl:w-[25%] flex flex-col gap-10">
            <div className="p-5 leftPart bg-[#FFF2F2] rounded-sm shadow-md">
              <h2 className="text-center font-medium text-[1.8rem] font-[Poppins]">
                $ 550
              </h2>
              <hr className="text-[#f99106] opacity-30" />

              <div className="alldetails flex justify-between items-center mt-3 font-[Poppins]">
                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-user"></i>
                  <span className="text-black font-medium">Instructor</span>
                </div>
                <div className="text-[#00000080]">Zibiah Surya</div>
              </div>
              <hr className="text-[#f99106] opacity-30" />

              <div className=" alldetails flex justify-between items-center mt-3 font-[Poppins]">
                <div className="flex items-center gap-4">
                  <i className="fa-regular fa-clock"></i>
                  <span className="text-black font-medium">Duration</span>
                </div>
                <div className="text-[#00000080]">05 hr 15 mins</div>
              </div>
              <hr className="text-[#f99106] opacity-30" />

              <div className=" alldetails flex justify-between items-center mt-3 font-[Poppins]">
                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-video"></i>
                  <span className="text-black font-medium">Lectures</span>
                </div>
                <div className="text-[#00000080]">10</div>
              </div>
              <hr className="text-[#f99106] opacity-30" />

              <div className=" alldetails flex justify-between items-center mt-3 font-[Poppins]">
                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-chart-simple"></i>
                  <span className="text-black font-medium">Level</span>
                </div>
                <div className="text-[#00000080]">Beginner</div>
              </div>
              <hr className="text-[#f99106] opacity-30" />

              <div className=" alldetails flex justify-between items-center mt-3 font-[Poppins]">
                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-globe"></i>
                  <span className="text-black font-medium">Language</span>
                </div>
                <div className="text-[#00000080]">English</div>
              </div>
              <hr className="text-[#f99106] opacity-30" />

              <div className=" alldetails flex justify-between items-center mt-3 font-[Poppins]">
                <div className="flex items-center gap-4">
                  <i className="fa-regular fa-file-lines"></i>
                  <span className="text-black font-medium">Certificate</span>
                </div>
                <div className="text-[#00000080]">Yes</div>
              </div>
              <hr className="text-[#f99106] opacity-30" />

              <button className=" enroll w-full bg-[#f99106] text-white py-3 rounded-full !mt-5 hover:bg-[#ffa125]">
                Enroll now
              </button>
            </div>

            <div className="flex flex-col gap-5">
              <h1
                className="text-[1.7rem] md:text-[1.9rem]"
                style={{ fontFamily: "Yeseva One" }}
              >
                Share Course:
              </h1>
              <div className="flex items-center gap-6 text-[1.7rem] text-[#8a8a8a]">
                <i className="fa-brands fa-linkedin cursor-pointer hover:text-blue-500"></i>
                <i className="fa-brands fa-facebook-f cursor-pointer hover:text-blue-700"></i>
                <i className="fa-brands fa-square-instagram cursor-pointer hover:text-pink-500"></i>
                <i className="fa-brands fa-skype cursor-pointer hover:text-blue-600"></i>
              </div>
            </div>
          </div>

          <div className="w-[100%] lg:w-[60%] xl:w-[70%] flex justify-between flex-col gap-4">
            <img
              className="h-[350px] w-full object-cover rounded-t-xl"
              alt=""
              src={`http://localhost:8000/images/${singleCourse.image}`}
            />
            <h1
              className="text-2xl md:text-3xl"
              style={{ fontFamily: "Yeseva One" }}
            >
              {singleCourse.title}
            </h1>

            <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  className="!h-[35px] !w-[35px] rounded-full object-cover"
                  alt="profile"
                  src={pfp}
                />
                <p className="text-[0.9rem] font-[Poppins]">
                  <span className="text-[#717171]">By</span>:Zibiah Surya
                </p>
              </div>

              <div className="flex items-center gap-2 text-[1.1rem]">
                <p className="text-[#f99106]">300</p>
                <p className="text-[#717171]">Enrolled Students</p>
              </div>

              <div className="flex items-center gap-2 text-[1.3rem]">
                <p style={{ color: "rgb(249,145,6)" }}>4.2</p>
                <div className="text-[#f99106] flex items-center">
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                  <p>☆</p>
                </div>
                <p className="text-[#949494ff]">(2002)</p>
              </div>
            </div>

            <h1
              className="w-full shadow-md py-2 rounded-sm bg-[#fff2f2] text-2xl md:text-3xl text-center"
              style={{ fontFamily: "Yeseva One", padding: "10px 0px" }}
            >
              Details
            </h1>

            <div className="font-[Poppins] flex flex-col lg:flex-row justify-between gap-2 items-center w-[100%]">
              <div className="flex flex-col items-start justify-between gap-6 h-full w-full lg:w-[45%]">
                {[
                  singleCourse.title,
                  "100% veg recipes",
                  "Learn from Experts",
                  "Explore new recipes every day",
                ].map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-4 w-full">
                    <div className="w-[8%]">
                      <p className="bg-[#ff9106] h-[25px] w-[25px] flex justify-center items-center rounded-full text-white text-[0.7rem]">
                        <i className="fa-solid fa-arrow-right"></i>
                      </p>
                    </div>
                    <p className="w-[90%] text-[1.2rem] xl:text-[1.5rem]">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6 w-full lg:w-[45%]">
                {[
                  "100% veg recipes",
                  "Doubt solving over call",
                  "Explore new recipes every day",
                  "Free Lifetime Access",
                ].map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-4 w-full">
                    <div className="w-[8%]">
                      <p className="bg-[#ff9106] h-[25px] w-[25px] flex justify-center items-center rounded-full text-white text-[0.7rem]">
                        <i className="fa-solid fa-arrow-right"></i>
                      </p>
                    </div>
                    <p className="w-[90%] text-[1.2rem] xl:text-[1.5rem]">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FreeRecipes />

      <div className="foodcardscontainer">
        <div className="foodcardsinner">
          {recipes.map((ele, i) => {
            return (
              <>
                <FeatureChild key={i} fatureele={ele} />
              </>
            );
          })}
        </div>
      </div>

      <ContactUs />
    </>
  );
};

export default CourseDetails;
