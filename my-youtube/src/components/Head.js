import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="flex space-x-3">
        <img className="h-10 w-10" alt="menu" src="menu.png" />

        <img className="h-15 w-30" alt="Home" src="youtube.png" />
      </div>
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
      <div>
        <img alt="user" src="user.png" />
      </div>
    </div>
  );
};

export default Head;
