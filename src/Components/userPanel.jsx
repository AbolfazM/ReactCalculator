import React from 'react';
import userProfile from './userprofile.png';
import './styles.css';

const UserPanel = () => {
    return(
        <div className="Panel">
            <div>
                <img src={userProfile} alt={`user profile`} />
            </div>
        </div>
    );
}

export default UserPanel;