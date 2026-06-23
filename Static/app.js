import express, { request, response } from "express"

const app = express();
const portNum = 8000;

const userlist = [
    { name: "Peter", age: 25, department: "IT"},
    { name: "Mary", age: 26, department: "IT"},
    { name: "Ben", age: 54, department: "HR"},
    { name: "Ozzy", age: 40, department: "Payments"},
]

// Middleware
app.use(express.json());            // Middleware to properly receive and parse JSON-formatted data.
app.use(express.static('assets'))   // Middleware to properly utilise internal Assets-folder
app.use(express.urlencoded())       // Middleware to properly receive and parse URL-formatted data.

// Default route => Check if user is currently stored in Session.
app.get('/', (request, response) => {
    response.redirect("/users")
});

app.get("/users", (request, response) => {
    response.render("index", {
        users: userlist
    })
})

app.get("/users/list", (request, response) => {
    response.json({
        users: userlist
    });
});

app.post("/users/create", (request, response) => {
    const { name, age, department } = request.body

    const newUser = {
        name: name,
        age: Number(age),
        department: department
    };

    userlist.push(newUser);

    response.status(201).json({
        message: "User created",
        user: newUser,
        users: userlist
    });
})

// Catch ALL incorrect endpoint requests.
app.use((request, response, next) => {
    response.status(404).send("Error - Webpage not found!")
})

// App configuration
app.listen(8000, () => {
    console.log(`Chat project is now running on port: ${portNum} 🔥`)
})