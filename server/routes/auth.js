import express from "express";
import { registerUser } from "../controllers/auth.js";

const router = express.Router();

router.post('/create', registerUser);

// router.post('/signin', login);

// router.post('/adminsignin', adminLogin);

export default router;
