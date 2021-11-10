import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from "./Posts.json"

const PostSummaryList  = () => {
    return(
        <ul className="list-group">
            <li className = "list-group-item bg-secondary bg-opacity-25 text-white">
                {
                    posts.map(post => {
                        return(<PostSummaryItem post={post}/>);
                    })
                }
            </li>
        </ul>
    );
}

export default PostSummaryList ;