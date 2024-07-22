import React from 'react';
import "./Widget.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import WheelchairPickupOutlinedIcon from '@mui/icons-material/WheelchairPickupOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {
  let data;
  //temp
  const amount = 500;
  const diff = 30;

  switch(type){
    case "patient":
      data={
        title: "PATIENTS",
        isMoney: false,
        link: "See Details",
        icon: <WheelchairPickupOutlinedIcon className='icon' style={{color: "crimson", backgroundColor: "#ff000033"}}/>,
      };
      break;
    case "student":
      data={
        title: "STUDENTS",
        isMoney: false,
        link: "See Details",
        icon: <LocalLibraryOutlinedIcon className='icon' style={{color: "purple", backgroundColor: "#80008033"}}/>,
      };
      break;
    case "earning":
      data={
        title: "TOTAL EARNINGS",
        isMoney: false,
        link: "See Details",
        icon: <MonetizationOnOutlinedIcon className='icon' style={{color: "green", backgroundColor: "#00800033"}}/>,
      };
      break;
    default:
      break;
  }
  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>
              {data.isMoney && "$"} {amount}
            </span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
          <div className='percentage positive'>
            <KeyboardArrowUpIcon/>
            {diff}%
          </div>
            {data.icon}
        </div>
    </div>
  );
};

export default Widget;