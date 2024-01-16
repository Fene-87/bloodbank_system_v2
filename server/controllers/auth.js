import bcrypt from "bcryptjs";
import { db } from "../index.js";

export const registerUser = async (req, res, next) => {
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
        'INSERT INTO users (user_national_id, user_name, user_gender, user_blood_type, user_age, user_password, user_address, user_contact_number, user_email, diseases, user_role) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
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
}