import React from "react";
import { Link } from "react-router-dom";

import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../../assets/images/mine-3.jpg";
import styles from "./Toolbar.module.css";

const Toolbar = (props) => {
    
    return (
        <header className={styles.Toolbar}>
            <DrawerToggle clicked={props.toggle}></DrawerToggle>
            <div className={styles.Logo}><Link to="/"><img src={Logo} alt="Home Page"/></Link></div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
};

export default Toolbar;