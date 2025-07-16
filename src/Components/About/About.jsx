import "./About.css";
import ProfileCard from "./ProfileCard";

const About = () => {
  return (
    <>
      <div className="about">
        <h1>About me</h1>
        <div className="about-body">
          <div className="left-screen">
            <ProfileCard />
          </div>
          <div className="right-screen">
            <p>
              <b>Transforming Ideas into Reality</b>
            </p>
            <p className="bio">
              Computer Science graduate with hands-on experience building
              full-stack web applications and real-world projects. I’m
              passionate about solving problems, writing clean code, and
              creating seamless user experiences.
            </p>
            <div className="stats-section">
              <div className="stats-container">
                <div className="stat-box">
                  <h2>+2</h2>
                  <p>
                    Years of <br></br>Experience
                  </p>
                </div>
                <div className="stat-box">
                  <h2>+10</h2>
                  <p>
                    Projects <br></br>Completed
                  </p>
                </div>
                <div className="stat-box">
                  <h2>+20</h2>
                  <p>
                    Github <br></br>Contrubutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
