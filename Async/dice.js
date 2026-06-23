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

    const throws = await Promise.all(
        Array.from({ length: num }, () => throwDice())
    );

    throws.forEach(eyes => {
        array[eyes - 1]++;
    });

    console.log(array);

    return array;
}

await throwXDice(10);