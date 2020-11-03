import React, { useState } from "react";
import useIsInViewport from 'use-is-in-viewport';

import styles from "./MySkill.module.css";

const MySkill = props => {
    const [ isInViewPort, targetRef ] = useIsInViewport({ threshold: 90 });
    const [ flag, setFlag ] = useState(0);
    let widthStyles = {width: 0};
    const mySkillClasses = [styles.MySkill];
    if(isInViewPort || flag) {
        widthStyles = {width: props.mySkill.value + "%"};
        mySkillClasses.push(styles.AnimateWidth);
        if(flag === 0) {
            setFlag(1);
        }
    }
    
    return (
        <li ref={targetRef} className={styles.MySkillItem}>
            <div className={mySkillClasses.join(' ')} style={widthStyles}>
                <div className={styles.Heading} >{props.mySkill.name}</div>
            </div>
            <span>{isInViewPort || flag ? props.mySkill.value + "%" : null}</span>
        </li>
    )
}

export default MySkill;