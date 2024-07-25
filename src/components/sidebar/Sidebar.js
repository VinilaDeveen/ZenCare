import React from 'react';
import "./Sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import WheelchairPickupOutlinedIcon from '@mui/icons-material/WheelchairPickupOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
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
                    <WheelchairPickupOutlinedIcon className='icon'/>
                    <Link to="/Patients" style={{textDecoration:"none"}}>
                    <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <LocalLibraryOutlinedIcon className='icon'/>
                    <Link to="/Students" style={{textDecoration:"none"}}>
                    <span>Students</span>
                    </Link>
                </li>
                <li>
                    <MedicalServicesOutlinedIcon className='icon'/>
                    <Link to="/Inventory" style={{textDecoration:"none"}}>
                    <span>Inventory</span>
                    </Link>
                </li>
                <li>
                    <AssessmentOutlinedIcon className='icon'/>
                    <Link to="/Reports" style={{textDecoration:"none"}}>
                    <span>Reports</span>
                    </Link>
                </li>
                <li>
                    <SettingsOutlinedIcon className='icon'/>
                    <Link to="/Settings" style={{textDecoration:"none"}}>
                    <span>Settings</span>
                    </Link>
                </li>
                <li>
                    <ExitToAppOutlinedIcon className='icon'/>
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