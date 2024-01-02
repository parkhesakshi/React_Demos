import React from 'react'

const ProfileCard3 = ({ title, handle, offer }) => {
    return (
        <div>
            <h1>Title is {title}</h1>
            <h2>Handle is {handle}</h2>
            <h2>Offer? {offer}</h2>
        </div>
    )
}

export default ProfileCard3