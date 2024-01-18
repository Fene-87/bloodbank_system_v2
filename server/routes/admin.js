import express from "express";
import { approveDonationRequest, fetchBloodRequests, fetchScheduledDonations } from "../controllers/admin.js";

const router = express.Router();

router.get('/scheduled-donations', fetchScheduledDonations);

router.get('/bloodrequests', fetchBloodRequests);

router.put('/approvedonrequest', approveDonationRequest);

export default router;
