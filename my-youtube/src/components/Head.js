import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Head = () => {
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img className="h-10 w-10" alt="menu" src="menu.png" />

        <img className="h-15 w-30 mx-2" alt="Home" src="youtube.png" />
      </div>
      <div className="col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border px-5 py-2 rounded-r-full bg-gray-100">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="col-span-1">
        <img alt="user" src="user.png" />
      </div>
    </div>
  );
};

export default Head;
