import React, { useContext } from "react";
import PostChild from "./PostChild.jsx";

import { Switch } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { useLocation } from "react-router";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { useSelector } from "react-redux";

const Post = () => {
  const posts = useSelector((state) => state.cart.posts);
  console.log(posts);
  const location = useLocation();
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className="allposts"
        style={{
          height: "93.5vh",
          backgroundColor: mode === "light" ? "#fdfdfd" : "#121212",
          color: mode === "light" ? "#000" : "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "8px",
          }}
        >
          <LightModeIcon
            style={{ color: mode === "light" ? "#f39c12" : "#aaa" }}
          />
          <Switch checked={mode === "dark"} onChange={toggleTheme} />
          <DarkModeIcon
            style={{ color: mode === "dark" ? "#f1c40f" : "#aaa" }}
          />
        </div>
        <div
          className="postheader"
          style={{
            paddingTop: location.pathname === "/posts" ? "100px" : "0px",
          }}
        >
          <h1>Read Our Post</h1>
          <p>We Specialise in organising Professional Traning Courses</p>
        </div>

        <div className="posts">
          {posts?.map((post, i) => {
            return (
              <>
                <PostChild key={i} post={post} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Post;
