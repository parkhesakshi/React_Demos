import React from "react";
import ProfileCard7 from "./ProfileCard7";
import SiriImage from "../../Images/siri.png";
import AlexaImage from "../../Images/alexa.png";
import CortanaImage from "../../Images/cortana.png";

const profileObjects = [
  { title: "Alexa", handle: "@alexa99", image: AlexaImage },
  { title: "Cortana", handle: "@cortana32", image: CortanaImage },
  { title: "Siri", handle: "@siri01", image: SiriImage },
];
// , offer: "10% off"
const ProfileApp7 = () => {
  let myList = profileObjects.map((item, index) => (
    <ProfileCard7 key={index} data={item} />
  ));
  myList = profileObjects.map((item, index) => {
    console.log(item);
    return <ProfileCard7 key={index} data={item} />;
  });

  return (
    <div>
      <div>Personal Digital Assistants</div>
      <div>{myList}</div>
    </div>
  );
};

export default ProfileApp7;
