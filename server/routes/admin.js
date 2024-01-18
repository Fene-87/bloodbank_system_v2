import express from "express";
import { approveDonationRequest, fetchBloodRequests, fetchScheduledDonations, rejectDonationRequest } from "../controllers/admin.js";

const router = express.Router();

router.get('/scheduled-donations', fetchScheduledDonations);

router.get('/bloodrequests', fetchBloodRequests);

router.put('/approvedonrequest', approveDonationRequest);

router.put('/rejectdonrequest', rejectDonationRequest);

export default router;
