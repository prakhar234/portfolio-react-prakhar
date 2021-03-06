import React from "react";

import styles from "./ProjectDetails.module.css";
import Button from "../UI/Button/Button";
import { ReactComponent as ExternalLink } from '../../assets/svgs/external-link.svg';

const ProjectDetails = props => {
    const { projectSummary } = props;
    const technologyList = projectSummary.filters.map(technology => {
        return <li key={technology}>{technology}</li>;
    })

    let link = null;
    if(projectSummary.url) {
        link = <a href={projectSummary.url} className={styles.Link} target="_blank" rel="noopener noreferrer">Check Application <ExternalLink /></a>;
    }
    return (
        <React.Fragment>
            <h4 className={styles.Heading}>{ projectSummary.name }</h4>
            <div className={styles.ProjectDetails}>
                <p>{ projectSummary.description }</p>
                <div className={styles.Duration}>
                    <span>Duration: </span>
                    <span>{ projectSummary.duration} </span>
                </div>
                <div className={styles.Label}>Technologies: </div>
                <ul className={styles.Technologies}>
                    {technologyList}
                </ul>
                <div className={styles.ButtonSection}>
                    <Button type="button" clicked={props.closeModal}>Close</Button>
                    {link}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProjectDetails;