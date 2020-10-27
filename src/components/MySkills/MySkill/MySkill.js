import React from "react";
import { Slide } from "react-awesome-reveal";

import styles from "./MySkill.module.css";

const MySkill = props => {
    return (
        <Slide triggerOnce="true" direction="right">
            <li  className={styles.MySkillItem}>
                <div className={styles.MySkill} style={{width:props.mySkill.value + "%"}}>
                    <div className={styles.Heading} >{props.mySkill.name}</div>
                </div>
                <span>{props.mySkill.value + "%"}</span>
            </li>
        </Slide>
    )
}

export default MySkill;