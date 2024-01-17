import express from "express";
import mysql2 from "mysql2";
import cors from "cors";
import bcrypt from "bcryptjs";
import authRoute from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/server/auth', authRoute);

export const db = mysql2.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Cn769321@',
    database: 'bloodbank'
});

// app.post('/adminsignin', async (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;

//     db.query(
//         "SELECT * FROM users WHERE user_email = ? AND user_role = 'admin'",
//         [email],
//         async (err, result) => {
//             if(err) {
//                 res.send({ err: err });
//             } else if(result.length > 0){
//                const isPasswordCorrect = await bcrypt.compare(password, result[0].user_password);
//                if (!isPasswordCorrect) {
//                 res.send({ message: 'Incorrect Password' });
//                } else {
//                 res.send(result);
//                 console.log(result);
//                }
//             } else {
//                 res.send({ message: 'Acces denied! You are not authorized!' });
//             }
//         }
//     )
// })

app.post('/requestdonate', async (req, res) => {
    const bloodGroup = req.body.bloodGroup;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const contact = req.body.contact;
    const date = req.body.date;
    const location = req.body.location;

    db.query(
        'INSERT INTO donation_requests (donor_blood_group, donor_first_name, donor_last_name, donor_email, donor_contact, scheduled_date, donor_location) VALUES (?,?,?,?,?,?,?)',
        [bloodGroup, firstName, lastName, email, contact, date, location],
        async (err, result) => {
            if(err) {
              console.log(err)
            } else {
                res.send("Your request to donate blood has been received.");
            }
        }
    )
})

app.post('/requestblood', async (req, res) => {
    const bloodGroup = req.body.bloodGroup;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const location = req.body.location;
    const reason = req.body.reason;

    db.query(
        'INSERT INTO blood_requests (recipient_blood_group, recipient_first_name, recipient_last_name, recipient_email, recipient_location, reason) VALUES (?,?,?,?,?,?)',
        [bloodGroup, firstName, lastName, email, location, reason],
        async (err, result) => {
            if(err) {
              console.log(err)
            } else {
                res.send("Your request for blood has been received.");
            }
        }
    )
})

app.get('/scheduled-donations', (req, res) => {
    db.query(
        'SELECT * FROM donation_requests',
        async (err, result) => {
            if(err) {
                res.send({ err: err })
            } else {
                res.send(result)
                console.log(result)
            }
        }
    )
})

app.get('/bloodrequests', (req, res) => {
    db.query(
        'SELECT * FROM blood_requests',
        async (err, result) => {
            if(err) {
                res.send({ err: err })
            } else {
                res.send(result)
                console.log(result)
            }
        }
    )
})

app.put('/approvedonrequest', (req, res) => {
    const status = req.body.status;
    const amount = req.body.amount;
    const id = req.body.id;

    db.query(
        'UPDATE donation_requests SET status = ?, amount = ? WHERE donation_requests_id = ?',
        [status, amount, id],
        (err, result) => {
            if(err) {
                res.send({ err: err })
            } else {
                res.send(result);
            }
        }
    )
})

app.put('/rejectdonrequest', (req, res) => {
    const status = req.body.status;
    const id = req.body.id;

    db.query(
        'UPDATE donation_requests SET status = ? WHERE donation_requests_id = ?',
        [status, id],
        (err, result) => {
            if(err) {
                res.send({ err: err })
            } else {
                res.send(result);
            }
        }
    )
})

app.put('/approvebloodrequest', (req, res) => {
    const status = req.body.status;
    const id = req.body.id;

    db.query(
        'UPDATE blood_requests SET status = ? WHERE blood_request_id = ?',
        [status, id],
        (err, result) => {
            if(err) {
                res.send({ err: err })
            } else {
                res.send(result);
            }
        }
    )
})

app.put('/rejectbloodrequest', (req, res) => {
    const status = req.body.status;
    const id = req.body.id;

    db.query(
        'UPDATE blood_requests SET status = ? WHERE blood_request_id = ?',
        [status, id],
        (err, result) => {
            if(err) {
                res.send({ err: err })
            } else {
                res.send(result);
            }
        }
    )
})

app.listen(3001, () => {
    console.log("Your server is up and running");
});
