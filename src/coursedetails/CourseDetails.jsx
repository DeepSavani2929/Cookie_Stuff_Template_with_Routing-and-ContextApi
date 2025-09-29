// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router";
// import { Star } from "lucide-react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const CourseDetails = () => {
//   const params = useParams();
//   const courseDetails = useSelector((state) => state.cart.courseDetails);

//   const perticularCourse = courseDetails.find(
//     (course) => course.id === Number(params.courseId)
//   );
//   console.log(perticularCourse)

//   if (!perticularCourse) {
//     return (
//       <div className="text-center text-red-500 font-semibold py-20">
//         Course not found
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white">
//         <div className="!px-[40px]">

//       <div className="bg-gray-50 py-6 px-6 border-b mt-16 ">

//         <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
//           Course Details
//         </h1>
//         <p className="text-gray-500 mt-1">
//           Home <span className="text-orange-500">// Courses</span>
//         </p>
//       </div>

//       <div className="grid lg:grid-cols-[35%_65%] gap-6 px-6 py-10">

//         <div className="border rounded-lg shadow-md p-6 flex flex-col gap-4">
//           <h2 className="text-2xl font-bold text-center text-gray-800">
//             $420.38
//           </h2>

//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between border-b pb-2">
//               <span className="font-semibold">Instructor</span>
//               <span>{perticularCourse.instructor}</span>
//             </div>
//             <div className="flex justify-between border-b pb-2">
//               <span className="font-semibold">Duration</span>
//               <span>{perticularCourse.duration}</span>
//             </div>
//             <div className="flex justify-between border-b pb-2">
//               <span className="font-medium">Lectures</span>
//               <span>{perticularCourse.lectures}</span>
//             </div>
//             <div className="flex justify-between border-b pb-2">
//               <span className="font-medium">Level</span>
//               <span>{perticularCourse.level}</span>
//             </div>
//             <div className="flex justify-between border-b pb-2">
//               <span className="font-medium">Language</span>
//               <span>{perticularCourse.language}</span>
//             </div>
//             <div className="flex justify-between border-b pb-2">
//               <span className="font-medium">Certificate</span>
//               <span>{perticularCourse.Certificate}</span>
//             </div>
//           </div>

//           <button className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition">
//             Enroll now
//           </button>

//           <div className="mt-2">
//             <p className="font-medium text-gray-700 mb-2 text-sm">
//               Share Course:
//             </p>
//             <div className="flex space-x-4 text-gray-600 text-lg">
//               <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
//               <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
//               <FaInstagram className="hover:text-orange-500 cursor-pointer" />
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col gap-6">

//         <div className="rounded-md overflow-hidden shadow-md mx-auto">
//   <img
//     src={perticularCourse.image}
//     alt={perticularCourse.detail1}
//     className="w-full max-w-[700px] h-[350px] object-cover"
//   />
// </div>

//           <div className="border rounded-md p-4 shadow-sm bg-white">
//             <h2 className="text-xl font-semibold mb-2">All in one Pack</h2>
//             <div className="flex justify-between">
//                           <p className="text-sm text-gray-500">
//               By: <span className="font-medium">{perticularCourse.by}</span>
//             </p>
//                  <div className="flex items-center gap-4 mt-2 text-sm">
//               <span className="text-gray-700">
//                 {perticularCourse.enrolledStudents} Enrolled Students
//               </span>
//               <span className="flex items-center gap-1 text-orange-500">
//                 {perticularCourse.rating}
//                 <Star className="w-4 h-4 fill-orange-500" />
//                 <span className="text-gray-500 text-xs">
//                   ({perticularCourse.year})
//                 </span>
//               </span>
//             </div>
//             </div>

//           </div>

//           <div className="border rounded-md p-6 shadow-md bg-gray-50">
//             <h3 className="text-lg font-semibold text-gray-700 mb-4">
//               Details
//             </h3>
//             <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
//               {[
//                 perticularCourse.detail1,
//                 perticularCourse.detail2,
//                 perticularCourse.detail3,
//                 perticularCourse.detail4,
//                 perticularCourse.detail5,
//                 perticularCourse.detail6,
//                 perticularCourse.detail7,
//                 perticularCourse.detail8,
//               ].map((detail, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start gap-2 bg-white p-2 rounded-md shadow-sm"
//                 >
//                   <span className="text-orange-500">✔</span>
//                   <span>{detail}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//         </div>

//     </div>
//   );
// };

// export default CourseDetails;

// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router";
// import { Star } from "lucide-react";

// const CourseDetails = () => {
//   const params = useParams();
//   const courseDetails = useSelector((state) => state.cart.courseDetails);

//   const perticularCourse = courseDetails.find(
//     (course) => course.id === Number(params.courseId)
//   );
//   console.log(perticularCourse);

