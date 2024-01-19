import { db } from "../index.js";

export const requestToDonate = async (req, res, next) => {
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
}

export const requestForBlood = async (req, res, next) => {
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
}