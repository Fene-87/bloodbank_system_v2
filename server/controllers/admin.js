import { db } from "../index.js";

export const fetchScheduledDonations = async (req, res, next) => {
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
}

export const fetchBloodRequests = async (req, res, next) => {
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
}

export const approveDonationRequest = async (req, res, next) => {
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
}