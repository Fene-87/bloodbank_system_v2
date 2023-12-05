import './scheduledDonations.css';

const ScheduledDonations = () => {
    const getScheduledDonations = () => {
        try {
            Axios.get("http://localhost:3001/scheduled-donations")
            .then((response) => {
                return response;
            })
        } catch (error) {
            throw(error);
        }
    }

    return (
        <div>Scheduled Donations</div>
    )
}

export default ScheduledDonations;
