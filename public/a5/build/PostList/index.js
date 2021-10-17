import PostSummaryItem from "./PostItem.js";
import posts from "./Posts.js"
const PostSummaryList  = () => {
    return(`
        <ul class="list-group">
            <li class = "list-group-item">
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