import BloodRequest from "../models/BloodRequest.js";

// export const requestToDonate = async (req, res, next) => {
//     const bloodGroup = req.body.bloodGroup;
//     const firstName = req.body.firstName;
//     const lastName = req.body.lastName;
//     const email = req.body.email;
//     const contact = req.body.contact;
//     const date = req.body.date;
//     const location = req.body.location;

//     db.query(
//         'INSERT INTO donation_requests (donor_blood_group, donor_first_name, donor_last_name, donor_email, donor_contact, scheduled_date, donor_location) VALUES (?,?,?,?,?,?,?)',
//         [bloodGroup, firstName, lastName, email, contact, date, location],
//         async (err, result) => {
//             if(err) {
//               console.log(err)
//             } else {
//                 res.send("Your request to donate blood has been received.");
//             }
//         }
//     )
// }

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