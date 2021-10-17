const PostSummaryItem = (post) => {
    return(`
        <li class = "list-group-item">
            <div class="row ms-2">
                <div class="col-9">
                    <p class="text-muted mt-2 mb-0">${post.topic}</p>
                    <p class="fw-bold mt-0 mb-0">
                    ${post.userName} <i class="fas fa-check-circle"></i>
                    <span class="text-muted fw-normal"> - ${post.time}</span>
                    </p>
                    <p class="fw-bold mt-0">${post.title}</p>
                </div>
                <div class="col-3">
                    <img src = "${post.image}" class="mb-2 mt-2 pe-2 img-fluid rounded " >
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;