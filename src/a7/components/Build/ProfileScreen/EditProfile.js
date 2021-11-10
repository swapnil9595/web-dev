import React from "react";
import "./profile.css";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import TweetList from "../TweetList";
import Profile from "./profile";
import Edit from "./edit";


const EditProfile = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6" style = {{"position" : "relative"}}>
                    <Edit/>
                 <TweetList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList title = "What's happening"/>
            </div>

        </div>
       
    );
}

export default EditProfile;