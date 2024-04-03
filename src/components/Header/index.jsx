import React from 'react'
import "./styles.css"
import logo from "../../assets/logo/long-logo.png";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from './ProfileMenu';
import SimpleBottomNavigation from './BottomNav';

function Header() {
  return (
    <>
        <div className='navbar'>
            <img src={logo} alt="logo" className="navbar-logo" />
            <div className="search-bar">
                <div className="search-bar-text">Any Week</div>
                <div className="search-bar-text">Any Where</div>
                <div className="search-bar-text2">Add Guests</div>
                <div className="search-icon-div">
                    <SearchRoundedIcon className="search-icon" />
                </div>
            </div>
            <div className="profile-container">
                <div className="airbnb-your-home">Airbnb your home</div>
                <div className="airbnb-your-home">
                    <LanguageIcon sx={{ fontSize: "1.3rem" }} />
                </div>
                <div className="profile-div">
                    <BasicMenu/>
                </div>
            </div>
            <SimpleBottomNavigation/>
        </div>
    </>
  )
}

export default Header