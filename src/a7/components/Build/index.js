import React from "react";

import { Route } from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import EditProfile from "./ProfileScreen/EditProfile";
import who from "../../reducers/who";
import profile from "../../reducers/profile";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import tweets from "../../reducers/tweets";

const reducer = combineReducers({ tweets: tweets, who, profile: profile });
const store = createStore(reducer);

const Build7 = () => {
  return (
    <Provider store={store}>
      <div>
        <Route
          path={["/", "/a7/twitter/home"]}
          exact={true}
          component={HomeScreen}
        />
        <Route
          path="/a7/twitter/explore"
          exact={true}
          component={ExploreScreen}
        />
        <Route
          path="/a7/twitter/profile"
          exact={true}
          component={ProfileScreen}
        />
        <Route
          path="/a7/twitter/editprofile"
          exact={true}
          component={EditProfile}
        />
      </div>
    </Provider>
  );
};
export default Build7;
