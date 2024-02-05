import BloodRequest from "../models/BloodRequest.js";
import DonationRequest from "../models/DonationRequest.js";

export const requestToDonate = async (req, res, next) => {
    const donationRequest = new DonationRequest({
        bloodType: req.body.bloodType,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contactNumber: req.body.contact,
        date: req.body.date,
        location: req.body.location,
    })

    try {
        donationRequest.save();
        res.status(200).json({ message: "Request received" })
    } catch (error) {
        console.error(error);
        res.send(error)
    }
}

export const requestForBlood = async (req, res, next) => {
    const bloodRequest = new BloodRequest({
        bloodType: req.body.bloodType,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        location: req.body.location,
        reason: req.body.reason,
    })
    
    try {
        bloodRequest.save();
        return res.status(200).json({ message: "Request received" });
    } catch (error) {
        console.error(error);
        res.send(error);
    }
}
