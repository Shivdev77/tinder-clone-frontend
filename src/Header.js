import React from 'react';
import "./Header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton  from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className='header'>
<IconButton>
<AccountCircleIcon className='header_icon' fontSize='large'/>
</IconButton>

<img src="https://www.shutterstock.com/image-vector/flame-icon-graphic-template-vector-260nw-733799875.jpg" alt="tinder-icon" className='header_logo'/>
<IconButton>
<ForumIcon className='header_icon' fontSize='large'/>
</IconButton>



    </div>
   
  );
}

export default Header;
