import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.css";

const NavigationItems = props => {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/" exact>Home</NavigationItem>
            <NavigationItem link="/about">About</NavigationItem>
            <NavigationItem link="/portfolio">Portfolio</NavigationItem>
        </ul>
    )
};

export default NavigationItems;