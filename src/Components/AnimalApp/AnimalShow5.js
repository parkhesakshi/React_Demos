import React from "react";
import bird from "../../Svg/bird.svg";
import cat from "../../Svg/cat.svg";
import cow from "../../Svg/cow.svg";
import dog from "../../Svg/dog.svg";
import gator from "../../Svg/gator.svg";
import horse from "../../Svg/horse.svg";
const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

const AnimalShow5 = ({ type }) => {
  return (
    <div>
      <img alt="animal" src={svgMap[type]} />
    </div>
  );
};

export default AnimalShow5;
