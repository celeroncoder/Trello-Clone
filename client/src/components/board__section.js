import React from 'react';
import Card from "./board__cards";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AttachmentIcon from '@material-ui/icons/Attachment';

function board__section() {
    return (
        <div className="board__section">
            <div className="board__sectionHeader">
                <p>Section Name</p>
                <MoreHorizIcon />
            </div>
            <div className="board__sectionCards">
                <Card />
                <Card />
            </div>
            <div className="board__sectionFooter">
                <button>+ Add New Card</button>
                <AttachmentIcon />
            </div>
        </div>
    )
}

export default board__section
