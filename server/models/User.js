import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    nationalID: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    bloodType: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
{
    timeStamps: true,
})

export default mongoose.model('User', userSchema);
