import React from 'react'
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LockIcon from '@material-ui/icons/Lock';
import { Avatar } from '@material-ui/core'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function board__options() {
    return (
        <div className="board__options">
            <div className="board__optionsLeft">
                <div className="board__dropdown">
                    <DeveloperBoardIcon />
                    Board
                    <KeyboardArrowDownIcon />
                </div>
                <div className="board__name">
                    Board Name
                </div>
                <div className="board__star">
                    <StarOutlineIcon />
                </div>
                <div className="board__team">
                    Team Name 
                    <p>Free</p>
                </div>
                <div className="board__status">
                    <LockIcon />
                    Private
                </div> 
                <div className="board__users">
                    <Avatar />
                </div>
                <div className="board__users__invite">
                    Invite
                </div>
            </div>

            <div className="board__optionsRight">
                <div className="board__calender">
                    <CalendarTodayIcon />
                    Calender
                </div>
                <div className="board__butler">
                    <RoomServiceIcon />
                    Butler
                </div>
                <div className="board__menu">
                    <MoreHorizIcon />
                    Show Menu
                </div>
            </div>

            {/* Board dropdown */}
            {/* Board Name */}
            {/* Team Name */}
            {/* Board status */}
            {/* Board user */}
            {/* Invite */}

            {/* Right */}

            {/* Calender */}
            {/* Butler */}
            {/* Show menu */}
            
        </div>
    )
}

export default board__options
