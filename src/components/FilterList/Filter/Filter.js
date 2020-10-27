import React from "react";

import styles from "./Filter.module.css"

const Filter = props => {
    const classes = [styles.Filter];
    if(props.active) {
        classes.push(styles.Active);
    }
    return (
        <div className={classes.join(' ')} onClick={props.setActiveFilter}>{props.text}</div>
    )
};

export default Filter;