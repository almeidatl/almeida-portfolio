import React from 'react'
import './ProjectCard.css'


const ProjectCard = (props) =>{
    return(
        <>
            <div className="container">
                <a target='_blank' href={props.projectLink}>
                    <div className="projectCard">
                        <h1 className="portfolioTitle">
                            {props.projectName}
                        </h1>
                    
                    </div>
                </a>
            </div>
        </>
    )
}

export default ProjectCard