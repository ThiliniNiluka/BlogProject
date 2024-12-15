import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"; 

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });

const app = express();

// Middleware to handle routes
app.use("/api/user", userRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});
