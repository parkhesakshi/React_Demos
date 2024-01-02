import React, { useState } from 'react'
import './ArrayComponent2.css';

const ArrayComponent2 = () => {
    const [arrayData, setArrayData] = useState(['Cat', 'Sat', 'Pat', 'Rat', 'Hat']);
    const [sortArrayData, setSortArrayData] = useState();
    const [arrayValue, setArrayValue] = useState();
    const [arrayIndex, setArrayIndex] = useState();

    const composeArray = arrayData.map((item, index) => {
        return <div className='array-flex-item' key={index}>
            {item}
            <div className='array-flex-subitem'>{index}</div>
        </div>;
    })

    const handleAppendText = (event) => {
        //let text = parseInt(event.target.value);
        let number = event.target.value;
        setArrayValue(number);
    }
    const handleIndexText = (event) => {
        //let index = parseInt(event.target.value);
        let index = event.target.value;
        setArrayIndex(index);
    }

    const insertElement = () => {
        //inserts at a particular index
        let updatedArray = [...arrayData];
        //deleteCount is set to 0, so it won't replace, it will insert
        updatedArray.splice(arrayIndex, 0, arrayValue);
        setArrayData(updatedArray);
        setArrayValue('');
        setArrayIndex('');
    }
    const insertFirst = () => {
        //insert as first element
        let updatedArray = [arrayValue, ...arrayData];
        setArrayData(updatedArray);
        //it's like the unshift function
        //unshift(item1,item2,item2);
        setArrayValue('');
        setArrayIndex('');
    }
    const updateElement = () => {
        //updates element at a particular index
        let updatedArray = [...arrayData];
        //deleteCount is set to 1, so it  will replace
        updatedArray.splice(arrayIndex, 1, arrayValue);
        setArrayData(updatedArray);
        setArrayValue('');
        setArrayIndex('');
    }
    const updateFirst = () => {
        //update the first element
        let updatedArray = [...arrayData];
        updatedArray.splice(0, 1, arrayValue);
        setArrayData(updatedArray);
        setArrayValue('');
        setArrayIndex('');
    }
    const updateLast = () => {
        //update the last element
        let updatedArray = [...arrayData];
        updatedArray.splice(updatedArray.length - 1, 1, arrayValue);
        setArrayData(updatedArray);
        setArrayValue('');
        setArrayIndex('');
    }
    const deleteElement = () => {
        //deletes element at a particular index
        let updatedArray = [...arrayData];
        updatedArray.splice(arrayIndex, 1);
        setArrayData(updatedArray);
        setArrayValue('');
        setArrayIndex('');
    }
    const deleteLast = () => {
        let updatedArray = [...arrayData];
        updatedArray.pop();
        setArrayData(updatedArray);
        setArrayValue('');
        setArrayIndex('');
    }
    const deleteFirst = () => {
        //There are two methods to do this
        //it's like the shift() function of arrays
        //you can use splice to implement this as well
        let updatedArray = [...arrayData];
        //updatedArray.splice();
        let updatedArray2 = [...arrayData];
        updatedArray2.shift();
        setArrayData(updatedArray2);
        setArrayValue('');
        setArrayIndex('');
    }
    const appendElement = () => {
        //appends (at the end of the array)
        let updatedArray = [...arrayData, arrayValue];
        setArrayData(updatedArray);
        setArrayValue('');
        setArrayIndex('');
    }
    const reverseArray = () => {
        //reverse array
        let updatedArray = [...arrayData];
        updatedArray.reverse();
        setArrayData(updatedArray);
        setArrayValue('');
        setArrayIndex('');
    }

    const sortArray = () => {
        //reverse array
        let updatedArray = [...arrayData];
        updatedArray.sort();
        setArrayData(updatedArray);
        setArrayValue('');
        setArrayIndex('');
    }

    const resetArray = () => {
        setArrayData([1, 2, 3, 4, 5]);
    }
    return (
        <div>
            <div className="array-flex-container">
                {composeArray}
            </div>
            <div className='control-flex-container'>
                Array Manipulation Functions:
                <div className='control-flex-item-inputs'>
                    <label>Enter Value</label>
                    <input type="text" value={arrayValue} onChange={handleAppendText} ></input>
                    <label>Enter Index</label>
                    <input type="text" value={arrayIndex} onChange={handleIndexText} ></input>
                </div>
                <div className='control-flex-item-buttons'>
                    <div>
                        <button onClick={insertFirst}>Insert (at) First (unshift)</button>
                    </div>
                    <div>
                        <button onClick={insertElement}>Insert (at) Index (splice)</button>
                    </div>
                    <div>
                        <button onClick={appendElement}>Append (at)Last (push)</button>
                    </div>
                    <div>
                        <button onClick={updateFirst}>Update First (splice)</button>
                    </div>
                    <div>
                        <button onClick={updateElement}>Update (at) Index (splice)</button>
                    </div>
                    <div>
                        <button onClick={updateLast}>Update Last (splice)</button>
                    </div>
                    <div>
                        <button onClick={deleteFirst}>Delete First (shift)</button>
                    </div>
                    <div>
                        <button onClick={deleteElement}>Delete (at) Index (splice)</button>
                    </div>
                    <div>
                        <button onClick={deleteLast}>Delete Last (pop)</button>
                    </div>
                    <div>
                        <button onClick={sortArray}>Sort (sort)</button>
                    </div>
                    <div>
                        <button onClick={reverseArray}>Reverse (reverse)</button>
                    </div>
                    <div>
                        <button onClick={resetArray}>Reset</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ArrayComponent2

// Array.prototype.unshift()-
//The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
//Array.prototype.shift()
//The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
//Array.prototype.reverse()
//The reverse() method of Array instances reverses an array in place and returns the reference to the same array
//Array.prototype.splice()
//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//Array.prototype.slice()
//The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. 
//The original array will not be modified.
//Array.prototype.pop()
//The pop() method of Array instances removes the last element from an array and returns that element. 
//This method changes the length of the array.

//splice is a mutating method
//splice(start)
//splice(start, deleteCount)
//splice(start, deleteCount, item1)
//splice(start, deleteCount, item1, item2)
//splice(start, deleteCount, item1, item2, /* …, */ itemN)
//Return value
//An array containing the deleted elements.
//If only one element is removed, an array of one element is returned.
//If no elements are removed, an empty array is returned.
//start-
//Negative index counts back from the end of the array — 
//if start < 0, start + array.length is used.
//If start < -array.length, 0 is used.
//If start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
//If start is omitted (and splice() is called with no arguments), nothing is deleted. This is different from passing undefined, which is converted to 0.
//delete-
//deleteCount
//An integer indicating the number of elements in the array to remove from start.




