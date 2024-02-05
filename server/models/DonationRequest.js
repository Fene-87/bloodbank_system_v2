import mongoose, { Schema } from "mongoose";

const DonationRequestSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    bloodType: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Pending",
    },
},
{
    timestamps: true,
})

export default mongoose.model("DonationRequest", DonationRequestSchema);
