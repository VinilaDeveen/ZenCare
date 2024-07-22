import React from 'react';
import "./Navbar.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Switch from '@mui/material/Switch';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return <div className='navbar'>
    <div className='navbarContainer'>
      <div className='search'>
        <input type='text' placeholder='Search'/>
        <SearchOutlinedIcon/>
      </div>
      <div className='items'>
        <div className='item'>
          <LanguageOutlinedIcon className='icon'/>
          <span>English</span>
        </div>
        <div className='item'>
          <Switch style={{color: "#210876" }} className='icon'/>
        </div>
        <div className='item'>
          <FullscreenOutlinedIcon className='icon'/>
        </div>
        <div className='item'>
          <NotificationsActiveOutlinedIcon className='icon'/>
          <div className='counter'>3</div>
        </div>
        <div className='item'>
          <ChatBubbleOutlineOutlinedIcon className='icon'/>
          <div className='counter'>5</div>
        </div>
        <div className='item'>
          <ListOutlinedIcon className='icon'/>
        </div>
        <div className='item'>
          <img src='/images/person.jpg' alt='' className='profileImg'/>
        </div>
      </div>
    </div>
  </div>;
};

export default Navbar;