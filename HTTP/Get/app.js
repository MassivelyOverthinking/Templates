import express, { request, response } from "express"

const app = express();
const portNum = 8000;

const lessons = [
    {
        name: "Biology",
        description: "Nature and Stuff",
        students: ["Simon", "Peter", "Mary"]
    },
    {
        name: "Chemistry",
        description: "Chemicals and Stuff",
        students: ["John", "Torben", "Benn"]
    },
    {
        name: "Programming",
        description: "Computers and Stuff",
        students: ["Esben", "Kej", "Margrethe"]
    }
]

// View Enginer => Setup
app.set('view engine', 'pug')

// Middleware
app.use(express.json());            // Middleware to properly receive and parse JSON-formatted data.
app.use(express.static('assets'))   // Middleware to properly utilise internal Assets-folder
app.use(express.urlencoded())       // Middleware to properly receive and parse URL-formatted data.

// Default route => Check if user is currently stored in Session.
app.get('/', (request, response) => {
    response.redirect("/lessons")
});

app.get("/lessons", (request, response) => {
    response.render("index", {
        classes: lessons
    })
});

// Catch ALL incorrect endpoint requests.
app.use((request, response, next) => {
    response.status(404).send("Error - Webpage not found!")
})

// App configuration
app.listen(8000, () => {
    console.log(`Chat project is now running on port: ${portNum} 🔥`)
})