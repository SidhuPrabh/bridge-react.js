import React from 'react';
import classes from './Button.css';

const Button = (props) => {
    /*let css=[];
    switch (props.cssType) {
        case "Buttoncard":
            css.push("ButtonCard");
        default: break;
    }
    let cssType = css.join(" ");
    */
    return (
        <input type="button" className={classes[props.cssType]} value={props.value}
        onClick={props.onClick}/>
    );
}

export default Button;