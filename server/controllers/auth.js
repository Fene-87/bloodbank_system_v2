import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        nationalID: req.body.nationalId,
        email: req.body.email,
        password: hashPassword,
        bloodType: req.body.bloodType,
        age: req.body.age,
        contactNumber: req.body.contactNumber,
        gender: req.body.gender,
    });

    try {
        await newUser.save();
        return res.status(201).json({ message: "User successfully registered" })
    } catch (error) {
        console.error(error)
        res.send(error)
    }  
}

// export const login = async (req, res, next) => {
//     const email = req.body.email;
//     const password = req.body.password;

//     db.query(
//         'SELECT * FROM users WHERE user_email = ?',
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
//                 res.send({ message: 'Invalid email/password' });
//             }
//         }
//     )
// };

// export const adminLogin = async (req, res, next) => {
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
//                 res.send({ message: 'Access denied! You are not authorized!' });
//             }
//         }
//     )
// }