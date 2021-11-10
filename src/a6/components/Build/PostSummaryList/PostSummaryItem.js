import React from "react";
import "./PostSummary.css";

const PostSummaryItem = (
                            {
                                post = {
                                    "topic": "Web Development",
                                    "userName": "ReactJS",
                                    "time": "2h",
                                    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                    "image": "../../../images/react.png"
                                }
                            }) => {
    return(
        <li className = "list-group-item">
            <div className="row ms-2">
                <div className="col-8">
                    <p className="text-muted mt-2 mb-0">{post.topic}</p>
                    <p className="fw-bold mt-0 mb-0">
                    {post.userName} <i className="fas fa-check-circle"></i>
                    <span className="text-muted fw-normal"> - {post.time}</span>
                    </p>
                    <p className="fw-bold mt-0">{post.title}</p>
                </div>
                <div className="col-4">
                    <img src = {post.image} className="mb-2 mt-2 pe-2 wd-post-image" />
                </div>
            </div>
        </li>
    );
}
export default PostSummaryItem;