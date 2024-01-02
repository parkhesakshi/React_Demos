import React from 'react'
import ProfileCard2 from './ProfileCard2'

const ProfileApp2 = () => {
    return (
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard2 title="Alexa" handle="@alexa99" />
            <ProfileCard2 title="Cortana" handle="@cortana32" offer="10% off" />
            <ProfileCard2 title="Siri" handle="@siri01" />
        </div>

    )
}

export default ProfileApp2