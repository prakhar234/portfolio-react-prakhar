import React from "react";

import styles from "./Loader.module.css";

const Loader = (props) =>{
    return (
        <React.Fragment>
            <div className={styles.Loader}>
                <div></div>
                <div></div>
            </div>
                {/* <div className={styles.LoaderText}>Details are being fetched from API...</div> */}
        </React.Fragment>
        
    )
};

export default Loader;