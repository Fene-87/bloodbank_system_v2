import express from "express";
import { registerUser } from "../controllers/auth.js";

const router = express.Router();

router.post('/create', registerUser);

export default router;