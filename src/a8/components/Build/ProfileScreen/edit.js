import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./profile.css";
import { updateCurrentProfile } from "../../../../services/profile-service";

const Edit = () => {
  const profile = useSelector((state) => state.profile.profile);
  const [editedProfile, updateProfile] = useState(profile);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    updateCurrentProfile(dispatch, editedProfile);
  };

  return (
    <div>
      <div>
        <h5>
          <Link to="/a8/twitter/profile">
            <i className="fas fa-times fa-sm wd-edit-profile"></i>
          </Link>
          Edit Profile
          <button onClick={handleSubmit} className="wd-save btn rounded-pill">
            Save
          </button>
        </h5>
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
          alt=""
        />
      </div>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={editedProfile.firstName}
            className="wd-text-field"
            onChange={(e) =>
              updateProfile({
                ...editedProfile,
                firstName: e.target.value,
              })
            }
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            value={editedProfile.lastName}
            className="wd-text-field"
            onChange={(e) =>
              updateProfile({
                ...editedProfile,
                lastName: e.target.value,
              })
            }
          />
        </label>
      </div>
      <div>
        <label>
          Date of Birth:
          <input
            type="text"
            value={editedProfile.dateOfBirth}
            className="wd-text-field"
            onChange={(e) =>
              updateProfile({
                ...editedProfile,
                dateOfBirth: e.target.value,
              })
            }
          />
        </label>
      </div>
      <div>
        <label>
          Location:
          <input
            type="text"
            value={editedProfile.location}
            className="wd-text-field"
            onChange={(e) =>
              updateProfile({
                ...editedProfile,
                location: e.target.value,
              })
            }
          />
        </label>
      </div>
      <div>
        <label>
          Website:
          <input
            type="text"
            value={editedProfile.website}
            className="wd-text-field"
            onChange={(e) =>
              updateProfile({
                ...editedProfile,
                website: e.target.value,
              })
            }
          />
        </label>
      </div>
      <div>
        <label>
          Bio:
          <input
            type="text"
            value={editedProfile.bio}
            className="wd-text-field"
            onChange={(e) =>
              updateProfile({
                ...editedProfile,
                bio: e.target.value,
              })
            }
          />
        </label>
      </div>
    </div>
  );
};

export default Edit;
