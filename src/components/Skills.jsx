import './Skills.css'

const Skills = () => {
  return (
    <div className="container">
        <h2 className="title" id='skills'>
            Skills
        </h2>
        <section className="skills-content" >
          {/* Skill Card 1 */}
          <div className="skill-card">
            <h2>HTML</h2>
            <p>Clear, accessible, and well-organized web pages.</p>
          </div>
          {/* Skill Card 2 */}
          <div className="skill-card">
            <h2>CSS</h2>
            <p>Appealing layouts and an awesome user experience.</p>
          </div>
          {/* Skill Card 3 */}
          <div className="skill-card">
            <h2>JavaScript</h2>
            <p>Adding that extra touch of interactivity.</p>
          </div>
          {/* Skill Card 4 */}
          <div className="skill-card">
            <h2>Responsive Design</h2>
            <p>Optimal viewing on various devices.</p>
          </div>
        </section>
    </div>
  );
};

export default Skills
