import { useState } from "react";
import "./Card.css";

const Card = ({ content, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
   onClick(isClicked)
   setIsClicked(true)
  }
  return (
    <button className="card" onClick={handleClick}>
      {content}
    </button>
  );
};

export default Card;
