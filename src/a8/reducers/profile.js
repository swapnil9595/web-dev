import profile_data from "./data/profile.json";

const profile = (state = profile_data[0], action) => {
  switch (action.type) {
    case "fetch-profile":
      return state;
    case "edit-profile":
      return {
        _id: new Date().getTime() + "",
        profilePicture: "../../images/dp.jpg",
        bannerPicture: "../../images/matrix.jpg",
        ...action.profile,
        dateJoined: "September 2020",
        followingCount: 312,
        followersCount: 180,
      };
    default:
      return state;
  }
};

export default profile;
