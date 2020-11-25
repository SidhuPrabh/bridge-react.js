import React, { Component } from 'react';
import classes from './NavigationBar.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    
    render() {
        return(
            <div className={classes.NavigationBar}>
                <ul>
                    <li className={classes.Logo}>
                        <Link to="/"><Logo/></Link>
                    </li>
                    <li>
                    <Link className={classes.Link} to="/">Home</Link>
                    </li>
                    <li>
                    <Link className={classes.Link} to="/registerPro">Pro register</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavigationBar;