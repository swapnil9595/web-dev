import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateIsEdit } from "../../../../services/profile-service";

const Profile = () => {
  const profile = useSelector((state) => state.profile.profile);
  console.log("profile", profile);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h4>
          {profile.firstName} {profile.lastName}
        </h4>
      </div>
      <div>
        <h6 className="wd-sub-heading">2,127 Tweets </h6>
      </div>
      <div>
        <img
          src="../../../../images/matrix.jpeg"
          className="wd-profile-background"
          alt="matrix"
        />
      </div>
      <div>
        <img
          src="../../../../images/dp.jpg"
          className="wd-profile-image-circular"
          alt="dp"
        />
      </div>
      <div className="row">
        <div className="col-8">
          <h5 className="wd-profile-name">
            {profile.firstName} {profile.lastName}
          </h5>
        </div>
        <div className="col-4">
          <button
            class="btn btn-default wd-btn-edit rounded-pill"
            onClick={() => updateIsEdit(dispatch, true)}
          >
            Edit Profile
          </button>
        </div>
      </div>
      <div className="wd-sub-heading wd-profile-handle">@smitten</div>
      <div className="wd-bio">
        <p>{profile.bio}</p>
      </div>
      <div className=" row wd-profile-icons">
        <div className="col-3">
          <p>
            <i class="fas fa-map-marker-alt"></i>
            {profile.location}
          </p>
        </div>
        <div className="col-4">
          <p>
            <i class="fas fa-birthday-cake"></i> Born {profile.dateOfBirth}
          </p>
        </div>
        <div className="col-5">
          <p>
            <i class="far fa-calendar-alt"></i> Joined September 2020
          </p>
        </div>
      </div>
      <div className="row wd-profile-icons">
        <div className="col-3">
          <p>312 Following</p>
        </div>
        <div className="col-4">
          <p>180 Followers</p>
        </div>
        <div className="col-5">
          <p>{profile.website}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
