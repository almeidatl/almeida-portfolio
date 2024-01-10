import './Projects.css'
import './mobile.css'

import ProjectCard from './small-components/ProjectCard.jsx'

const Projects = () =>{
    return(
        <div className="container">
            <h2 className="title" id="projects">My recent work</h2>
            <section className="projects-content" >
                <ProjectCard projectName='ZALLI' projectLink = 'https://landing-page-zalli.vercel.app' />
                <ProjectCard projectName='JD' projectLink = 'https://' />
                <ProjectCard projectName='Card' projectLink = 'https://product-rev-card.vercel.app/' />
                <ProjectCard projectName='Dr. NORMAN' projectLink = 'https://themanwhosaved.netlify.app/' />
                <ProjectCard projectName='JS Doc' projectLink = 'https://documentation-js.netlify.app/' />
                <ProjectCard projectName='Survey Form' projectLink = 'https://fcc-form-survey.netlify.app/' />
            </section>
        </div>
    )
}

export default Projects