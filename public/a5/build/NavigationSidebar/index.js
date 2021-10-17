const NavigationSidebar = (page) => {
    return(`
    <div class = "list-group mr-1 ">
        <a class = "list-group-item " href="/">
                <i class="fab fa-twitter fa-inverse"></i> 
        </a>
        <a class = "list-group-item ${page.active == "home" ? "active" : ""}"" href="../HomeScreen/home.html">
            <i class="fas fa-home fa-inverse "></i>
            <span class="d-none d-xl-inline text-white">Home</span>
        </a>
        <a class = "list-group-item  ${page.active == "explore" ? "active" : ""}" href="../ExploreScreen/explore.html">
            <i class="fas fa-hashtag fa-inverse"></i>
            <span class="d-none d-xl-inline text-white">Explore</span>
        </a>
        <a class = "list-group-item" href="/">
            <i class="fas fa-bell fa-inverse"></i>
            <span class="d-none d-xl-inline text-white">Notifications</span>                    
        </a>
        <a class = "list-group-item " href="/">
            <i class="fas fa-envelope fa-inverse"></i>
            <span class="d-none d-xl-inline text-white">Messages</span>                    
        </a>
        <a class = "list-group-item " href="/">
            <i class="fas fa-bookmark fa-inverse"></i>
            <span class="d-none d-xl-inline text-white">Bookmarks</span>                    
        </a>
        <a class = "list-group-item " href="/">
            <i class="fas fa-list fa-inverse"></i>
            <span class="d-none d-xl-inline text-white">Lists</span>                    
        </a>
        <a class = "list-group-item" href="/">
            <i class="fas fa-user fa-inverse"></i>
            <span class="d-none d-xl-inline text-white">Profile</span>                    
        </a>
        <a class = "list-group-item" href="/">
            <i class="fas fa-comment-dots fa-inverse"></i>
            <span class="d-none d-xl-inline text-white">More</span>                    
        </a>
        <div class="d-grid mt-2">
            <a href="tweet.html"
                class="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>
    </div>
    `);
}
export default NavigationSidebar;
