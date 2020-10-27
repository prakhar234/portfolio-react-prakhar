import React, { useEffect, useState } from "react";
import {Slide} from 'react-awesome-reveal';
import {Fade} from 'react-awesome-reveal';

import Layout from "../../components/Layout/Layout";
import Cards from "../../components/Cards/Cards";
import styles from "./About.module.css";
import MySkills from "../../components/MySkills/MySkills";
import MyPhoto from "../../components/MyPhotos/MyPhoto/MyPhoto";
import photo from "../../assets/images/mine-3.jpg";

const About  = props => {
    const [ developmentStyles ] = useState([
        {
            id: 'fast',
            name:'Fast',
            description: 'Fast load times and lag free interaction are one of my highest priority.',
            iconName: 'IoIosSpeedometer'
        },
        {
            id: 'responsive',
            name:'Responsive',
            description: 'My layouts will work on any device, big or small',
            iconName: 'FaLaptopCode'
        },
        {
            id: 'intuitive',
            name:'Intuitive',
            description: 'Strong preference for easy to use, intuitive UX/UI.',
            iconName: 'AiOutlineBulb'
        },
        {
            id: 'dynamic',
            name:'Dynamic',
            description: "Websites don't have to be static, I love making pages come to life.",
            iconName: 'IoIosRocket'
        }
    ]);

    const careerStartDate = new Date("09-01-2012");


    const today = new Date();
    let differenceInYears = today.getFullYear() - careerStartDate.getFullYear();
    let differenceInMonths = differenceInYears * 12 + (today.getMonth() - careerStartDate.getMonth());
    const experienceInMonthAndYears = differenceInYears + " years and " + (differenceInMonths % 12) + " month(s) experience"
    const mySkillsData = [
        {
            name: 'Reactjs',
            value: 90
        },
        {
            name: 'Angular',
            value: 90
        },
        {
            name: 'Vuejs',
            value: 85
        },
        {
            name: 'Javascript',
            value: 93
        },
        {
            name: 'AngularJs',
            value: 80
        },
        {
            name: 'Responsive Design',
            value: 90
        },
        {
            name: 'Less/Sass',
            value: 90
        },
        {
            name: 'Nodejs',
            value: 60
        },
        {
            name: 'HTML',
            value: 90
        },
        {
            name: 'Spring',
            value: 50
        },
        {
            name: 'Azure',
            value: 40
        },
        {
            name: 'Firebase',
            value: 40
        }
    ]
    const [experience ] = useState(experienceInMonthAndYears);
    const [mySkills] = useState(mySkillsData);

    return (
        <Fade cascade>
            <Layout>
                <div className={styles.About}>
                    <h1>About</h1>
                    <div className={styles.SubHeading}>I am a front end developer with {experience} at <span className={styles.Highlight}>Deloitte</span> based in <span className={styles.Highlight}>Amsterdam, Netherlands.</span></div>
                    <div className="">I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not coding, or pushing pixels, you'll find me playing games (either outside or on my pS4), travelling or trying adventurous sports.</div>
                    
                    <Cards characteristics = {developmentStyles} />
                    <Slide triggerOnce direction="left">
                        <h1>Skills</h1>
                    </Slide>
                    <div className={styles.SkillsContainer}>
                        <MyPhoto classes={styles.ImgContainer} currentPhoto={photo}></MyPhoto>
                        <MySkills mySkills={mySkills}></MySkills>
                    </div>
                </div>
            </Layout>
        </Fade>
        
    );
};

export default About;