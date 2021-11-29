import React from "react";
import PostSummaryItem from "./PostItem";
import posts from "./Posts.json"

const PostSummaryList  = () => {
    return(
        <ul className="list-group">
            <li className = "list-group-item">
                {
                    posts.map(post => {
                        return(<PostSummaryItem post = {post}/>);
                    })
                }
            </li>
        </ul>
    );
}

export default PostSummaryList ;