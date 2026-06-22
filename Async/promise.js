const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("The operation worked");
    } else {
        reject("The operation failed");
    }
});

myPromise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Promise finished");
    });

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                name: "John Doe",
                age: 20
            };

            resolve(user);
        }, 1000);
    });
}

getUser()
    .then(user => {
        console.log(user.name);
    })
    .catch(error => {
        console.log(error);
    });