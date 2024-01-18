import express from "express";
import { fetchBloodRequests, fetchScheduledDonations } from "../controllers/admin.js";

const router = express.Router();

router.get('/scheduled-donations', fetchScheduledDonations);

router.get('/bloodrequests', fetchBloodRequests);

export default router;
