import React from 'react'

//Destructuring Objects:
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}

// old way
function myVehicle1(vehicle) {
    const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
    console.log(message);
}
myVehicle1(vehicleOne);

//With destructuring:
//new way
const { model, color } = vehicleOne;
console.log('model ' + model + ' color ' + color);
//new way
function myVehicle2({ type, color, brand, model }) {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    console.log(message);
}
myVehicle2(vehicleOne);

//Spread Operator:
//spread with arrays-
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);
//The spread operator is often used in combination with destructuring.


//spread with objects-
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}
const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }
console.log(myUpdatedVehicle);

console.log("Create a new array by performing a function on each array element:");
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunctionMap1);
function myFunctionMap1(value, index, array) {
    return value * 2;
}
console.log("number1 " + numbers1);
console.log("number2 " + numbers2);
function myFunctionMap2(value) {
    return value * 2;
}
const numbers3 = numbers1.map(myFunctionMap2);
console.log("number1 " + numbers1);
console.log("number3 " + numbers3);

const Fifth = () => {
    const myArray = ['apple', 'banana', 'orange'];
    const myList = myArray.map((item, index) => <p id={index}>{item}</p>)

    return (
        <div><ol>{myList}</ol></div>
    )
}




export default Fifth