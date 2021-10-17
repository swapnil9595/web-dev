import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div>
            <div class="row">
                <div class="col-11">
                    <div class="position-relative">
                        <span class="wd-search-icon"><i class="fas fa-search"></i></span>
                        <input type="text" class=" form-control rounded-pill " style = "padding-left: 30px;" placeholder="Search Twitter">
                    </div>
                </div>
                <div class="col-1">
                    <i class="fas fa-cog fa-2x wd-setting-color"></i>
                </div>
           </div>
           <ul class="nav mt-2 mb-2 nav-tabs">
                <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-inline">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <div class="position-relative">
                <img class="img-fluid mt-2 wd-centre-image" src="../../../images/spacex.jpeg"/>
                <span class="wd-bottom-left">SpaceX's Starship</span>
            </div>
            <div>
                ${PostSummaryList()}
            </div>
        </div>
    `);
}

export default ExploreComponent;
