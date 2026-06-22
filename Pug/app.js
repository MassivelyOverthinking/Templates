import express, { request, response } from "express"
import User from "./user.js"

const app = express();
const portNum = 8000;

let userList = [
    new User("John", "Doe", 25),
    new User("Mary", "Jane", 32),
    new User("Peter", "Parker", 18),
    new User("Bruce", "Wayne", 42),
    new User("Hank", "Pym", 50),
    new User("Diana", "Prince", 28),
    new User("Oliver", "Queen", 25),
]

// View Enginer => Setup
app.set('view engine', 'pug')

// Middleware
app.use(express.json());            // Middleware to properly receive and parse JSON-formatted data.
app.use(express.static('assets'))   // Middleware to properly utilise internal Assets-folder
app.use(express.urlencoded())       // Middleware to properly receive and parse URL-formatted data.

// Default route => Check if user is currently stored in Session.
app.get('/', (request, response) => {
    response.redirect("/users")
});

app.get("/users", (request, response) => {
    response.render("main", {
        users: userList
    })
});

app.post("/users/delete/:id", (request, response) => {
    const id = Number(request.params.id);
    console.log(`User to delete: ${id}`)

    userList = userList.filter(user => user.getId() !== id);

    response.redirect("/users")
})

// Catch ALL incorrect endpoint requests.
app.use((request, response, next) => {
    response.status(404).send("Error - Webpage not found!")
})

// App configuration
app.listen(8000, () => {
    console.log(`Chat project is now running on port: ${portNum} 🔥`)
})