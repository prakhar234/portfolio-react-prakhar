import React, { useEffect, useState } from "react";
import {Zoom} from 'react-awesome-reveal';
import { FaArrowRight } from 'react-icons/fa'



import MyPhotos from "../../components/MyPhotos/MyPhotos";
import Loader from "../../components/UI/Loader/Loader";
import styles from "./Home.module.css";
import Intro from "../../components/Intro/Intro";
import Button from "../../components/UI/Button/Button";

const Home  = props => {
    const [ isLoading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        },2000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    let pageComponents = <Loader />;

    const goToPortfolioPage = () => {
        props.history.push('/about');
    }

    if(!isLoading) {
        pageComponents = (
            <React.Fragment>
                <MyPhotos />
                <Intro />
                <Button type="button" includeSvgAnimation={true} clicked={goToPortfolioPage}>
                        More about me
                        <FaArrowRight />
                </Button>
            </React.Fragment>
        )
    }
    return (
        <Zoom>
            <div className={styles.Home}>
                {pageComponents}
            </div>
        </Zoom>
    );
};

export default Home;