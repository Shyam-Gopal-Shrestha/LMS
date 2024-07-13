import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectToMongoDb } from "./config/dbConfig.js";

const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connect To Database
connectToMongoDb();

// Start a server
app.listen(PORT, (error) => {
  error ? console.log("Error", error) : console.log("Server is Running");
});
