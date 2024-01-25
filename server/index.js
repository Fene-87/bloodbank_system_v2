import express from "express";
import mysql2 from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
// import authRoute from "./routes/auth.js";
// import donationRoute from "./routes/donation.js";
// import adminRoute from "./routes/admin.js";
import mongoose from "mongoose";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
// app.use('/server/auth', authRoute);
// app.use('/server/donation', donationRoute);
// app.use('/server/admin', adminRoute);

// export const db = mysql2.createConnection({
//     user: 'root',
//     host: 'localhost',
//     password: 'Cn769321@',
//     database: 'bloodbank'
// });

// app.listen(3001, () => {
//     console.log("Your server is up and running");
// });

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to database");
    } catch (error) {
        throw error;
    }
}

app.listen(8000, () => {
    connectMongoDB();
    console.log("Connected to backend");
})
