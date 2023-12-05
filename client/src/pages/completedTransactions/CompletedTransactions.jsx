import Sidebar from '../../components/Sidebar/Sidebar';
import './CompletedTransactions.css';

const CompletedTransactions = () => {
    return (
        <div className='admin-container'>
            <Sidebar />
            <div className='overview-container'>
                <h2>Completed Transactions</h2>
            </div>
        </div>
    )
}

export default CompletedTransactions;
