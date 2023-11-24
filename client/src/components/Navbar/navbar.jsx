import { useParams, NavLink } from 'react-router-dom';
import './navbar.css'


const Navbar = ({ type }) => {
    return (
        <div className="navbar-container">
            <ul className='navbar-items'>
                {type === 'admin' ?
                  <>
                    <li>Inventory</li>
                    <li>Appointments</li>
                    <li>Requests</li>
                  </>
                  :
                  <>
                    <div className='navbar-links-section'>
                      <NavLink to='/' className="navbar-link">
                        <li className='link-text'>Home</li>
                      </NavLink>

                      <NavLink to='/' className="navbar-link">
                        <li className='link-text'>About Us</li>
                      </NavLink>

                      <NavLink to='/' className="navbar-link">
                        <li className='link-text'>Services</li>
                      </NavLink>

                      <NavLink to='/donate' className="navbar-link">
                        <li className='link-text'>Donate blood</li>
                      </NavLink>

                      <NavLink to='/recipient' className="navbar-link">
                        <li className='link-text'>Recipients</li>
                      </NavLink>
                    </div>
                    <NavLink to='/admin' className="navbar-link">
                      <p className='navbar-admin'>Admin</p>
                    </NavLink>
                  </>
                }
            </ul>
        </div>
    )
}

export default Navbar