import React from "react";

import styles from "./Button.module.css";


const Button  = props => {
    let classes = [styles.Button];
    if (props.includeSvgAnimation) {
        classes.push(styles.Animation);
    }
    return (
        <button type={props.type} onClick={props.clicked} className={classes.join(' ')}>
            {props.children}
        </button>
    );
};

export default Button;