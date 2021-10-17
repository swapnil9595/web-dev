import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <li class = "list-group-item fw-bold bg-secondary bg-opacity-25 text-white">Who to follow</li>
                <li class = "list-group-item bg-secondary bg-opacity-25 text-white">
                    ${
                        who.map(list => {
                            return(WhoToFollowListItem(list));
                        }).join('')
                    }
                </li>
            </ul>
`); }

export default WhoToFollowList;