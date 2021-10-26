import React from "react";
import {Link} from "react-router-dom";


const NavigationSidebar = (
    {
    active = 'explore'
    }) => {
    return(
    <div className = "list-group mr-1 ">

        <Link to="/a6/" className = "list-group-item " href="/">
                <i className="fab fa-twitter fa-inverse"></i>
        </Link>
        <Link to="/a6/twitter/home" className = {`list-group-item ${active === 'home' ? 'active' : ''}`} href="../HomeScreen/home.html">
            <i className="fas fa-home fa-inverse "></i>
            <span className="d-none d-xl-inline text-white">Home</span>
        </Link>
        <Link to="/a6/twitter/explore" className = {`list-group-item  ${active === 'explore' ? 'active' : ''}`} href="../ExploreScreen/explore.html">
            <i className="fas fa-hashtag fa-inverse"></i>
            <span className="d-none d-xl-inline text-white">Explore</span>
        </Link>
        <a className = "list-group-item" href="/">
            <i className="fas fa-bell fa-inverse"></i>
            <span className="d-none d-xl-inline text-white">Notifications</span>
        </a>
        <a className = "list-group-item " href="/">
            <i className="fas fa-envelope fa-inverse"></i>
            <span className="d-none d-xl-inline text-white">Messages</span>
        </a>
        <a className = "list-group-item " href="/">
            <i className="fas fa-bookmark fa-inverse"></i>
            <span className="d-none d-xl-inline text-white">Bookmarks</span>
        </a>
        <a className = "list-group-item " href="/">
            <i className="fas fa-list fa-inverse"></i>
            <span className="d-none d-xl-inline text-white">Lists</span>
        </a>
        <a className = "list-group-item" href="/">
            <i className="fas fa-user fa-inverse"></i>
            <span className="d-none d-xl-inline text-white">Profile</span>
        </a>
        <a className = "list-group-item" href="/">
            <i className="fas fa-comment-dots fa-inverse"></i>
            <span className="d-none d-xl-inline text-white">More</span>
        </a>
        <div className="d-grid mt-2">
            <a href="tweet.html"
                className="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>
    </div>
    );
}
export default NavigationSidebar;
