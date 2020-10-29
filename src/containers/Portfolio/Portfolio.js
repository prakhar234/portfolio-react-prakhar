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
        },
        {
            name: 'karma',
            id: 'karma',
            displayName: 'Karma',
            active: false
        },
        {
            name: 'mocha',
            id: 'mocha',
            displayName: 'Mocha',
            active: false
        },
        {
            name: 'jest',
            id: 'jest',
            displayName: 'Jest',
            active: false
        },
        {
            name: 'agile',
            id: 'agile',
            displayName: 'Agile',
            active: false
        }
    ];

    let tempProjects = [
        {
            name: "Nederlandse Loterij",
            id: 0,
            filters: ["vuejs", "javascript", "responsive", "csspreprocessors", "es6", "storybook", ".net", "karma", "mocha", "agile"],
            description: "Nederlandse Loterij is a web application developed using .net and Vuejs. This application provides multiple portals for users to register themselves as a player and place their bets for the upcoming games. It is responsive in nature so it adapts itself to any device. I was involved as the only front end developer initially and when the fron end team grew, I worked as the front lead in the team.",
            duration: "August 2019 - present",
            url: "https://www.toto.nl",
            active: true,
            imgUrl: "/toto-img.jpg",
            githubUrl: undefined
        },
        {
            name: "My Portfolio",
            id: 1,
            filters: ["react", "javascript", "responsive", "es6", "firebase"],
            description: "My Portfolio is this app which you are viewing right now. It is developed on Reactjs. This web application is created to showcase my skills in Reactjs. You can find the link to the github repository below and check my code. ",
            duration: "8 days",
            url: undefined,
            active: true,
            imgUrl: "/my-portfolio.jpeg",
            githubUrl: undefined
        },
        {
            name: "Actiz",
            id: 2,
            filters: ["angularjs", "net", "javascript", "responsive", "karma", "agile"],
            description: "Actiz - A web application which offers a rich and up-to-date insight into the performance of your healthcare organization and of the industry. In the online reporting environment you can continuously analyze your benchmark data, zoom in to a detailed level and create your own reports. I worked as the only front end developer in this project and was primarily involved in enhancing the performance of the website and adding new features to it.",
            duration: "June 2019 - July 2019",
            url: 'https://kijkopdata.actiz.nl/',
            active: true,
            imgUrl: "/actiz.jpeg",
            githubUrl: undefined
        },
        {
            name: "AIDA",
            id: 3,
            filters: ["react", "javascript", "responsive", "es6", "csspreprocessors", "jest", "agile"],
            description: "AIDA - A portal which is used as a whitelisted product for many vendors. It is based on artificial intelligence to give you suggestions about any question which you ask to the AI bot. It can be customized for any industry- ecommerce, healthcare, telecom, etc. I worked as the only front end developer and was involved in enhancing the performance of the portal and adding new features to it. Unfortunately image and url can not be provided because of policies.",
            duration: "Febuary 2019 - June 2019",
            url: undefined,
            active: true,
            imgUrl: undefined,
            githubUrl: undefined
        },
        {
            name: "Caseys Pizza Store",
            id: 4,
            filters: ["vuejs", "hybrisintegration", "javascript", "responsive", "es6", "csspreprocessors", "karma", "agile"],
            description: "Caseys Pizza Store is an application to provide users a portal to buy pizza and they can either schedule a pickup at the store and get it delivered to their home. Worked as a lead frontend developer. I handled the frontend team and assigned them user stories basedon the sprint. Actively involved in estimation sessions and picking up thestories aligning with the entire development goal. Majorly involved withintegrating vue files in jsps keeping in mind the performance of the pages.",
            duration: "September 2018 - December 2018",
            url: "https://www.caseys.com",
            active: true,
            imgUrl: "/caseys.jpeg",
            githubUrl: undefined
        },
        {
            name: "Milepost - Cruising Store",
            id: 5,
            filters: ["javascipt", "hybrisintegration", "jquery", "responsive", "csspreprocessors", "agile"],
            description: "Milepost - Cruising Store is a web application which helps customers in booking a cruise for their holidays. It eventually targetted in pulling out the brokerage cost to minimal between the cruise company and customers and provided a platform for users to directly book the website. Worked as a lead front end developer fromoffshore. I handled the frontend team and assigned them user stories based onthe sprint along with focusing on the front end architecture and development ofthe stories. Actively involved in estimation sessions and picking up thestories aligning with the entire development goal. Unfortunately project is not live now because of some contractual problems.",
            duration: "January 2017 - September 2018",
            url: undefined,
            active: true,
            imgUrl: "/cruising-store.jpg",
            githubUrl: undefined
        },
        {
            name: "Lilly - LTG",
            id: 6,
            filters: ["angular", "node", "javascript", "responsive", "es6", "csspreprocessors", "karma", "agile"],
            description: "Lilly - LTG is a web application developed specifically for tablet. It handled the patients, doctors, receptionists and representative interaction. A person can register themselves as patients or representatives for case studies using the application at the hospital which helped in providing easy access to the patients or representatives data.",
            duration: "Novermber 2016 - December 2016",
            url: undefined,
            active: true,
            imgUrl: undefined,
            githubUrl: undefined
        },
        {
            name: "Lilly - Oncology",
            id: 7,
            filters: ["react", "node", "javascript", "responsive", "es6", "csspreprocessors", "agile"],
            description: "Lilly - Oncology is a responsive website for showing ongoing or completed studies (research) in the oncology department of Lilly.",
            duration: "August 2016 - November 2016",
            url: "https://www.lillyoncology.com/",
            active: true,
            imgUrl: "/lilly-oncology.jpeg",
            githubUrl: undefined
        },
        {
            name: "AT & T - BC Services",
            id: 8,
            filters: ["angularjs", "spring", "javascript", "responsive", "karma", "agile"],
            description: "AT & T - BC Services is a B2C product developed to create a ticket management system. A customer can create, read , delete and see the progress of the ticket raised by him/her. These tickets are related to the specific services which they bought from AT & T. Admins of the portal can take appropriate action on the ticket raised by a customer.",
            duration: "Febuary 2014 - August 2016",
            url: undefined,
            active: true,
            imgUrl: "/bc-services.jpeg",
            githubUrl: undefined
        },
        {
            name: "AT & T - Partner Exchange",
            id: 9,
            filters: ["jquery", "atg", "javascript", "responsive", "agile"],
            description: "AT & T - Partner Exchange is a B2B e-commerce project. Itaimed at creating a website for selling the services provided by AT &T todifferent vendors.    ",
            duration: "Febuary 2013 - Febuary 2014",
            url: "https://partnerexchange.att.com/welcome/s/",
            active: true,
            imgUrl: "/partner-exchange.jpeg",
            githubUrl: undefined
        },
        {
            name: "Pub-quiz",
            id: 10,
            filters: ["angular", "javascript", "responsive", "es6", "firebase"],
            description: `Pub Quiz is a web application developed using Angular 9 and firebase as serverless solution for the database. This application can be used to easily setup a quiz and have fun among the team. It can handle large teams(more than 200 people at a time) as well.
            Pub Quiz is responsive as well in nature. However it lacks feature like admin login and user login as of now. They will be developed and added soon so that users can not have access to the answers array. Currently they can if they are smart enough to inspect. You can easily change the theme of the quiz and add sections to it by going to the data.json file and adding sections and questions there and importing it in firebase real time database.`,
            duration: "8 days",
            url: 'http://pub-quiz-82982.web.app/',
            active: true,
            imgUrl: "/pub-quiz.jpeg",
            githubUrl: undefined
        }
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