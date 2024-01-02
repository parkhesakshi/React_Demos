import React, { useState } from 'react'
import './Fourth.css';

//destructuring-arrays, objects-it's a shortcut for quick access
const vehicles = ['mustang', 'f-150', 'expedition'];
// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
console.log('car ' + car + ' truck ' + truck + ' suv ' + suv);
const [car2, truck2, suv2] = vehicles;
console.log('car2 ' + car2 + ' truck2 ' + truck2 + ' suv2 ' + suv2);
const [car3, , suv3] = vehicles;
console.log('car3 ' + car3 + ' suv3 ' + suv3);

const fruits = ['Apple', 'Banana', 'Watermelon', 'Kiwi', 'Dragon Fruit'];
const [, , , , f5] = fruits;
console.log('f5 ' + f5);
const [f1, , f3, , f] = fruits;
console.log('f1 ' + f1 + ' f ' + f + ' f3 ' + f3);

function getFruits() {
    return fruits;
}

const [fa, , fb, , fc] = getFruits();
console.log('fa ' + fa + ' fb ' + fb + ' fc ' + fc);


const Fourth = () => {
    //useState Hook
    //Hooks-are basically different kinds of functions
    const [data, setData] = useState();

    const btnClickHandler = (event) => {
        let element = event.target.value;
        alert('button was clicked');
        console.log('element ' + element);
        setData(data + "++");
        // setData(() => { data + "++" });

        console.log('data ' + data);
    }

    const setTextHandler = (event) => {
        let value = event.target.value;
        console.log('Text Value Entered ' + value);
        setData(value);
        console.log('data ' + data);
        // event.target.value = 25;
    }

    return (
        <div>
            <input type="text" value={data} onChange={setTextHandler} ></input>
            <button onClick={btnClickHandler}>Submit</button>
        </div>
    )
}

export default Fourth



