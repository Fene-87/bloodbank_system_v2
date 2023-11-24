import express from "express";
import mysql2 from "mysql2";
import cors from "cors";
import bcrypt from "bcryptjs";

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Cn769321@',
    database: 'bloodbank'
});

app.post('/create', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const nationalId = req.body.nationalId;
    const userName = req.body.userName;
    const gender = req.body.gender;
    const bloodGroup = req.body.bloodGroup;
    const address = req.body.address;
    const contactNumber = req.body.contactNumber;
    const email = req.body.email;
    const diseases = req.body.diseases;
    const password = hashPassword;
    const age = req.body.age;
    const role = req.body.role;

    db.query(
        'INSERT INTO users (national_id, username, gender, blood_type, age, password, address, contact_number, email, diseases, role) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
        [nationalId, userName, gender, bloodGroup, age, password, address, contactNumber, email, diseases, role],
        (err, result) => {
           if(err){
               console.log(err);
           }
           else{
               res.send('Values Inserted');
           }
        }
    );
});

app.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        'SELECT * FROM users WHERE email = ?',
        [email],
        async (err, result) => {
            if(err) {
                res.send({ err: err });
            } else if(result.length > 0){
               const isPasswordCorrect = await bcrypt.compare(password, result[0].password);
               if (!isPasswordCorrect) {
                res.send({ message: 'Incorrect Password' });
               } else {
                res.send(result);
                console.log(result);
               }
            } else {
                res.send({ message: 'Invalid email/password' });
            }
        }
    )
})


app.listen(3001, () => {
    console.log("Your server is up and running");
});
