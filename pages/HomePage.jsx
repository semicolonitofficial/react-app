import { useState } from "react";
import Acom from "../components/Acom";
import Banner from "../components/Banner";
import Bcom from "../components/Bcom";
import NavBar from "../components/NavBar";

export default function HomePage() {
  const [isNumber, setIsNumber] = useState(0);

  const handleClick = () => {
    setIsNumber(isNumber + 1);
  };
  return (
    <div className="max-w-lg mx-auto">
      {/* <NavBar />
      <Banner /> */}
      <Acom changeNumber={isNumber} />
      <Bcom changeNumber={isNumber} handleClick={handleClick} />
    </div>
  );
}
