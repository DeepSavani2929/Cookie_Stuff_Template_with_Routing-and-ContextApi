import React, { useContext } from "react";
import BlogChild from "./BlogChild";
import { ThemeContext } from "../../context/ThemeContext";
import { Switch } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useSelector } from "react-redux";


const Blog = () => {
      const { mode, toggleTheme } = useContext(ThemeContext);
        const blogs = useSelector((state) => state.cart.blogs);


  return (
    <section className="blog-section" style = {{ height: "93.5vh",
    backgroundColor: mode === "light" ? "#fdfdfd" : "#121212",
    color: mode === "light" ? "#000" : "#fff",}}>
                   <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "8px" }}>
      <LightModeIcon style={{ color: mode === "light" ? "#f39c12" : "#aaa" }} />
      <Switch checked={mode === "dark"} onChange={toggleTheme} />
      <DarkModeIcon style={{ color: mode === "dark" ? "#f1c40f" : "#aaa" }} />
    </div>
      <div className="blog-header">
        <h2>Read Our Post</h2>
        <p>We Specialise in organising Professional Traning Courses</p>
      </div>

      <div className="blog-cards">
        {blogs.map((blog) => (
           <BlogChild blog = {blog}/>
        ))}
      </div>
    </section>
  );
};

export default Blog;
