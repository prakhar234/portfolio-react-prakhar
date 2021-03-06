import React, { useEffect, useState } from "react";
import { ReactComponent as RightArrow } from '../../assets/svgs/right-arrow.svg';



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
        },1000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    let pageComponents = <Loader />;

    const goToPortfolioPage = (url) => {
        props.history.push(url);
    }

    if(!isLoading) {
        pageComponents = (
            <React.Fragment>
                <MyPhotos />
                <Intro />
                <Button type="button" includeSvgAnimation={true} clicked={() => goToPortfolioPage('/portfolio')}>
                        Portfolio
                        <RightArrow />
                </Button>
                
            </React.Fragment>
        )
    }
    return (
        <div className={styles.Home}>
            {pageComponents}
        </div>
    );
};

export default Home;