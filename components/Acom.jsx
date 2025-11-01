import Button from "./Button";

export default function Acom({ changeNumber, handleClick }) {
  // console.log("isNumber", isNumber);

  return (
    <div className="bg-orange-200">
      <p>{changeNumber}</p>
      {/* <Button onSmash={handleClick}>Click Me</Button> */}
    </div>
  );
}
