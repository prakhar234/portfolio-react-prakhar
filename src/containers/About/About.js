import React, { useEffect, useState } from "react";
import {Slide} from 'react-awesome-reveal';
import { FaArrowRight } from 'react-icons/fa'

import Layout from "../../components/Layout/Layout";
import Cards from "../../components/CharacterCards/CharacterCards";
import CardList from "../../components/CardList/CardList";
import styles from "./About.module.css";
import MySkills from "../../components/MySkills/MySkills";
import MyPhoto from "../../components/MyPhotos/MyPhoto/MyPhoto";
import photo from "../../assets/images/traveling.JPG";
import axios from "../../shared/axios/axios";
import Loader from "../../components/UI/Loader/Loader";
import Button from "../../components/UI/Button/Button";

const About  = props => {
    const [ developmentStyles, setDevelopmentStyles ] = useState(null);
    const [ mySkills, setMySkillsData ] = useState(null);
    const [ myHobbies, setMyHobbies ] = useState(null);
    const [ isLoading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const careerStartDate = new Date("09-01-2012");
    const today = new Date();
    let differenceInYears = today.getFullYear() - careerStartDate.getFullYear();
    let differenceInMonths = differenceInYears * 12 + (today.getMonth() - careerStartDate.getMonth());
    const experienceInMonthAndYears = differenceInYears + " years and " + (differenceInMonths % 12) + " month(s) experience";
    const [experience ] = useState(experienceInMonthAndYears);

    useEffect(() => {
        setLoading(true);
        axios.get('about.json').then(response => {
            setMySkillsData(response.data.mySkillsData);
            setDevelopmentStyles(response.data.developmentStyles);
            setMyHobbies(response.data.hobbies);
            setLoading(false);
        }).catch(() => {
            setError("Due to technical issue, not able to access the data. Please try again later!!");
            setLoading(false);
        })
    }, []);

    const goToPortfolioPage = (url) => {
        props.history.push(url);
    }

    
    let aboutData = null;
    if(isLoading) {
        aboutData = <Loader />
    }
    if(!isLoading && error) {
        aboutData = <h4 className={styles.Highlight}>{error}</h4>
    }

    if(!isLoading && !error && developmentStyles) {
        aboutData = (
            <React.Fragment>
                    <h1>About</h1>
                    <div className={styles.SubHeading}>I am a front end developer with {experience} at <span className={styles.Highlight}>Deloitte</span> based in <span className={styles.Highlight}>Amsterdam, Netherlands.</span></div>
                    <div className="">I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not coding, or pushing pixels, you'll find me playing games (either outside or on my pS4), travelling or trying adventurous sports.</div>
                    <div>Person you are looking at was born on <span className={styles.Highlight}>17th September, 1989</span></div>
                    <Cards characteristics = {developmentStyles} />
                    <Slide triggerOnce direction="left">
                        <h1>Skills</h1>
                    </Slide>
                    <div className={styles.SkillsContainer}>
                        <MyPhoto classes={styles.ImgContainer} currentPhoto={photo}></MyPhoto>
                        <MySkills mySkills={mySkills}></MySkills>
                    </div>
                    <Slide triggerOnce direction="left">
                        <h1>Hobbies</h1>
                    </Slide>
                    <div className={styles.HobiesContainer}>
                        <CardList smallCard={true} cards = {myHobbies}></CardList>
                    </div>
                    <Button type="button" includeSvgAnimation={true} clicked={() => goToPortfolioPage('/portfolio')}>
                            Portfolio
                            <FaArrowRight />
                    </Button>

            </React.Fragment>
        )
    };

    return (
        <Layout>
            <div className={styles.About}>
                {aboutData}
            </div>
        </Layout>
    );
};

export default About;