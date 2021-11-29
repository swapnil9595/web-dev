// import whoJson from "./data/who.json";

 const initialState = [{
    "avatarIcon": "",
    "userName": "",
    "handle": "" 
 }]

const who = (state = initialState, action) => {
  switch (action.type) {
    case "fetch-who":
      return action.who;

    default:
      return state;
  }
};

export default who;
