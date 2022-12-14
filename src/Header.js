import React from 'react';
import headerLogo from '/Users/shivdev/Desktop/web/tinder/tinder-clone/src/tinder_icon.png';
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

<img src={headerLogo} alt="tinder-icon" className='header_logo'/>
<IconButton>
<ForumIcon className='header_icon' fontSize='large'/>
</IconButton>



    </div>
   
  );
}

export default Header;