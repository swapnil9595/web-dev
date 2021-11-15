import React from "react";
import "./WhoToFollow.css";

const WhoToFollowListItem = ({
       item = {
           avatarIcon: '../../../images/nasa.png',
           userName: 'NASA',
           handle: 'NASA',
       }
    }) => {
    return(
        <>
        <li className = "list-group-item">
            <div className = "row">
                <div className = "col-2">
                    <img src = {item.avatarIcon} className= " wd-image-circular" />
                </div>
                <div className = "col-6 ">
                    <span className = "fw-bold">{item.userName}</span> <i className="fas fa-check-circle"></i>
                    <br/>@{item.handle}
                </div>
                <div className = "col-3">
                    <button className ="btn btn-primary rounded-pill wd-follow"> Follow</button>
                </div>
            </div> 
        </li>
        </>
    );
}
export default WhoToFollowListItem;
