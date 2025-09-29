import React, { useContext } from "react";
import { useParams } from "react-router";
import { ThemeContext } from "../../context/ThemeContext";
import { Switch } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useSelector } from "react-redux";

const SinglePost = () => {
  const params = useParams();
  const { mode, toggleTheme } = useContext(ThemeContext);

  const posts = useSelector((state) => state.cart.posts);

  const individualPost = posts.find((ele) => ele.id === Number(params.postId));

  return (
    <>
      <div
        className="singlepost"
        style={{
          paddingTop: "251px",
          paddingBottom: "120px",
          paddingLeft: "80px",
          backgroundColor: mode === "light" ? "#fdfdfd" : "#121212",
          color: mode === "light" ? "#000 !important" : "#fff",
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

        <div className="postimg">
          <img src={individualPost.postedImage} alt="" />
        </div>

        <div className="postdescription">
          <h3 className="descriptiontitle">{individualPost.title}</h3>
          <p className="descriptiondate">
            {individualPost.date} <span>{individualPost.comments}</span>
          </p>
          <p className="descriptionpera">{individualPost.pera}</p>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
