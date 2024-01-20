import './ProjectCard.css'

const ProjectCard = (props) =>{
    return(
        <>
            <div className="container">
                <a target='_blank' href={props.projectLink}>
                    <div className="project-card" style={{backgroundImage: `url(${props.backgroundImg})`}}>
                        
                    
                    </div>
                </a>
            </div>
        </>
    )
}

export default ProjectCard
    