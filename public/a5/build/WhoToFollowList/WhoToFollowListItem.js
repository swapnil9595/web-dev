const WhoToFollowListItem = (item) => {
    return(`
        <li class = "list-group-item">
            <div class = "row">
                <div class = "col-2 col-xl-3">
                    <img src = "${item.avatarIcon}" class= " wd-image-circular" />
                </div>
                <div class = "col-6">
                    <span class = "fw-bold">${item.userName}</span> <i class="fas fa-check-circle"></i>
                    <br>@${item.handle}
                </div>
                <div class = "col-3">
                    <button class ="btn btn-primary rounded-pill "> Follow</button>
                </div>
            </div> 
        </li>
    `);
}
export default WhoToFollowListItem;
