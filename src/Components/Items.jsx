import React, { Fragment } from 'react';
import { AiFillHome, GiUnstableProjectile, IoShareSocialOutline, MdOutlineAccountCircle, MdOutlineNoAccounts } from 'react-icons/all';
import './styles.css';

const Items = () => {
    return(
        <Fragment>
            <div>
                <ul>
                    <div className="Items">
                        <AiFillHome className="Home" />
                    </div>
                    <div className="Items">
                        <GiUnstableProjectile className="Icon" />
                    </div>
                    <div className="Items">
                        <MdOutlineAccountCircle className="Icon" />
                    </div>
                    <div className="Items">
                        <MdOutlineNoAccounts className="Icon" />
                    </div>
                    <div className="Items">
                        <IoShareSocialOutline className="Icon" />
                    </div>
                </ul>
            </div>
        </Fragment>
    );
}

export default Items;