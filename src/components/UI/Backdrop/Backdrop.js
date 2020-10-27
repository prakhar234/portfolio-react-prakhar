import React from "react";

import styles from "./Backdrop.module.css";

const backdrop = props => (
    props.show ? <div onClick={props.close} className={styles.Backdrop}>{props.children}</div> : null
)

export default backdrop;