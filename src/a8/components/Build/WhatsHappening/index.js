import React, { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import {
  postNewTweet,
  fetchAllTweets,
} from "../../../../services/twitterService";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const tweetClickHandler = () => {
    postNewTweet(dispatch, {
      tweet: whatsHappening,
    });
  };
  return (
    <div className="row">
      <div className="col-1">
        <img src="../../../images/elon.jpeg" className=" wd-image-circular" />
      </div>
      <div className="col-11">
        <textarea
          value={whatsHappening}
          onChange={(event) => setWhatsHappening(event.target.value)}
          class="wd-textarea"
          placeholder="What's Happening?"
        ></textarea>
        <i class="far fa-image fa-lg wd-what-icons"></i>
        <i class="fas fa-chart-line fa-lg wd-what-icons"></i>
        <i class="far fa-smile fa-lg wd-what-icons"></i>
        <i class="far fa-calendar fa-lg wd-what-icons"></i>

        <button
          onClick={tweetClickHandler}
          class="btn btn-primary btn-block rounded-pill wd-tweet-btn"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};
export default WhatsHappening;
