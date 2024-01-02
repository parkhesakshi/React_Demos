import React from 'react'
import './First.css';
// rafce
const First = () => {
    function handleClickFunction() {
        alert('The button was clicked');
    }
    return (
        <div><button onClick={handleClickFunction}>Click Me</button></div>
    )
}

export default First