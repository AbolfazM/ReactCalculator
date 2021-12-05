import React, { Fragment, useState } from 'react';
import userProfile from './userprofile.png';
import './styles.css';

const UserPanel = () => {

    const [show, setShow] = useState(false);

    const handlePanel = () => {
        setShow(!show);
    }

    return(
        <Fragment>
            <button className="CloseOpen">show Panel</button>
            <div className="Panel">
                <div>
                    <img className="Userprofile" src={userProfile} alt={`user profile`} />
                </div>
            </div>
        </Fragment>
    );
}

export default UserPanel;