//   if (!perticularCourse) {
//     return (
//       <div className="text-center text-red-500 font-semibold !py-20">
//         Course not found
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="backgroundImgOfCourse">
//         <div className="container !px-[40px]">
//           <div className="content">
//             <h1 className="text-[2rem] font-bold">Course Details</h1>
//             <p>
//               Home // <span className="text-orange-500">Courses</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Section */}
//       <div className="courseContainer-fluid bg-white !py-10">
//         <div className="!w-[80%] flex flex-col lg:flex-row justify-between gap-10 mx-auto">
//           {/* Left Side Card */}
//           <div className="w-[100%] lg:w-[35%] xl:w-[25%] flex flex-col gap-10">
//             <div className="p-5 bg-[#FFF2F2] rounded-sm shadow-md">
//               <h2 className="text-center font-bold text-[1.8rem] font-[Poppins]">
//                 $ 550
//               </h2>
//               <hr className="text-[#f99106] opacity-30" />

//               <div className="flex justify-between items-center mt-3 font-[Poppins]">
//                 <div className="flex items-center gap-4">
//                   <i className="fa-solid fa-user"></i>
//                   <span className="text-black">Instructor</span>
//                 </div>
//                 <div className="text-[#00000080]">Zibiah Surya</div>
//               </div>
//               <hr className="text-[#f99106] opacity-30" />

//               <div className="flex justify-between items-center mt-3 font-[Poppins]">
//                 <div className="flex items-center gap-4">
//                   <i className="fa-regular fa-clock"></i>
//                   <span className="text-black">Duration</span>
//                 </div>
//                 <div className="text-[#00000080]">5 hr 15 mins</div>
//               </div>
//               <hr className="text-[#f99106] opacity-30" />

//               <div className="flex justify-between items-center mt-3 font-[Poppins]">
//                 <div className="flex items-center gap-4">
//                   <i className="fa-solid fa-video"></i>
//                   <span className="text-black">Lectures</span>
//                 </div>
//                 <div className="text-[#00000080]">10</div>
//               </div>
//               <hr className="text-[#f99106] opacity-30" />

//               <div className="flex justify-between items-center mt-3 font-[Poppins]">
//                 <div className="flex items-center gap-4">
//                   <i className="fa-solid fa-chart-simple"></i>
//                   <span className="text-black">Level</span>
//                 </div>
//                 <div className="text-[#00000080]">Beginner</div>
//               </div>
//               <hr className="text-[#f99106] opacity-30" />

//               <div className="flex justify-between items-center mt-3 font-[Poppins]">
//                 <div className="flex items-center gap-4">
//                   <i className="fa-solid fa-globe"></i>
//                   <span className="text-black">Language</span>
//                 </div>
//                 <div className="text-[#00000080]">English</div>
//               </div>
//               <hr className="text-[#f99106] opacity-30" />

//               <div className="flex justify-between items-center mt-3 font-[Poppins]">
//                 <div className="flex items-center gap-4">
//                   <i className="fa-regular fa-file-lines"></i>
//                   <span className="text-black">Certificate</span>
//                 </div>
//                 <div className="text-[#00000080]">Yes</div>
//               </div>
//               <hr className="text-[#f99106] opacity-30" />

//               <button className="w-full bg-[#f99106] text-white py-3 rounded-full !mt-5 hover:bg-[#ffa125]">
//                 Enroll now
//               </button>
//             </div>

//                <div className="flex flex-col gap-5">
//             <h1
//               className="text-[1.7rem] md:text-[1.9rem]"
//               style={{ fontFamily: "Yeseva One" }}
//             >
//               Share Course:
//             </h1>
//             <div className="flex items-center gap-6 text-[1.7rem] text-[#8a8a8a]">
//               <i className="fa-brands fa-linkedin cursor-pointer hover:text-blue-500"></i>
//               <i className="fa-brands fa-facebook-f cursor-pointer hover:text-blue-700"></i>
//               <i className="fa-brands fa-square-instagram cursor-pointer hover:text-pink-500"></i>
//               <i className="fa-brands fa-skype cursor-pointer hover:text-blue-600"></i>
//             </div>
//           </div>
//           </div>

