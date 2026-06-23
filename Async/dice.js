function throwDice() {
    return new Promise((resolve, reject) => {
        console.log("Throwing Dice...")
        setTimeout(() => {
            const number = Math.ceil(Math.random() * 6);

            resolve(number);
        }, 1000);
    });
}

async function throw2Dice() {
    const [a, b] = await Promise.all([throwDice(), throwDice()]);
    console.log(a)
    console.log(b)

    if (a < b) {
        console.log(`Resolved: ${a} is less then ${b}`)
    } else if (a > b) {
        console.log(`Resolved: ${b} is less then ${a}`)
    } else {
        console.log(`both values are euqal: ${a}`)
    }
}

async function throwXDice(num) {
    if (typeof num !== "number") {
        throw new TypeError("Num must be of Type: Number");
    }

    if (!Number.isInteger(num) || num < 1) {
        throw new RangeError("Num must be a positive integer");
    }

    const array = Array(6).fill(0);

    //const throws = await Promise.all(
    //    Array.from({ length: num }, () => throwDice())
    //);

    const promises = [];

    for (let i = 0; i < num; i++) {
        promises.push(throwDice());
    }

    const throws = await Promise.all(promises)

    throws.forEach(eyes => {
        array[eyes - 1]++;
    });

    return array;
}

const diceArray = await throwXDice(10);
console.log(`Number of 1s: ${diceArray[0]}`)
console.log(`Number of 2s: ${diceArray[1]}`)
console.log(`Number of 3s: ${diceArray[2]}`)
console.log(`Number of 4s: ${diceArray[3]}`)
console.log(`Number of 5s: ${diceArray[4]}`)
console.log(`Number of 6s: ${diceArray[5]}`)