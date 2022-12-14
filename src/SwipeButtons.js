import React from 'react'
import "./SwipeButtons.css";
import IconButton  from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton >
            <ReplayIcon className='replay' fontSize='large'></ReplayIcon>
        </IconButton>
        <IconButton >
            <CloseIcon className='close' fontSize='large'></CloseIcon>
        </IconButton>
        <IconButton >
            <StarRateIcon className='star' fontSize='large'></StarRateIcon>
        </IconButton>
        <IconButton >
            <FavoriteIcon className='favorite' fontSize='large'></FavoriteIcon>
        </IconButton>
        <IconButton >
           <FlashOnIcon className='flash' fontSize='large'></FlashOnIcon>
        </IconButton>
    </div>
  )
}

export default SwipeButtons