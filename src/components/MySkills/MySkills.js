import React from "react";

import styles from "./MySkills.module.css";
import MySkill from "./MySkill/MySkill";

const MySkills =  props => {
    const { mySkills } = props;
    let mySkillsList = mySkills.map((mySkill, ind) => {
        return (
            <MySkill mySkill={mySkill} key={ind}></MySkill>
        )
    })
    return (
        <ul className={styles.MySkills}>
            {mySkillsList}
        </ul>
    )
};

export default MySkills;