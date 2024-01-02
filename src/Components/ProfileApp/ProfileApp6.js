import React from "react";
import ProfileCard6 from "./ProfileCard6";
import SiriImage from "../../Images/siri.png";
import AlexaImage from "../../Images/alexa.png";
import CortanaImage from "../../Images/cortana.png";

const profileObjects = [
  { title: "Alexa", handle: "@alexa99", image: AlexaImage },
  { title: "Cortana", handle: "@cortana32", image: CortanaImage },
  { title: "Siri", handle: "@siri01", image: SiriImage },
];
// , offer: "10% off"
const ProfileApp6 = () => {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard6
        title={profileObjects[0].title}
        handle={profileObjects[0].handle}
        image={profileObjects[0].image}
      />
    </div>
  );
};

export default ProfileApp6;
