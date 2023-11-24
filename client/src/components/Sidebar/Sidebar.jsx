import { useParams, NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ type }) => {
    return (
        <div className="sidebar-container">
            <ul className='sidebar-items'>
            <NavLink to='/landing'>
                <li>Home</li>
                </NavLink>
                <li>Donors</li>
                <li>Blood Donations</li>
                <NavLink to='/requests'>
                <li>Requests</li>
                </NavLink>
                <li>Handed Over</li>
                <li>Users</li>
                    {/* <NavLink to='/'>
                      <li>Home</li>
                    </NavLink>

                    <NavLink to='/donate'>
                      <li>Donate blood</li>
                    </NavLink>

                    <NavLink to='/recipient'>
                      <li>Recipients</li>
                    </NavLink> */}
            </ul>
        </div>
    )
}

export default Sidebar;