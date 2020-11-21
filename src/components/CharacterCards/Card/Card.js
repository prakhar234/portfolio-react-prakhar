import React from "react";
import { Flip } from 'react-awesome-reveal';

import { ReactComponent as Speedometer } from "../../../assets/svgs/speedometer.svg";
import { ReactComponent as Responsive } from "../../../assets/svgs/responsive.svg";
import { ReactComponent as LightBulb } from "../../../assets/svgs/lightbulb.svg";
import { ReactComponent as Rocket } from "../../../assets/svgs/rocket.svg";

import styles from "./Card.module.css";


const IMAGES = {
    'fast': <Speedometer />,
    'responsive': <Responsive />,
    'intuitive': <LightBulb />,
    'dynamic': <Rocket />
}

const Card =  props => {
    const { characterCardData } = props;
    return (
        <Flip triggerOnce="true" direction="horizontal" className={styles.Card} cascade>
            <React.Fragment >
                <div className={styles.ImageContainer}>
                    {IMAGES[characterCardData.id]}
                </div>
                <div >
                    <div className={styles.Title}>{characterCardData.name}</div>
                    <div>{characterCardData.description}</div>
                </div>
            </React.Fragment>
        </Flip>
    )
};

export default Card;