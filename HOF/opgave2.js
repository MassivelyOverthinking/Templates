
function lessThan(x, y) {
    if (typeof x !== "number") throw TypeError("X must be of Type: Number");
    if (typeof y !== "number") throw TypeError("Y must be of Type: Number");
    console.log(`X is Type: ${typeof x}`);
    console.log(`Y is Type: ${typeof y}`);

    return x < y
}

function lowestNum(array, lessThan) {
    if (!Array.isArray(array)) throw TypeError("Array must be of Type: Array");

    const result = array.reduce((current, min) => {
        return lessThan(current, min) ? current : min
    });
    
    return result
}

function smallestString(array, lowestNum) {
    if (!Array.isArray(array)) throw TypeError("Array must be of Type: Array");
    // if (!(array instanceof Array)) throw TypeError("Array must be of Type: Array");
    if (typeof lowestNum !== "function") throw TypeError("LowestNum must be of Type: Function");

    const stringLengths = array.map(str => {
        if (typeof str !== "string") throw TypeError("Array must only contain strings");
        console.log(`Str is Type: ${typeof str}`);

        return str.length;
    });

    const smallestLength = lowestNum(stringLengths, lessThan);

    const result = array.find(str => str.length === smallestLength);

    return result;
}

const testArray = ["Volkswagen", "Maserati", "Opel", "Honda", "Toyota"];
const failArray = ["Volkswagen", "Maserati", "Opel", 5, "Toyota"];
const result1 = smallestString(testArray, lowestNum);
// const result2 = smallestString(failArray, lowestNum);

console.log(result1)
// console.log(result2)

//=======================================================================
// JavaScript Type Conversion
//=======================================================================

// "Typeof"         ==> Checks for primitive datatypes.
// "Instanceof"     ==> Checks if the object was created using related Constructor-function.

// "==="            ==> Strict comparison. Checks both value and datatype without conversion.
// "=="             ==> Loose comparison. Checks both values after type conversion.