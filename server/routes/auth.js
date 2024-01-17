import express from "express";
import { login, registerUser } from "../controllers/auth.js";

const router = express.Router();

router.post('/create', registerUser);

router.post('/signin', login);

export default router;