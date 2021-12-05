import React from 'react';
import userProfile from './userprofile.png';
import './styles.css';

const UserPanel = () => {
    return(
        <div className="Panel">
            <div>
                <span className="CloseOpen">X</span>
                <img className="Userprofile" src={userProfile} alt={`user profile`} />
            </div>
        </div>
    );
}

export default UserPanel;