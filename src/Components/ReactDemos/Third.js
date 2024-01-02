import React, { useState } from 'react'

let on = true;

const Third = () => {
    const [data, setData] = useState('On');
    const clickEventHandler1 = (event) => {
        on = !on;
        on ? setData('Off') : setData('On');
    }

    return (
        <div class="secondDiv">
            <button className="btn1" onClick={clickEventHandler1}>{data}</button>
        </div>
    )
}

export default Third