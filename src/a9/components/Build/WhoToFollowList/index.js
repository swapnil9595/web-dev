import React, { useEffect } from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import { useSelector, useDispatch } from "react-redux";
import { findAllWho } from "../../../services/who-service";

const WhoToFollowList = () => {
  const dispatch = useDispatch();
  const who = useSelector((state) => state.who);

  useEffect(() => {
    findAllWho(dispatch);
  });

  return (
    <ul className="list-group">
      <li className="list-group-item fw-bold bg-secondary bg-opacity-25 text-white">
        Who to follow
      </li>
      <li className="list-group-item bg-secondary bg-opacity-25 text-white">
        {who.map((who) => {
          return <WhoToFollowListItem item={who} />;
        })}
      </li>
    </ul>
  );
};

export default WhoToFollowList;
