import React from "react";
import {Slide} from 'react-awesome-reveal';

import styles from "./Card.module.css"
import Button from "../../UI/Button/Button";

const Card = props => {

    let backgroundImageStyles = null;
    if(props.imgUrl) {
        backgroundImageStyles = {
            backgroundImage: `url(${props.imgUrl})`
        }
    }

    let showDetailsButton = null;
    if(props.showDetails) {
        showDetailsButton = (
            <Button type="button" clicked={props.showDetails} >
                Details
            </Button>
        );
    }
    
    return (
        <Slide triggerOnce="true" direction="right" className={styles.Card}>
            <div>
                <div className={styles.ImageContainer} style={backgroundImageStyles}></div>
                <div className={styles.ContentContainer}>
                        <h3>{props.name}</h3>
                        {showDetailsButton}
                </div>
            </div>
        </Slide>
    
    )
};

export default Card;