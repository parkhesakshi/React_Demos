import React, { useState } from 'react'
import { GoChevronDown } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";


const IndependentAccordian = () => {

    const [collapseMain1, setCollapseMain1] = useState(false);
    const [collapseMain2, setCollapseMain2] = useState(false);
    const [collapseMain3, setCollapseMain3] = useState(false);

    const handleCollapseMain1 = () => {
        //setCollapseMain1(!collapseMain1);//This is not reliable
        setCollapseMain1((current) => !current);
    }
    const handleCollapseMain2 = () => {
        setCollapseMain2((current) => !current);
    }
    const handleCollapseMain3 = () => {
        setCollapseMain3((current) => !current);
    }

    return (
        <div>
            <div className='main1'>
                <div className='main1-a'>
                    <label>Coding</label>
                    <button onClick={handleCollapseMain1}>
                        {collapseMain1 ? <GoChevronDown /> : <GoChevronRight />}
                    </button>
                </div>
                <div className='main1-b'>
                    {collapseMain1 && <div>
                        <h1>This is the body of Coding Section</h1>
                        <p>This para will toggle between visible and invisible</p>
                    </div>}
                </div>
            </div>
            <div className='main2'>
                <div className='main2-a'>
                    <label>Testing</label>
                    <button onClick={handleCollapseMain2}>
                        {collapseMain2 ? <GoChevronDown /> : <GoChevronRight />}
                    </button>
                </div>
                <div className='main2-b'>
                    {/* Here we will do conditional rendering */}
                    {collapseMain2 && <div>
                        <h1>This is the body of Testing Section</h1>
                        <p>This para will toggle between visible and invisible</p>
                    </div>}
                </div>
            </div>
            <div className='main3'>
                <div className='main3-a'>
                    <label>Deployment</label>
                    <button onClick={handleCollapseMain3}>
                        {collapseMain3 ? <GoChevronDown /> : <GoChevronRight />}
                    </button>
                </div>
                <div className='main3-b'>
                    {/* Here we will do conditional rendering */}
                    {collapseMain3 && <div>
                        <h1>This is the body of Deployment Section</h1>
                        <p>This para will toggle between visible and invisible</p>
                    </div>}
                </div>
            </div>

        </div>
    )
}

export default IndependentAccordian

// Conditional Rendering
