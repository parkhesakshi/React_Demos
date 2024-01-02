import React from 'react'
import ProfileCard3 from './ProfileCard3'

const ProfileApp3 = () => {
    return (
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard3 title="Alexa" handle="@alexa99" />
            <ProfileCard3 title="Cortana" handle="@cortana32" offer="10% off" />
            <ProfileCard3 title="Siri" handle="@siri01" />
        </div>

    )
}

export default ProfileApp3