import express, { request, response } from "express"
import { User } from "./user.js";
import { comparePassword } from "./utility.js";

const app = express();
const portNum = 8000;

let userlist = [
    await User.create("RandomGuy", "qwerty", "Peter", "Parker"),
    await User.create("RandomGal", "asdfg", "Mary", "Jane"),
    await User.create("RandomPerson", "zxcvb", "Miles", "Morales"),
    await User.create("RandomDog", "woof", "Krypto", "Wonderdog"),
    await User.create("RandomHero", "hero", "Diana", "Rpince"),
]

// View Enginer => Setup
app.set('view engine', 'pug')

// Middleware
app.use(express.json());            // Middleware to properly receive and parse JSON-formatted data.
app.use(express.static('assets'))   // Middleware to properly utilise internal Assets-folder
app.use(express.urlencoded())       // Middleware to properly receive and parse URL-formatted data.

// Default route => Check if user is currently stored in Session.
app.get('/', (request, response) => {
    response.redirect("/login")
});

app.get("/login", (request, response) => {
    response.render("index", {
        users: userlist
    })
})

app.post("/login", async (request, response) => {
    const { username, password } = request.body

    const foundUser = userlist.find(user => user.getUsername() === username);

    if (!foundUser) {
        response.status(400).send("Could not find user!")
    };

    const passwordsMatched = await comparePassword(password, foundUser.getPassword());

    if (!passwordsMatched) {
        response.status(400).send("Passwords did not match!")
    }

    response.send(JSON.stringify(foundUser))
})

// Catch ALL incorrect endpoint requests.
app.use((request, response, next) => {
    response.status(404).send("Error - Webpage not found!")
})

// App configuration
app.listen(8000, () => {
    console.log(`Chat project is now running on port: ${portNum} 🔥`)
})