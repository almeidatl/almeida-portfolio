import "./Projects.css";
import ProjectCard from "./small-components/ProjectCard.jsx";

const Projects = () => {
  return (
    <div className="container">
      <h2 className="title" id="projects-title projects">
        Trabalho recente
      </h2>
      <section className="projects-content">
        <ProjectCard
          projectName="ZALLI"
          projectLink="https://landing-page-zalli.vercel.app"
          backgroundImg="/zalli-card.png"
        />
        <ProjectCard
          projectName="JD"
          projectLink="https://jdeletrica.vercel.app/"
          backgroundImg="/jd-card.png"
        />
        <ProjectCard
          projectName="Card"
          projectLink="https://product-rev-card.vercel.app/"
          backgroundImg="/preview-card.png"
        />
        <ProjectCard
          projectName="Dr. NORMAN"
          projectLink="https://themanwhosaved.netlify.app/"
          backgroundImg="/dr-card.png"
        />
        {/* <ProjectCard 
                projectName='JS Doc' 
                projectLink = 'https://documentation-js.netlify.app/'
                backgroundImg = '/jsdoc-card.png' 
                />
                <ProjectCard 
                projectName='Survey Form' 
                projectLink = 'https://fcc-form-survey.netlify.app/'
                backgroundImg = '/survey-card.png' 
                /> */}
      </section>
    </div>
  );
};

export default Projects;
