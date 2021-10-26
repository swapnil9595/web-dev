import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"
const WhoToFollowList = () => {

    return (
            <ul className="list-group">
                <li className = "list-group-item fw-bold bg-secondary bg-opacity-25 text-white">Who to follow</li>
                <li className = "list-group-item bg-secondary bg-opacity-25 text-white">
                    {
                        who.map(who => {
                            return( <WhoToFollowListItem item={who}/>
);
                        })
                    }
                </li>
            </ul>
); }

export default WhoToFollowList;