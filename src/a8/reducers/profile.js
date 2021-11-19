import profile_data from "./data/profile.json";

const initialState = {
  profile: {},
  isEdit: false,
};
const profile = (state = initialState, action) => {
  switch (action.type) {
    case "fetch-profile":
      return {
        ...state,
        profile: action.payload,
      };
    case "edit-profile":
      console.log("in Edit", state, action.payload);
      return {
        profile: action.payload,
        isEdit: false,
      };
    case "update-edit-profile":
      return {
        ...state,
        isEdit: action.payload,
      };
    default:
      return state;
  }
};

export default profile;
