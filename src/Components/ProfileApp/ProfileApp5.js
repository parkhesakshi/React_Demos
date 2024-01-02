import React from "react";
import ProfileCard5 from "./ProfileCard5";
import SiriImage from "../../Images/siri.png";
import AlexaImage from "../../Images/alexa.png";
import CortanaImage from "../../Images/cortana.png";

const profileObjects = [
  { title: "Alexa", handle: "@alexa99", image: AlexaImage },
  {
    title: "Cortana",
    handle: "@cortana32",
    image: CortanaImage,
    offer: "10% off",
  },
  { title: "Siri", handle: "@siri01", image: SiriImage },
];

const ProfileApp5 = () => {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard5 data={profileObjects[0]} />
      <ProfileCard5 data={profileObjects[1]} />
      <ProfileCard5 data={profileObjects[2]} />
    </div>
  );
};

export default ProfileApp5;
