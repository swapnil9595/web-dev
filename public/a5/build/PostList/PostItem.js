const PostItem = (post) => {
    if(post.heading || post.content || post.link){
        return(`
            <li class = "list-group-item">
                <div class="row ">
                    <div class="col-1 ps-1 ">
                        <div>
                            <img src = "${post.profile}" class= " wd-image-circular" >
                        </div>
                    </div>
                    <div class=" col-11 ">
                        <div class=" fw-bold mt-0 mb-0">
                        ${post.userName} <i class="fas fa-check-circle"></i>
                        <span class="text-muted mb-0">@${post.handle}</span>
                        <span class="text-muted fw-normal"> &middot ${post.time}</span>
                        <span class="float-end text-secondary">
                            &#8226&#8226&#8226
                        </span>
                        </div>
                        <p class=" mt-0">${post.title}</p>
                        <div class= " border border-secondary rounded-top">
                            <img src = "${post.image}" class= "img-fluid border border-secondary rounded-top" >
                        </div>
                        <div class= "border  border-secondary rounded-bottom">
                            <p class= "ms-2 mt-2">
                                ${post.heading}
                            </p>
                            <p class = "ms-2 text-muted " >
                                ${post.content}
                            </p>
                            <div class = "ms-2 text-muted " >
                                ${post.link}
                            </div>
                        </div>
                        <div class= " mt-2">
                            <span class ="me-5"><a  class = "second" href="#"><i class="far fa-regular fa-comment"></i><span class ="ms-2">${post.comments}</span></a></span>
                            <span class ="me-5 ms-5"><a  class = "second" href="#"><i class="fas fa-solid fa-retweet"></i><span class ="ms-2">${post.retweet}</span></a></span>
                            <span class ="me-5 ms-5"><a  class = "first" href="#"><i class="far fa-regular fa-heart"></i><span class ="ms-2">${post.likes}</span></a></span>
                            <span class ="me-5 ms-5"><a  class = "second" href="#"><i class="fas fa-share-square"></i></a></span>
                        </div>
                    </div>
                </div>
            </li>
        `);
    } else {
        return(`
            <li class = "list-group-item">
                <div class="row ">
                    <div class="col-1 ps-1 ">
                        <div>
                            <img src = "${post.profile}" class= " wd-image-circular" >
                        </div>
                    </div>
                    <div class=" col-11 ">
                        <div class=" fw-bold mt-0 mb-0">
                        ${post.userName} <i class="fas fa-check-circle"></i>
                        <span class="text-muted mb-0">@${post.handle}</span>
                        <span class="text-muted fw-normal"> &middot ${post.time}</span>
                        <span class="float-end text-secondary">
                            &#8226&#8226&#8226
                        </span>
                        </div>
                        <p class=" mt-0">${post.title}</p>
                        <div class= " border border-secondary rounded-top">
                            <img src = "${post.image}" class= "img-fluid border border-secondary rounded-top" >
                        </div>
                        <div class= " mt-2">
                            <span class ="me-5"><a  class = "second" href="#"><i class="far fa-regular fa-comment"></i><span class ="ms-2">${post.comments}</span></a></span>
                            <span class ="me-5 ms-5"><a  class = "second" href="#"><i class="fas fa-solid fa-retweet"></i><span class ="ms-2">${post.retweet}</span></a></span>
                            <span class ="me-5 ms-5"><a  class = "first" href="#"><i class="far fa-regular fa-heart"></i><span class ="ms-2">${post.likes}</span></a></span>
                            <span class ="me-5 ms-5"><a  class = "second" href="#"><i class="fas fa-share-square"></i></a></span>
                        </div>
                    </div>
                </div>
            </li>
        `);

    }
}
export default PostItem;