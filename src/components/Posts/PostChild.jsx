import React from "react";
import { Link, useNavigate } from "react-router";

const PostChild = ({ post }) => {
  const navigate = useNavigate();

  const handleOnReadMore = (id) => {
    navigate(`/readMoreAboutPost/${id}`);
  };

  return (
    <>
      <div className="singlepost">
        <div className="postimg">
          <img src={post.postedImage} alt="" />
        </div>

        <div className="postdescription">
          <h3 className="descriptiontitle">{post.title}</h3>
          <p className="descriptiondate">
            {post.date} <span>{post.comments}</span>
          </p>
          <p className="descriptionpera">{post.pera}</p>
          <h5
            onClick={() => handleOnReadMore(post.id)}
            className="descriptionbutton"
          >
            {post.button}
          </h5>
        </div>
      </div>
    </>
  );
};

export default PostChild;
