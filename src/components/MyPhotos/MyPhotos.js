import React from "react";
import {Fade} from 'react-awesome-reveal';

import styles from "./MyPhotos.module.css";
import photo3 from "../../assets/images/mine-3.jpg";
import MyPhoto from "./MyPhoto/MyPhoto";

const MyPhotos  = props => {
    return (
        <Fade direction="bottom" cascade>
            <div className={styles.MyPhotos}>
                <MyPhoto currentPhoto={photo3}></MyPhoto>
            </div>
        </Fade>
    );
};

export default MyPhotos;