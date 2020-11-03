import React, { useEffect, useState } from "react";
import {Fade} from 'react-awesome-reveal';
import { FaArrowRight } from 'react-icons/fa'

import Layout from "../../components/Layout/Layout";
import FilterList from "../../components/FilterList/FilterList";
import CardList from "../../components/CardList/CardList";
import styles from "./Portfolio.module.css";
import Modal from "../../components/UI/Modal/Modal";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
import axios from "../../shared/axios/axios";
import Loader from "../../components/UI/Loader/Loader";
import Button from "../../components/UI/Button/Button";

const Portfolio  = props => {


    const [filters, setFilters] = useState(null);
    const [projects, setProjects] = useState(null);
    const [ isLoading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [activeFilter, setActiveFilter] = useState("all");
    const [showModal, setModalVisibility] = useState(false);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get('portfolio.json').then(response => {
            setFilters(response.data.filters);
            setProjects(response.data.projects);
            setLoading(false);
        }).catch(() => {
            setError("Due to technical issue, not able to access the data. Please try again later!!");
            setLoading(false);
        })

    }, []);

    const handleFilterSelect = id => {
        let tempActiveFilter;
        const newFilters = filters.map(filter => {
            filter.active = false;
            if(id === filter.id) {
                filter.active = !filter.active;
            }
            if(filter.active) {
                tempActiveFilter = filter.id;
            }
            return filter;
        });

        setFilters(newFilters);
        setActiveFilter(tempActiveFilter);
    };

    const showDetails = project => {
        setModalData(project);
        setModalVisibility(true);
    }

    const closeModal = () => {
        setModalData(null);
        setModalVisibility(false);
    }

    const goToPortfolioPage = (url) => {
        props.history.push(url);
    }

    let portfolioData = null;

    if(isLoading) {
        portfolioData = <Loader />;
    }

    if(!isLoading && error) {
        portfolioData = <h4 className={styles.Highlight}>{error}</h4>
    }

    if(!isLoading && !error && projects && projects.length > 0) {
        let projectList = projects.map(project => {
            return project;
        });;
    
        if(activeFilter !== "all") {
            projectList = projects.filter(project => {
                if(project.filters.includes(activeFilter)) {
                    return true;
                }
                return false;
            })
        }
    
        let projectSummary = null;
        if(modalData) {
            projectSummary = (
                <ProjectDetails projectSummary={modalData} closeModal={closeModal}></ProjectDetails>
            );
        }

        portfolioData = (
            <React.Fragment>
                <Modal show={showModal} closeModal={closeModal}>
                    {projectSummary}
                </Modal>
                <h1>Portfolio</h1>
                <div>Here are a few projects which I worked on during my entire career.</div>
                <div className={styles.FiltersContainer}>
                    <FilterList filters={filters} setActiveFilter={handleFilterSelect}></FilterList>
                </div>
                <div className={styles.FiltersContainer}>
                    <CardList showDetails={showDetails} cards = {projectList}></CardList>
                </div>
                <Button type="button" includeSvgAnimation={true} clicked={() => goToPortfolioPage('/about')}>
                        More about me
                        <FaArrowRight />
                </Button>
            </React.Fragment>
        )
    }

    if(modalData) {
        document.body.style.overflow = 'hidden';
    } else {
    document.body.style.overflow = 'unset';

    }

    return (
        <Fade cascade>
            <Layout>
                <div className={styles.Portfolio}>
                    {portfolioData}
                </div>
            </Layout>
        </Fade>
    );
};

export default Portfolio;