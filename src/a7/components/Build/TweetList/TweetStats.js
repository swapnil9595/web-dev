import {useDispatch} from "react-redux";
import './tweet.css';

const TweetStats = ({tweet}) => {
    console.log(tweet);
    const dispatch = useDispatch();
    const likeClickHandler = () => {
        dispatch({type: 'like-tweet', tweet});
    };
    return (
        <div className="row mt-2">
            <div className="col-3">
                <p><i class="far fa-comment"></i> 235</p>
            </div>
        
            <div className="col-3">
                <p><i class="fas fa-retweet"></i> 122</p>
            </div>

            <div className="col-3"
                onClick={likeClickHandler}>
                {
                    tweet.liked && <i className="fas fa-heart me-2"
                                style={{color: tweet.liked ? "red": "white"}}></i>
                }
                {
                    !tweet.liked && <i className="far fa-heart me-2"></i>
                }
                {tweet.stats.likes}
            </div>

            <div className="col-3">
                <i class="far fa-share-square"></i>
            </div>
        </div>
 
    );
}
export default TweetStats;
