import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import Express from "express";

const app = Express();
const portNum = 8000;

const firebaseApp = initializeApp(firebaseConfig);  // Initialize Firebase
const database = getDatabase(firebaseApp);          // Initialize Realtime Database

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
    response.render("index", {
        success: null,
        error: null
    });
});

app.post("/send-message", async (request, response) => {
    const message = request.body.message;

    if (!message || message.trim() === "") {
        return response.render("index", {
            success: null,
            error: "Please write a message first."
        });
    }

    try {
        await push(ref(database, "messages"), {
            text: message,
            createdAt: Date.now()
        });

        response.render("index", {
            success: "Message sent to Firebase!",
            error: null
        });
    } catch (error) {
        console.log(error);

        response.render("index", {
            success: null,
            error: "Could not send message to Firebase."
        });
    }
});

app.listen(portNum, () => {
    console.log(`Application running on port: ${portNum}`);
});