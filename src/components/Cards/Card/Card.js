import React from "react";
import { Flip } from 'react-awesome-reveal';

import { IoIosSpeedometer } from "react-icons/io";
import { MdPhonelink } from "react-icons/md";
import { GoLightBulb } from "react-icons/go";
import { IoIosRocket } from "react-icons/io";

import styles from "./Card.module.css";


const IMAGES = {
    'fast': <IoIosSpeedometer />,
    'responsive': <MdPhonelink />,
    'intuitive': <GoLightBulb />,
    'dynamic': <IoIosRocket />
}

const Card =  props => {
    const { cardData } = props;
    return (
        <Flip triggerOnce="true" direction="horizontal" className={styles.Card} cascade>
            <React.Fragment >
                <div className={styles.ImageContainer}>
                    {IMAGES[cardData.id]}
                </div>
                <div >
                    <div className={styles.Title}>{cardData.name}</div>
                    <div>{cardData.description}</div>
                </div>
            </React.Fragment>
        </Flip>
    )
};

export default Card;