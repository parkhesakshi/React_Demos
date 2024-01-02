import React from "react";
import { useState } from "react";
import bird from "../Svg/bird.svg";
import cat from "../Svg/cat.svg";
import cow from "../Svg/cow.svg";
import dog from "../Svg/dog.svg";
import gator from "../Svg/gator.svg";
import heart from "../Svg/heart.svg";
import horse from "../Svg/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};
const AnimalShow6 = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={handleClick}>
      <img alt="animal" src={svgMap[type]} />
      <img alt="heart" src={heart} style={{ width: 10 + 10 * clicks + "px" }} />
    </div>
  );
};

export default AnimalShow6;
