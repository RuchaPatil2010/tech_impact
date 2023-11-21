import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerImage from '../images/register-volunteer.jpg';
import axios from "axios";
import { useState } from 'react';
import user from '../images/user.png';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData_admin, SidebarData_volunteer } from './SidebarData';
import '../css/Navbar.css';
import { IconContext } from 'react-icons';
import Image from 'react-bootstrap/Image'
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

  function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const userName = useSelector(state=> state.user.username)

    console.log(userName);
    
    let role = "admin";

    return(
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
          <div class='user-profile'>
            <img src={user} />
            &ensp; <b>{userName}</b>
          </div>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              { SidebarData_admin.map((item, index) => {
                  if(role=="admin"){
                    return (
                      <li className={item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  }
                 })
              }
              { SidebarData_volunteer.map((item, index) => {
                  if(role!="admin"){
                    return (
                      <li className={item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    );
                  }
                 })
              }
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    )
  }

  export default Navbar;