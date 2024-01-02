import React from 'react'

const AnimalApp2 = () => {
    const handleClick = () => {
        console.log('Button was clicked!');
    };
    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
        </div>
    );
}

export default AnimalApp2