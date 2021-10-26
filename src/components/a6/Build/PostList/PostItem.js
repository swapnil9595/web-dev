import React from "react";
import "../HomeScreen/home.css"

const PostItem = ({
                                                  post = {
                                                      "topic": "Web Development",
                                                      "userName": "ReactJS",
                                                      "time": "2h",
                                                      "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                                      "image": "../../../images/react.png"
                                                  }
                                              }) => {
    if(post.heading || post.content || post.link){
        return(
            <li className = "list-group-item">
                <div className="row ">
                    <div className="col-1 ps-1 ">
                        <div>
                            <img src = {post.profile} className= " wd-image-circular" />
                        </div>
                    </div>
                    <div className=" col-11 ">
                        <div className=" fw-bold mt-0 mb-0">
                        {post.userName} <i className="fas fa-check-circle"></i>
                        <span className="text-muted mb-0">@{post.handle}</span>
                        <span className="text-muted fw-normal"> · {post.time}</span>
                        <span className="float-end text-secondary fas fa-ellipsis-h">
                        </span>
                        </div>
                        <div className=" mt-0" dangerouslySetInnerHTML={{__html: post.title}}/>
                        <div className= " border border-secondary rounded-top">
                            <img src = {post.image} className= "img-fluid border border-secondary rounded-top" />
                        </div>
                        <div className= "border  border-secondary rounded-bottom">
                            <p className= "ms-2 mt-2">
                                {post.heading}
                            </p>
                            <p className = "ms-2 text-muted " >
                                {post.content}
                            </p>
                            <div className = "ms-2 text-muted " >
                            <div className=" mt-0" dangerouslySetInnerHTML={{__html: post.link}}/>
                            </div>
                        </div>
                        <div className= " mt-2">
                            <span className ="me-5"><a  className = "second" href="#"><i className="far fa-regular fa-comment"></i><span className ="ms-2">{post.comments}</span></a></span>
                            <span className ="me-5 ms-5"><a  className = "second" href="#"><i className="fas fa-solid fa-retweet"></i><span className ="ms-2">{post.retweet}</span></a></span>
                            <span className ="me-5 ms-5"><a  className = "first" href="#"><i className="far fa-regular fa-heart"></i><span className ="ms-2">{post.likes}</span></a></span>
                            <span className ="me-5 ms-5"><a  className = "second" href="#"><i className="fas fa-share-square"></i></a></span>
                        </div>
                    </div>
                </div>
            </li>
        );
    } else {
        return(
            <li className = "list-group-item">
                <div className="row ">
                    <div className="col-1 ps-1 ">
                        <div>
                            <img src = {post.profile} className= " wd-image-circular" />
                        </div>
                    </div>
                    <div className=" col-11 ">
                        <div className=" fw-bold mt-0 mb-0">
                        {post.userName} <i className="fas fa-check-circle"></i>
                        <span className="text-muted mb-0">@{post.handle}</span>
                        <span className="text-muted fw-normal">·{post.time}</span>
                        <span className="float-end text-secondary fas fa-ellipsis-h">
                        </span>
                        </div>
                        <div className=" mt-0" dangerouslySetInnerHTML={{__html: post.title}}/>
                        <div className= " border border-secondary rounded-top">
                            <img src = {post.image} className= "img-fluid border border-secondary rounded-top" />
                        </div>
                        <div className= " mt-2">
                            <span className ="me-5"><a  className = "second" href="#"><i className="far fa-regular fa-comment"></i><span className ="ms-2">{post.comments}</span></a></span>
                            <span className ="me-5 ms-5"><a  className = "second" href="#"><i className="fas fa-solid fa-retweet"></i><span className ="ms-2">{post.retweet}</span></a></span>
                            <span className ="me-5 ms-5"><a  className = "first" href="#"><i className="far fa-regular fa-heart"></i><span className ="ms-2">{post.likes}</span></a></span>
                            <span className ="me-5 ms-5"><a  className = "second" href="#"><i className="fas fa-share-square"></i></a></span>
                        </div>
                    </div>
                </div>
            </li>
        );

    }
}
export default PostItem;