import React from "react";
import {Slide} from 'react-awesome-reveal';

import styles from "./ProjectCard.module.css"
import Button from "../../UI/Button/Button";

const ProjectCard = props => {

    let backgroundImageStyles = null;
    if(props.imgUrl) {
        backgroundImageStyles = {
            backgroundImage: `url(${props.imgUrl})`
        }
    }
    
    return (
        <Slide triggerOnce="true" direction="right" className={styles.ProjectCard}>
            <div>
                <div className={styles.ImageContainer} style={backgroundImageStyles}></div>
                <div className={styles.ContentContainer}>
                        <h3>{props.name}</h3>
                        <Button type="button" clicked={props.showDetails} >
                            Details
                        </Button>
                </div>
            </div>
        </Slide>
    
    )
};

export default ProjectCard;