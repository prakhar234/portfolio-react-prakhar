import React from "react";
import {Zoom} from 'react-awesome-reveal';

import styles from "./Intro.module.css";


const Intro  = props => {
    return (
        <div className={styles.Intro}>
            <Zoom direction="left" cascade>
                <div className={styles.Heading}>Hello, I'm <span className={styles.Highlight}>Prakhar Shukla.</span></div>
            </Zoom>
            <Zoom direction="right" cascade>
                <div>I'm a front end developer.</div>
            </Zoom>
        </div>
    );
};

export default Intro;