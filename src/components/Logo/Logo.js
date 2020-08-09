import React from 'react';
import bridgeLogo from '../../assests/logo/logo.png';
import classes from './Logo.css';

const logo = (props) => {
    return(
        <div className={classes.Logo}>
            <img src={bridgeLogo} alt="Logo"/>
        </div>
    )
}

export default logo;