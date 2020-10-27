import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

const Modal = props => {

    const handleBackdropClose = () => {
        if(!props.disallowBackdropClose) {
            props.closeModal();
        }
    }

    let classes = [styles.Modal];
    if(props.show) {
        classes.push(styles.Open)
    } else {
        classes.push(styles.Close);
    }

    return (
        <React.Fragment>
            <Backdrop close={handleBackdropClose} show={props.show}></Backdrop>
            <div className={classes.join(' ')}>
                {props.children}
            </div>
        </React.Fragment>
    )
};

export default React.memo(Modal);