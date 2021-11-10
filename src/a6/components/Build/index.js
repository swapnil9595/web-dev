import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
import PostSummaryList from "./PostSummaryList";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen"

const Build = () => {
    return(
      <>
          <ExploreScreen/>
          <HomeScreen/>


          <h1>Build</h1>
          <Link to="/a6/hello">
              Hello
          </Link> |
          <Link to="/a6/practice">
              Practice
          </Link>
      </>
    )
};

export default Build;
