import './ProjectCard.css'
import '../mobile.css'


const ProjectCard = (props) =>{
    return(
        <>
            <div className="container">
                <a target='_blank' href={props.projectLink}>
                    <div className="project-card">
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