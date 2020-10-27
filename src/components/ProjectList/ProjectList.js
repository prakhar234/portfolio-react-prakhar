import React from "react";

import ProjectCard from "./ProjectCard/ProjectCard";
import styles from "./ProjectList.module.css"

const ProjectList = props => {
    const projectList = props.projects.map(project => {
        return <ProjectCard 
                    key={project.id} 
                    name={project.name}
                    imgUrl={project.imgUrl}
                    showDetails = {() => props.showDetails(project)}
                    />;
    });
    return (
        <div className={styles.ProjectList}>
            {projectList}
        </div>
    )
};

export default ProjectList;