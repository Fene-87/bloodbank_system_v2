import express from "express";
import { requestToDonate } from "../controllers/donations.js";

const router = express.Router();

router.post('/requesttodonate', requestToDonate);

export default router;
