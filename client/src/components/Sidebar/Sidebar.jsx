import { useParams, NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ type }) => {
    return (
        <div className="sidebar-container">
            <ul className='sidebar-items'>
              <NavLink to='/admin' className="sidebar-link">
                <li>Overview</li>
              </NavLink>

              <NavLink to='/scheduleddonations' className="sidebar-link">
                <li>Scheduled donations</li>
              </NavLink>

              <NavLink to='/blooddonations' className="sidebar-link">
                <li>Blood Donations</li>
              </NavLink>

              <NavLink to='/requests' className="sidebar-link">
                <li>Blood requests</li>
              </NavLink>

              <NavLink to='/landing' className="sidebar-link">
                <li>Completed transactions</li>
              </NavLink>

              <NavLink to='/landing' className="sidebar-link">
                <li>Users</li>
              </NavLink>
            </ul>
        </div>
    )
}

export default Sidebar;