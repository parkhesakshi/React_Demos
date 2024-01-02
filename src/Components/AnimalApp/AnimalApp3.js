import React, { useState } from 'react'

const AnimalApp3 = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>Number of animals: {count}</div>
        </div>
    );
}

export default AnimalApp3