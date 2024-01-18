import express from "express";
import { fetchScheduledDonations } from "../controllers/admin.js";

const router = express.Router();

router.get('/scheduled-donations', fetchScheduledDonations);

export default router;
