import React, { useState } from "react";
import {Fade} from 'react-awesome-reveal';

import Layout from "../../components/Layout/Layout";
import FilterList from "../../components/FilterList/FilterList";
import ProjectList from "../../components/ProjectList/ProjectList";
import styles from "./Portfolio.module.css";
import Modal from "../../components/UI/Modal/Modal";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";

const Portfolio  = props => {

    let tempFilters = [
        {
            name: 'all',
            id: 'all',
            displayName: 'All',
            active: true
        },
        {
            name: 'react',
            id: 'react',
            displayName: 'ReactJs',
            active: false
        },
        {
            name: 'angular',
            id: 'angular',
            displayName: 'Angular',
            active: false
        },
        {
            name: 'vuejs',
            id: 'vuejs',
            displayName: 'Vuejs',
            active: false
        },
        {
            name: 'javascript',
            id: 'javascript',
            displayName: 'Javascript',
            active: false
        },
        {
            name: 'angularjs',
            id: 'angularjs',
            displayName: 'AngularJS v1',
            active: false
        },
        {
            name: 'jquery',
            id: 'jquery',
            displayName: 'jQuery',
            active: false
        },
        {
            name: 'responsive',
            id: 'responsive',
            displayName: 'Responsive',
            active: false
        },
        {
            name: 'csspreprocessors',
            id: 'csspreprocessors',
            displayName: 'Less/Sass',
            active: false
        },
        {
            name: 'node',
            id: 'node',
            displayName: 'Nodejs',
            active: false
        }
    ];

    let tempProjects = [
        {
            name: "Nederlandse Loterij",
            id: 0,
            filters: ["vuejs", "javascript", "responsive", "csspreprocessors", "es6", "storybook", ".net"],
            description: "Nederlandse Loterij",
            duration: "August 2019 - present",
            url: "https://www.toto.nl",
            active: true,
            imgUrl: "/toto-img.jpg"
        },
        {
            name: "My Portfolio",
            id: 1,
            filters: ["react", "javascript", "responsive", "es6", "firebase"],
            description: "My Portfolio",
            duration: "8 days",
            url: undefined,
            active: true,
            imgUrl: "/toto-img.jpeg"
        },
        {
            name: "Actiz",
            id: 2,
            filters: ["angularjs", "net", "javascript", "responsive"],
            description: "Actiz",
            duration: "June 2019 - July 2019",
            url: 'https://kijkopdata.actiz.nl/',
            active: true,
            imgUrl: "/toto-img.jpeg"
        },
        {
            name: "AIDA",
            id: 3,
            filters: ["react", "javascript", "responsive", "es6", "csspreprocessors"],
            description: "AIDA",
            duration: "Febuary 2019 - June 2019",
            url: undefined,
            active: true,
            imgUrl: "/toto-img.jpeg"
        },
        {
            name: "Caseys Pizza Store",
            id: 4,
            filters: ["vuejs", "hybrisintegration", "javascript", "responsive", "es6", "csspreprocessors"],
            description: "Caseys Pizza Store",
            duration: "September 2018 - December 2018",
            url: undefined,
            active: true,
            imgUrl: "/toto-img.jpeg"
        },
        {
            name: "Milepost - Cruising Store",
            id: 5,
            filters: ["javascipt", "hybrisintegration", "jquery", "responsive", "csspreprocessors"],
            description: "Milepost - Cruising Store",
            duration: "January 2017 - September 2018",
            url: undefined,
            active: true
        },
        {
            name: "Lilly - LTG",
            id: 6,
            filters: ["react", "node", "javascript", "responsive", "es6", "csspreprocessors"],
            description: "Lilly - LTG",
            duration: "Novermber 2016 - December 2016",
            url: undefined,
            active: true,
            imgUrl: "/toto-img.jpeg"
        },
        {
            name: "Lilly - Oncology",
            id: 7,
            filters: ["react", "node", "javascript", "responsive", "es6", "csspreprocessors"],
            description: "Lilly - Oncology",
            duration: "August 2016 - November 2016",
            url: undefined,
            active: true,
            imgUrl: "/toto-img.jpeg"
        },
        {
            name: "AT & T - BC Services",
            id: 8,
            filters: ["angularjs", "spring", "javascript", "responsive"],
            description: "AT & T - BC Services",
            duration: "Febuary 2014 - August 2016",
            url: undefined,
            active: true,
            imgUrl: "/toto-img.jpeg"
        },
        {
            name: "AT & T - Partner Exchange",
            id: 9,
            filters: ["jquery", "atg", "javascript", "responsive"],
            description: "AT & T - Partner Exchange",
            duration: "Febuary 2013 - Febuary 2014",
            url: undefined,
            active: true,
            imgUrl: "/toto-img.jpeg"
        },
    ];

    const [filters, setFilters] = useState(tempFilters);
    const [projects, setProjects] = useState(tempProjects);
    const [activeFilter, setActiveFilter] = useState("all");
    const [showModal, setModalVisibility] = useState(false);
    const [modalData, setModalData] = useState(null);

    // setProjects(tempProjects);
    // setFilters(tempFilters);

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

    return (
        <Fade cascade>
            <Layout>
                <div className={styles.Portfolio}>
                    <Modal show={showModal} closeModal={closeModal}>
                        {projectSummary}
                    </Modal>
                    <h1>Portfolio</h1>
                    <div>Here are a few projects which I worked on during my entire career.</div>
                    <div className={styles.FiltersContainer}>
                        <FilterList filters={filters} setActiveFilter={handleFilterSelect}></FilterList>
                    </div>
                    <div className={styles.FiltersContainer}>
                        <ProjectList showDetails={showDetails} projects = {projectList}></ProjectList>
                    </div>
                </div>
            </Layout>
        </Fade>
    );
};

export default Portfolio;