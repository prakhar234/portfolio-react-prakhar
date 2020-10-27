import React, { useState } from "react";

import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Header = props => {
    const [showSidebar, setSidebarVisibility] = useState(false);

    const toggleSideDrawer = () => {
        setSidebarVisibility(!showSidebar);
    }

    const closeSidebarHandler = () => {
        setSidebarVisibility(false);
    }

    return (
        <React.Fragment>
            <Toolbar toggle={toggleSideDrawer}></Toolbar>
            <SideDrawer open={showSidebar} closed={closeSidebarHandler}></SideDrawer>
        </React.Fragment>
    )
};

export default Header;