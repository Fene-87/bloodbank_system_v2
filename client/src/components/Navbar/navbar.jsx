import { useParams, NavLink } from 'react-router-dom';
import './navbar.css'
import { useState } from 'react';


const Navbar = ({ type }) => {
    const [activeLink, setActiveLink] = useState(1);

    const handleClick = (index) => {
      setActiveLink(index);
    }

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
                      <NavLink to='/' onClick={() => handleClick(1)} className="navbar-link">
                        <li className={activeLink === 1 ? 'active-link' : 'link-text'}>Home</li>
                      </NavLink>

                      <NavLink to='/' onClick={() => handleClick(2)} className="navbar-link">
                        <li className={activeLink === 2 ? 'active-link' : 'link-text'}>About Us</li>
                      </NavLink>

                      <NavLink to='/' onClick={() => handleClick(3)} className="navbar-link">
                        <li className={activeLink === 3 ? 'active-link' : 'link-text'}>Services</li>
                      </NavLink>

                      <NavLink to='/donate' onClick={() => handleClick(4)} className="navbar-link">
                        <li className={activeLink === 4 ? 'active-link' : 'link-text'}>Donate blood</li>
                      </NavLink>

                      <NavLink to='/recipient' onClick={() => handleClick(5)} className="navbar-link">
                        <li className={activeLink === 5 ? 'active-link' : 'link-text'}>Recipients</li>
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