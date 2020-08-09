import React, { Component } from 'react';
import classes from './NavigationBar.css';
import Logo from '../Logo/Logo';

class NavigationBar extends Component {
    
    render() {
        return(
            <div className={classes.NavigationBar}>
                <ul>
                    <li className={classes.Logo}>
                        <Logo/>
                    </li>
                    <li>
                        Home
                    </li>
                    <li>
                        Search
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavigationBar;