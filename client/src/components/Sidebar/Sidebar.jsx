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
                <li>Approved donations</li>
              </NavLink>

              <NavLink to='/bloodrequests' className="sidebar-link">
                <li>Blood requests</li>
              </NavLink>

              <NavLink to='/approvedrequests' className="sidebar-link">
                <li>Approved requests</li>
              </NavLink>

              <NavLink to='/home' className="sidebar-home">
                <li>Back to Home</li>
              </NavLink>
            </ul>
        </div>
    )
}

export default Sidebar;