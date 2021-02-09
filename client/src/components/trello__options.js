import React from 'react'

import { Avatar } from "@material-ui/core";
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

import AppLogo from "../assets/trello-seeklogo.com.svg";

function trello__options() {
    return (
        <div className="trello__options">
            <header>
                <div className="header__left">        
                    <AppsIcon className="header__icon"/>    
                    <HomeIcon className="header__icon"/>
                    <div className="header__leftBoard">
                        <DashboardIcon />
                        Boards
                    </div>
                    <div className="header__left__searchBar">
                        <input type="text" />
                        <SearchOutlinedIcon/>
                    </div>
                </div>
                <div className="header__logo">
                    <img src={AppLogo} alt="Trello-logo" />
                </div>
                <div className="header__right">
                    <AddOutlinedIcon className="header__icon"/>
                    <InfoOutlinedIcon className="header__icon"/>
                    <NotificationsNoneOutlinedIcon className="header__icon"/>
                    <Avatar
                        src="https://avatars.dicebear.com/api/human/profileImage.svg"
                    />
                </div>
            </header>
        </div>
    )
}

export default trello__options;
