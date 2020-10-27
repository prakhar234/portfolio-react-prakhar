import React from "react";
import {Fade} from 'react-awesome-reveal';


const MyPhoto  = props => {
    return (
        <Fade triggerOnce="true" className={props.classes}>
            <img src={props.currentPhoto} alt="myself" />
        </Fade>
    );
};

export default MyPhoto;