import express, { request, response } from "express"

const app = express();
const portNum = 8000;

let workers = [
    {
        name: "Peter",
        age: 22,
        department: "IT"
    },
    {
        name: "Mary",
        age: 30,
        department: "IT"
    },
    {
        name: "Benjamin",
        age: 40,
        department: "HR"
    },
    {
        name: "Kraven",
        age: 32,
        department: "Financials"
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
    response.redirect("/workers")
});

app.get("/workers", (request, response) => {
    response.render("index", {
        workers: workers
    })
});

app.post("/workers/:name", async (request, response) => {
    const workerName = request.params.name;

    try {
        const deleteResponse = await fetch(
            `http://localhost:${portNum}/workers/${workerName}`,
            {
                method: "DELETE"
            }
        );

        if (!deleteResponse.ok) {
            return response.status(400).send("Could not delete worker");
        }

        response.redirect("/workers");
    } catch (error) {
        console.error("Internal delete request failed:", error);

        response.status(500).send("Internal server error");
    }
});

app.delete("/workers/:name", (request, response) => {
    const workerName = request.params.name;
    console.log(`Worker to delete: ${workerName}`)

    const workerExists = workers.some((worker) => {
        return worker.name.toLowerCase() === workerName.toLowerCase();
    });

    console.log(`Worker exists: ${workerExists}`)


    if (!workerExists) {
        return response.status(404).json({
            error: "Worker not found"
        });
    }

    workers = workers.filter((worker) => {
        return worker.name.toLowerCase() !== workerName.toLowerCase();
    });

    response.status(204).send();
});

// Catch ALL incorrect endpoint requests.
app.use((request, response, next) => {
    response.status(404).send("Error - Webpage not found!")
})

// App configuration
app.listen(8000, () => {
    console.log(`Chat project is now running on port: ${portNum} 🔥`)
})