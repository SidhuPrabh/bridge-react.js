import React from 'react';
import classes from './Img.css';

const img = (props) => {
    /*let css=[];
    switch (props.cssType) {
        case "logoThumbnail":
            css.push("logoThumbnail");
            break;
        default: break;
    }

    let cssType = css.join(" ");
    console.log(cssType);*/

    return(
        <img className={classes[props.cssType]} src={props.src} alt={props.alt}/>
    );
}

export default img;