//           {/* Right Side */}
//           <div class="w-[100%] lg:w-[60%] xl:w-[70%] flex justify-between flex-col gap-4">
//             <img class="h-[350px] w-full object-cover rounded-t-xl" alt="" src="../../../images/featured/a431ec0b36301c826df4b8bc7a409a49a4239e57.png"/>
//             <h1 class="text-2xl md:text-3xl" style="font-family: &quot;Yeseva One&quot;;">All in one Pack</h1>
//             <div class="flex flex-col md:flex-row gap-3 justify-between items-center">
//               <div class="flex items-center gap-3">
//                 <img class="h-[35px] w-[35px] rounded-full object-cover" alt="" src="../../../images/featured/a431ec0b36301c826df4b8bc7a409a49a4239e57.png"/>
//                 <p class="text-[0.9rem] font-[Poppins]"><span class="text-[#717171]">By</span>: Zibiah Surya</p>
//                 </div>
//                 <div class="flex items-center gap-2 text-[1.1rem]">
//                   <p class="text-[#f99106]">250</p>
//                   <p class="text-[#717171]">Enrolled Students</p></div>
//                   <div class="flex items-center gap-2 text-[1.3rem]">
//                     <p style="color: rgb(249, 145, 6);">4.5</p>
//                     <div class="text-[#f99106] flex items-center"><p>★</p><p>★</p><p>★</p><p>★</p><p>☆</p></div><p class="text-[#949494ff]">(2,002)</p></div>
//                     </div><h1 class="w-full shadow-md py-2 rounded-sm bg-[#fff2f2] text-2xl md:text-3xl text-center" style="font-family: &quot;Yeseva One&quot;;">Details</h1><div class="text-[Poppins] flex flex-col lg:flex-row justify-between gap-2 items-center w-[100%]">
//                       <div class="flex flex-col items-start justify-between gap-6 h-full w-full lg:w-[45%]">
//                   <div class="flex items-start justify-between gap-4 w-full">
//                     <div class="w-[8%]"><p class="bg-[#ff9106] h-[25px] w-[25px] flex justify-center items-center rounded-full text-white text-[0.7rem]">
//                       <i class="fa-solid fa-arrow-right"></i></p></div>
//                       <p class="w-[90%] text-[1.2rem] xl:text-[1.5rem]">FREE Mix Veg with Fried Potato Course</p></div>
//                       <div class="flex items-start justify-between gap-4 w-full"><div class="w-[8%]">
//                         <p class="bg-[#ff9106] h-[25px] w-[25px] flex justify-center items-center rounded-full text-white text-[0.7rem]">
//                           <i class="fa-solid fa-arrow-right"></i></p></div><p class="w-[90%] text-[1.2rem] xl:text-[1.5rem]">Step-by-step cooking video instructions + Detailed PDF notes</p></div>
//                           <div class="flex items-start justify-between gap-4 w-full"><div class="w-[8%]">
//                             <p class="bg-[#ff9106] h-[25px] w-[25px] flex justify-center items-center rounded-full text-white text-[0.7rem]">
//                               <i class="fa-solid fa-arrow-right"></i></p></div><p class="w-[90%] text-[1.2rem] xl:text-[1.5rem]">Learn at your own pace with lifetime access</p></div>
//                               <div class="flex items-start justify-between gap-4 w-full"><div class="w-[8%]">
//                                 <p class="bg-[#ff9106] h-[25px] w-[25px] flex justify-center items-center rounded-full text-white text-[0.7rem]">
//                             <i class="fa-solid fa-arrow-right"></i></p></div><p class="w-[90%] text-[1.2rem] xl:text-[1.5rem]">Learn from Experts</p></div></div>
//                             <div class="flex items-start justify-between h-full flex-col gap-6 w-full lg:w-[45%]">
//                               <div class="flex items-start justify-between gap-4 w-full">
//                                 <div class="w-[8%]"><p class="bg-[#ff9106] h-[25px] w-[25px] flex justify-center items-center rounded-full text-white text-[0.7rem]">
//                                   <i class="fa-solid fa-arrow-right"></i></p></div><p class="w-[90%] text-[1.2rem] xl:text-[1.5rem]">Access on mobile and TV</p></div>
//                                   <div class="flex items-start justify-between gap-4 w-full"><div class="w-[8%]">
//                                     <p class="bg-[#ff9106] h-[25px] w-[25px] flex justify-center items-center rounded-full text-white text-[0.7rem]">
//                                       <i class="fa-solid fa-arrow-right"></i></p></div><p class="w-[90%] text-[1.2rem] xl:text-[1.5rem]">30-day money-back guarantee</p></div>
//                                       <div class="flex items-start justify-between gap-4 w-full">
//                                         <div class="w-[8%]"><p class="bg-[#ff9106] h-[25px] w-[25px] flex justify-center items-center rounded-full text-white text-[0.7rem]">
//                                           <i class="fa-solid fa-arrow-right"></i></p></div>
//                                           <p class="w-[90%] text-[1.2rem] xl:text-[1.5rem]">Full</p></div>
//                                           <div class="flex items-start justify-between gap-4 w-full">
//                                             <div class="w-[8%]">
//                                             <p class="bg-[#ff9106] h-[25px] w-[25px] flex justify-center items-center rounded-full text-white text-[0.7rem]"><i class="fa-solid fa-arrow-right"></i></p></div>
//                                             <p class="w-[90%] text-[1.2rem] xl:text-[1.5rem]">Access</p>
//                                             </div>
//                                             </div>
//                                             </div>
//           </div>

