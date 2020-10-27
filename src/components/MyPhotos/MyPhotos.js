import React from "react";
import {Fade} from 'react-awesome-reveal';

import styles from "./MyPhotos.module.css";
// import photo1 from "../../assets/images/mine-1.jpg";
// import photo2 from "../../assets/images/mine-2.jpg";
import photo3 from "../../assets/images/mine-3.jpg";
import MyPhoto from "./MyPhoto/MyPhoto";

const MyPhotos  = props => {
    // let photos = [photo1, photo2, photo3];
    // const [currentPhoto, setCurrentPhoto] = useState(photos[2]);

    // useEffect(() => {
    //     let i = -1;
    //     const interval = setInterval(() => {
    //         i++;
    //         if(i > photos.length - 1) {
    //             i = 0;
    //         }
    //         setCurrentPhoto(photos[i]);
    //     }, 10000);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // },[photos]);
    return (
        <Fade direction="bottom" cascade>
            <div className={styles.MyPhotos}>
                <MyPhoto currentPhoto={photo3}></MyPhoto>
            </div>
        </Fade>
    );
};

export default MyPhotos;