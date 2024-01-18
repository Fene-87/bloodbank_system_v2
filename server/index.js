import express from "express";
import mysql2 from "mysql2";
import cors from "cors";
import authRoute from "./routes/auth.js";
import donationRoute from "./routes/donation.js";
import adminRoute from "./routes/admin.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/server/auth', authRoute);
app.use('/server/donation', donationRoute);
app.use('/server/admin', adminRoute);

export const db = mysql2.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Cn769321@',
    database: 'bloodbank'
});

app.listen(3001, () => {
    console.log("Your server is up and running");
});
