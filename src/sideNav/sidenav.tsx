import React, {useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  } from 'react-router-dom';
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { navLists } from '../sideNav/NavList';


const SideNav = () => {
    const location = useLocation();
    const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

      return (
        <div className="d-flex flex-column vh-100 shadow-sm">
          <div className="p-4 border-bottom">
            <h2 className="text-xl fw-bold">useReducer Examples</h2>
          </div>
          <div className="flex-grow-1 p-3">
            <ul className="nav flex-column">
              {navLists.map((item) => (
                <li key={item.name} className="nav-item mb-2">
                  <button
                    className={`btn btn-link text-start w-100 d-flex align-items-center ${
                      location.pathname === item.path ? 'text-primary fw-bold' : ''
                    }`}
                    onClick={() => handleNavigation(item.path)}
                  >
                    <span className="me-2">{item.icon}</span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
}

export default SideNav;




  

  

