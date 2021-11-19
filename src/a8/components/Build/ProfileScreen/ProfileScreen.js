import "./profile.css";
import React, { useEffect } from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import TweetList from "../TweetList";
import Profile from "./profile";
import { useDispatch, useSelector } from "react-redux";
import Edit from "./edit";
import { getCurrentProfile } from "../../../../services/profile-service";

const ProfileScreen = () => {
  const isEdit = useSelector((state) => state.profile.isEdit);
  const dispatch = useDispatch();
  useEffect(() => getCurrentProfile(dispatch), []);
  return (
    <div className="row mt-2">
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="profile" />
      </div>
      <div
        className="col-10 col-lg-7 col-xl-6"
        style={{ position: "relative" }}
      >
        {isEdit ? <Edit /> : <Profile />}
        <TweetList />
      </div>
      <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <PostSummaryList title="What's happening" />
      </div>
    </div>
  );
};

export default ProfileScreen;
