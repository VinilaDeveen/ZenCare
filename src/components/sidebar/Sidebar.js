import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{textDecoration:"none"}}>
                <span className='logo'>ZenCare</span>
            </Link>
        </div>
        <hr/>
        <div className='bottom'>
            <ul>
                <p className='title'></p>
                <li>
                    <DashboardIcon className='icon'/>
                    <Link to="/Dashboard" style={{textDecoration:"none"}}>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <WheelchairPickupIcon className='icon'/>
                    <Link to="/Patients" style={{textDecoration:"none"}}>
                    <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <LocalLibraryIcon className='icon'/>
                    <Link to="/Students" style={{textDecoration:"none"}}>
                    <span>Students</span>
                    </Link>
                </li>
                <li>
                    <InventoryIcon className='icon'/>
                    <Link to="/Inventory" style={{textDecoration:"none"}}>
                    <span>Inventory</span>
                    </Link>
                </li>
                <li>
                    <AssessmentIcon className='icon'/>
                    <Link to="/Reports" style={{textDecoration:"none"}}>
                    <span>Reports</span>
                    </Link>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <Link to="/Settings" style={{textDecoration:"none"}}>
                    <span>Settings</span>
                    </Link>
                </li>
                <li>
                    <ExitToAppIcon className='icon'/>
                    <Link to="/Logout" style={{textDecoration:"none"}}>
                    <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Sidebar;