import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"; 
import authRoutes from "./routes/auth.route.js";

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

app.use(express.json());

// Middleware to handle routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Start the server
app.listen(8080, () => {
  console.log("Server is running on port 8080!!");
});