//         </div>
//       </div>

//     </>
//   );
// };

// export default CourseDetails;

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import pfp from "../assets/images/prp.jpg";
import FreeRecipes from "../components/Recipes/FreeRecipes";
import FeatureChild from "../components/Features/FeatureChild";
import ContactUs from "../components/Contact/ContactUs";
const CourseDetails = () => {
  const params = useParams();
  const courseDetails = useSelector((state) => state.cart.courseDetails);

  const perticularCourse = courseDetails.find(
    (course) => course.id === Number(params.courseId)
  );

  const recipes = useSelector((state) => state.cart.recipes);

  const productQuantities = useSelector(
    (state) => state.cart.productQuantities
  );

  const getQuantity = (id) => productQuantities[id] || 1;

  if (!perticularCourse) {
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
                <div className="text-[#00000080]">
                  {perticularCourse.instructor}
                </div>
              </div>
              <hr className="text-[#f99106] opacity-30" />

              <div className=" alldetails flex justify-between items-center mt-3 font-[Poppins]">
                <div className="flex items-center gap-4">
                  <i className="fa-regular fa-clock"></i>
                  <span className="text-black font-medium">Duration</span>
                </div>
                <div className="text-[#00000080]">
                  {perticularCourse.duration}
                </div>
              </div>
              <hr className="text-[#f99106] opacity-30" />

              <div className=" alldetails flex justify-between items-center mt-3 font-[Poppins]">
                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-video"></i>
                  <span className="text-black font-medium">Lectures</span>
                </div>
                <div className="text-[#00000080]">
                  {perticularCourse.lectures}
                </div>
              </div>
              <hr className="text-[#f99106] opacity-30" />

              <div className=" alldetails flex justify-between items-center mt-3 font-[Poppins]">
                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-chart-simple"></i>
                  <span className="text-black font-medium">Level</span>
                </div>
                <div className="text-[#00000080]">{perticularCourse.level}</div>
              </div>
              <hr className="text-[#f99106] opacity-30" />

              <div className=" alldetails flex justify-between items-center mt-3 font-[Poppins]">
                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-globe"></i>
                  <span className="text-black font-medium">Language</span>
                </div>
                <div className="text-[#00000080]">
                  {perticularCourse.language}
                </div>
              </div>
              <hr className="text-[#f99106] opacity-30" />

              <div className=" alldetails flex justify-between items-center mt-3 font-[Poppins]">
                <div className="flex items-center gap-4">
                  <i className="fa-regular fa-file-lines"></i>
                  <span className="text-black font-medium">Certificate</span>
                </div>
                <div className="text-[#00000080]">
                  {perticularCourse.Certificate}
                </div>
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
              src={perticularCourse.image}
            />
            <h1
              className="text-2xl md:text-3xl"
              style={{ fontFamily: "Yeseva One" }}
            >
              {perticularCourse.detail1}
            </h1>

            <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  className="!h-[35px] !w-[35px] rounded-full object-cover"
                  alt="profile"
                  src={pfp}
                />
                <p className="text-[0.9rem] font-[Poppins]">
                  <span className="text-[#717171]">By</span>:{" "}
                  {perticularCourse.by}
                </p>
              </div>

              <div className="flex items-center gap-2 text-[1.1rem]">
                <p className="text-[#f99106]">
                  {perticularCourse.enrolledStudents}
                </p>
                <p className="text-[#717171]">Enrolled Students</p>
              </div>

              <div className="flex items-center gap-2 text-[1.3rem]">
                <p style={{ color: "rgb(249,145,6)" }}>
                  {perticularCourse.rating}
                </p>
                <div className="text-[#f99106] flex items-center">
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                  <p>★</p>
                  <p>☆</p>
                </div>
                <p className="text-[#949494ff]">({perticularCourse.year})</p>
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
                  perticularCourse.detail1,
                  perticularCourse.detail3,
                  perticularCourse.detail5,
                  perticularCourse.detail6,
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
                  perticularCourse.detail2,
                  perticularCourse.detail4,
                  perticularCourse.detail7,
                  perticularCourse.detail8,
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
            const quantity = getQuantity(ele.id);
            return (
              <>
                <FeatureChild key={i} fatureele={ele} quantity={quantity} />
              </>
            );
          })}
        </div>
      </div>

      <ContactUs/>
    </>
  );
};

export default CourseDetails;
