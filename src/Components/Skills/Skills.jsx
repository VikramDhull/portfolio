import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills-main">
        <h1>Skills</h1>
        <p className="tagline">technologies and tools i use</p>
        <div className="skills-data">
          <div className="skills">
            <h2>FRONTEND</h2>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
          <div className="skills">
            <h2>BACKEND</h2>
            <p>Java</p>
            <p>Node.js</p>
            <p>SQL</p>
            <p>MySQL</p>
            <p>MongoDB</p>
          </div>
          <div className="skills">
            <h2>FRAMEWORK/LIBRARIES</h2>
            <p>React</p>
            <p>Express.js</p>
            <p>Bootstrap</p>
            <p>Tailwind CSS</p>
            <p>Mongoose</p>
            <p>Spring Boot</p>
            <p>Java Swing</p>
          </div>
          <div className="skills">
            <h2>TOOLS</h2>
            <p>Git</p>
            <p>GitHub</p>
            <p>Docker</p>
            <p>VSCode</p>
            <p>Notion</p>
            <p>Figma</p>
            <p>Linux</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
