import React from 'react'

const ProfileCard2 = (props) => {
    return (
        <div>
            <h1>Title is {props.title}</h1>
            <h2>Handle is {props.handle}</h2>
            <h3>Offer?: {props.offer}</h3>
            {/* <h3>Offer?: {props.offer}</h3> */}
            {/* Conditional Rendering */}
            <h3>{props.offer ? props.offer : "No offer"}</h3>
        </div>
    )
}

export default ProfileCard2