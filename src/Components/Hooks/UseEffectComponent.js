import React, { useState, useEffect } from 'react'

const UseEffectComponent = () => {
    const [firstCount, setFirstCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);

    //useEffect is also called side-effect
    //component rendering
    //its hook, how many times do you want it to be called?
    //times is decided based on something called as dependency
    //the dependencies are defined in the []
    //but the square bracket can also be skipped
    //useEffect(function it has to call,when/how many times it has to called);

    useEffect(() => {
        console.log('This function will be called only once after 1st render');
    }, []);

    //1st give empty square bracket-this useEffect will be called 
    //only once after 1st render
    useEffect(() => {
        console.log('This will be called after first render');
        console.log('also after every render');
    });
    //2nd leave/skip the dependency []
    //called after 1st render
    //called after every re-render

    useEffect(() => {
        console.log('called after 1st render');
        console.log('every time firstCount changes');
    }, [firstCount]);

    useEffect(() => {
        console.log('called after 1st render');
        console.log('every time secondCount changes');
    }, [secondCount]);

    useEffect(() => {
        console.log('called after 1st render');
        console.log('every time firstCount and secondCount changes');
    }, [firstCount, secondCount]);
    //This will be called after 1st render
    //and only when the specified dependencies change 

    //add two button
    //and two span to display the value of first count and second count
    //increment firstCount
    //increment secondCount

    return (
        <div>UseEffectComponent</div>
    )
}

export default UseEffectComponent