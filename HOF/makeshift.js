function myMap(array, callback) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        const newValue = callback(array[i]);
        newArray.push(newValue);
    }

    return newArray;
}

let testArray = [4, 6, 8, 9, 3, 3];

Array.prototype.customMap = function customMap(callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        const newValue = callback(this[i], this);
        newArray.push(newValue);
    }

    return newArray;
}

const results1 = myMap(testArray, (num) => num * 2);
const results2 = testArray.customMap(num => num * 2);
console.log(results1)
console.log(results2)