import './Projects.css'
import ProjectCard from './small-components/ProjectCard.jsx'

const Projects = () =>{
    return(
        <div className="container">
            <h2 className="title" id="projects">My recent work</h2>
            <section className="projects-content" >
                <ProjectCard 
                projectName='ZALLI' 
                projectLink = 'https://landing-page-zalli.vercel.app'
                backgroundImg = '/public/zalli-card.png'
                />
                <ProjectCard 
                projectName='JD' 
                projectLink = 'https://jdeletrica.vercel.app/'
                backgroundImg = '/public/jd-card.png' 
                />
                <ProjectCard 
                projectName='Card' 
                projectLink = 'https://product-rev-card.vercel.app/'
                backgroundImg = '/public/preview-card.png' 
                />
                <ProjectCard 
                projectName='Dr. NORMAN' 
                projectLink = 'https://themanwhosaved.netlify.app/' 
                backgroundImg = '/public/dr-card.png'
                />
                <ProjectCard 
                projectName='JS Doc' 
                projectLink = 'https://documentation-js.netlify.app/'
                backgroundImg = '/public/jsdoc-card.png' 
                />
                <ProjectCard 
                projectName='Survey Form' 
                projectLink = 'https://fcc-form-survey.netlify.app/'
                backgroundImg = '/public/survey-card.png' 
                />
            </section>
        </div>
    )
}

export default Projects