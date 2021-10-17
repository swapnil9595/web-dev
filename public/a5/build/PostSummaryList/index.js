import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./Posts.js"
const PostSummaryList  = () => {
    return(`
        <ul class="list-group">
            <li class = "list-group-item bg-secondary bg-opacity-25 text-white">
                ${
                    posts.map(post => {
                        return(PostSummaryItem(post));
                    }).join('')
                }
            </li>
        </ul>
    `);
}

export default PostSummaryList ;