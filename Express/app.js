import Express from "express";
import express from "express";

const portNum = 8000;
const app = Express();

// Serve static files from the public folder
app.use(express.static("assets"));

app.listen(portNum, () => {
  console.log(`Server running at on port ${portNum}`);
});