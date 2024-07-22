import React from 'react';
import "./Sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import WheelchairPickupOutlinedIcon from '@mui/icons-material/WheelchairPickupOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='logo'>ZenCare</span>
        </div>
        <hr/>
        <div className='bottom'>
            <ul>
                <p className='title'></p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <li>
                    <WheelchairPickupOutlinedIcon className='icon'/>
                    <span>Patients</span>
                </li>
                <li>
                    <LocalLibraryOutlinedIcon className='icon'/>
                    <span>Students</span>
                </li>
                <li>
                    <MedicalServicesOutlinedIcon className='icon'/>
                    <span>Inventory</span>
                </li>
                <li>
                    <AssessmentOutlinedIcon className='icon'/>
                    <span>Reports</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <li>
                    <ExitToAppOutlinedIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Sidebar;