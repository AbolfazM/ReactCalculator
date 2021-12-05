import React, { Fragment, useState } from 'react';
import userProfile from './userprofile.png';
import Items from './Items';
import './styles.css';

const UserPanel = () => {

    const [show, setShow] = useState(false);

    const handlePanel = () => {
        setShow(!show);
    }

    return(
        <Fragment>
            <button onClick={handlePanel} className="CloseOpen">Click!</button>
            { show ?
                <div className="Panel">
                    <div>
                        <img className="Userprofile" src={userProfile} alt={`user profile`} />
                    </div>

                    <div>
                        <Items />
                    </div>
                </div>
            : null }
        </Fragment>
    );
}

export default UserPanel;