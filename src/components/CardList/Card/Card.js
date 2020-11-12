import React from "react";
import { Slide } from "react-awesome-reveal";

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

    let clientNameElement = null;

    if(props.showClientName) {
        clientNameElement = (
            <div className={styles.ClientContainer}>
                <div>{props.clientName}</div>
            </div>
        )
    }

    const cardStyles = [styles.Card];

    if(props.smallCard) {
        cardStyles.push(styles.SmallCard);
    }
    
    return (
        <Slide direction="up" triggerOnce="true" className={cardStyles.join(' ')} >
            <div >
            <div className={styles.CardContainer}>
                <div className={styles.ImageContainer} style={backgroundImageStyles}></div>
                <div className={styles.ContentContainer}>
                        <div className={styles.ContentHeading}>{props.name}</div>
                        {showDetailsButton}
                </div>
            </div>
            {clientNameElement}
        </div>
        </Slide>
    )
};

export default Card;