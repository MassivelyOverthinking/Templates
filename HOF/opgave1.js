

let stringArray = '[{"Name": "John Doe", "Age": 20, "Current": 50.5, "Before": 114.6}, {"Name": "Mary Jane", "Age": 24, "Current": 65.1, "Before": 90}, {"Name": "Peter Parker", "Age": 31, "Current": 70.6, "Before": 65}]';

let JSONString = JSON.parse(stringArray)

const namesList = JSONString.map(person => person.Name);

const weightList = JSONString.filter(person => {
    return person.Before > person.Current
});

const average1 = weightList.reduce((sum, person) => {
    return sum + (person.Before - person.Current)
}, 0) / weightList.length;

// Method Chaining:
const average2 = JSONString.filter(person => {
    return person.Before > person.Current
})
.reduce((sum, person) => {
    return sum + (person.Before - person.Current)
}, 0) / weightList.length;

// Complete Inside:
const result = JSONString.reduce((acc, person, index, array) => {
    acc.names.push(person.Name);

    const loss = person.Before - person.Current;

    if (loss > 0) {
        acc.peopleWhoLostWeight.push(person);
        acc.totalWeightLoss += loss;
        acc.weightLossCount++;
    }

    acc.averageWeightLoss = acc.totalWeightLoss / acc.weightLossCount;

    return acc;
}, {
    names: [],
    peopleWhoLostWeight: [],
    totalWeightLoss: 0,
    weightLossCount: 0,
    averageWeightLoss: 0
});

console.log(JSONString);
console.log(namesList);
console.log(weightList);
console.log(average1);
console.log(average2);
console.log(result);