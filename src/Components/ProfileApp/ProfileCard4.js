import React from 'react'

const ProfileCard4 = (props) => {
    let { title, handle, offer } = props.data;
    return (
        <div>
            <h1>Title is {props.data.title} and {title}</h1>
            <h2>Handle is {props.data.handle} and {handle}</h2>
            <h2>Offer? {props.data.offer} and {offer}</h2>
        </div>
    )
}

export default ProfileCard4