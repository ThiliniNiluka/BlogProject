import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

// Test route
router.get("/test", test);

export default router;
