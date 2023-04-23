import React from "react";

function Button({name}) {
  return (
    <>
      <button className="px-5 py-2 m-2 bg-gray-300 rounded-lg">{name}</button>
    </>
  );
}

export default Button;
