import React, { useState } from 'react'

const Second = () => {
    const [data, setData] = useState('Mouse Move');
    const mouseEventHandler1 = (event) => {
        setData('Mouse Over');
    }
    const mouseEventHandler2 = (event) => {
        setData('Mouse Ran Out');
    }
    return (
        <div class="secondDiv">
            <button className="btn1" onMouseOver={mouseEventHandler1} onMouseOut={mouseEventHandler2}>{data}</button>
        </div>
    )
}

export default Second