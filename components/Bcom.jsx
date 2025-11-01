import React from "react";
import Button from "./Button";

export default function Bcom({ changeNumber, handleClick }) {
  // const handleClick = () => {
  //   alert("the function is Hire Me");
  // };
  return (
    <div className="bg-red-200">
      <p>{changeNumber}</p>
      {/* <Button onSmash={handleClick}>Hire Me</Button> */}

      <button
        className="p-2 bg-amber-500"
        onMouseOver={() => console.log("over")}
      >
        Button
      </button>
    </div>
  );
}
