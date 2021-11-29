import React from "react";
import "./PostSummary.css";

const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "logo-image": "/images/react.png",
  },
}) => {
  console.log(post);
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-7 col-md-9">
          <div className="text-muted">{post.topic}</div>
          <div>
            <span className="fw-bold">
              {post.userName}
              <span className="fa-stack" style={{ fontSize: "0.5em" }}>
                <i className="fas fa-circle fa-stack-2x"></i>
                <i
                  className="fas fa-check fa-stack-1x fa-inverse"
                  style={{ color: "black" }}
                ></i>
              </span>
            </span>
            <span className="text-muted">- {post.time}</span>
          </div>
          <div className="fw-bold">{post.title}</div>
        </div>

        <div
          className="col-3 col-md-2"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={post["logo-image"]}
            alt="qwe"
            width="55"
            height="55"
            className="float-end"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
    </li>
  );
};

export default PostSummaryItem;
