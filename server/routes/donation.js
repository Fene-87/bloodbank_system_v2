import express from "express";
import { requestForBlood } from "../controllers/donations.js";

const router = express.Router();

// router.post('/requesttodonate', requestToDonate);

router.post('/requestblood', requestForBlood);

export default router;
