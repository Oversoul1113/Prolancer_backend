import express from "express";

import cors from "cors";

import Router from "./routes/route.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use(Router);

app.listen(8080,() => {
    console.log("Listening in port 8080")
})
