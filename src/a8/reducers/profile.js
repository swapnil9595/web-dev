import profile_data from "./data/profile.json";

const initialState = {
  profile: profile_data[0],
  isEdit: false,
};
const profile = (state = initialState, action) => {
  switch (action.type) {
    case "fetch-profile":
      return state.profile;
    case "edit-profile":
      return {
        profile: {
          _id: new Date().getTime() + "",
          ...action.profile,
        },
        isEdit: true,
      };
    default:
      return state;
  }
};

export default profile;
