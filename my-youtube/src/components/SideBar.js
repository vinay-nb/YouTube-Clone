import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenOpenFlag);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <div className="">
        <ul className="">
          <Link to="/">
            <li className="p-2">Home</li>
          </Link>
          <li className="p-2">Shorts</li>
          <li className="p-2">Subscriptions</li>
          <hr />
        </ul>
      </div>
      <div className="">
        <ul>
          <li className="p-2">Library</li>
          <li className="p-2">History</li>
          <li className="p-2">Your videos</li>
          <li className="p-2">Watch later</li>
          <li className="p-2">Liked videos</li>
          <hr />
        </ul>
      </div>

      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
