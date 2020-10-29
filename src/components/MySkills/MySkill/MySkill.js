import React from "react";

import styles from "./MySkill.module.css";

const MySkill = props => {
    return (
        <li className={styles.MySkillItem}>
            <div className={styles.MySkill} style={{width:props.mySkill.value + "%"}}>
                <div className={styles.Heading} >{props.mySkill.name}</div>
            </div>
            <span>{props.mySkill.value + "%"}</span>
        </li>
    )
}

export default MySkill;