import React, { useState } from "react";
import "./SkillModule.css";
// -------icons-------------
import html from "../../assets/icons8-html-24.png";
import css from "../../assets/icons8-css-24.png";
import js from "../../assets/icons8-javascript-24.png";
import bootstrap from "../../assets/icons8-bootstrap-24.png";
import tailwind from "../../assets/icons8-tailwindcss-24.png";
import react from "../../assets/icons8-react-js-24.png";
import git from "../../assets/icons8-git-24.png";
import github from "../../assets/icons8-github-24.png";
import mongo from "../../assets/icons8-mongo-db-24.png";
import sql from "../../assets/icons8-sql-24.png";
import postman from "../../assets/icons8-postman-24.png";
import vite from "../../assets/icons8-vite-24.png";
import vs from "../../assets/icons8-vs-code-24.png";

// --------------------------------------------
const experience = [
  {
    title: "Frontend Developer",
    company: "Company:Skillrank",
    content:
      "During my three-month internship at SkillRank as a Frontend Developer, I worked extensively with Angular to build dynamic and user-friendly web applications. I collaborated with the team to develop responsive UI components, integrate APIs using Postman, and manage databases with MongoDB. This experience enhanced my skills in frontend development, debugging, and optimizing performance. I also gained valuable insights into agile workflows, team collaboration, and real-world project development, further strengthening my ability to create efficient and scalable web applications.",
  },
  {
    title: "Reason to hire me",
    company: "What Sets Me Apart.",
    content:
      "Aspiring React Frontend Developer passionate about crafting exceptional user experiences. I bring fresh perspectives, boundless ambition, and unconventional thinking to every project. My goal is to create digital magic through energetic, innovative work.  Let’s connect and collaborate to create engaging, efficient, and cutting-edge web solutions that push boundaries and inspire users.",
  },
];
const ExperienceCard = ({ title, company, content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`experience-card ${expanded ? "expanded" : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={{
        maxHeight: expanded ? "750px" : "180px", // Adjust height for expansion
        transition: "max-height 0.5s ease-in-out",
      }}
    >
      <h5 className="card-title mb-2">{title}</h5>
      <h6 className="card-subtitle mb-2 text-start">{company}</h6>
      <p className="card-text text-start">{content}</p>
    </div>
  );
};

function Skill() {
  return (
    <>
      <div className="background">
        <div className="spacer layer" />
        <section className="skills" id="skills">
          <h1>Skills</h1>
          <p className="p-3">Here are some of my skills on which I have learnt.</p>
          <div className="skill-container">
            {/* Frontend Skills */}
            <div className="skill-card">
              <h3>Frontend</h3>
              <div className="skill-list">
                <span className="skill-item">
                  <img src={html} alt="html icon" />
                  HTML
                </span>
                <span className="skill-item">
                  <img src={css} alt="css icon" />
                  CSS
                </span>
                <span className="skill-item">
                  <img src={js} alt="js icon" />
                  JavaScript
                </span>
                <span className="skill-item">
                  <img src={bootstrap} alt="bs icon" />
                  Bootstrap
                </span>
                <span className="skill-item">
                  <img src={react} alt="react icon" />
                  React Js
                </span>
                <span className="skill-item">
                  <img src={tailwind} alt="tailwind icon" />
                  Tailwind
                </span>
                {/* <span className="skill-item">Redux-Toolkit</span> */}
              </div>
            </div>
            {/* Other Skills */}
            <div className="skill-card">
              <h3>Others</h3>
              <div className="skill-list">
                <span className="skill-item">
                  <img src={git} alt="git icon" />
                  Git
                </span>
                <span className="skill-item">
                  <img src={github} alt="" /> GitHub
                </span>
                <span className="skill-item">
                  <img src={postman} alt="" />
                  Postman
                </span>
                <span className="skill-item">
                  <img src={vs} alt="" />
                  VS Code
                </span>
                <span className="skill-item">
                  <img src={vite} alt="" />
                  Vite
                </span>
                <span className="skill-item">
                  <img src={mongo} alt="" />
                  Mongo DB
                </span>
                <span className="skill-item">
                  <img src={sql} alt="" />
                  SQL
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="experience" id="experience">
          <h1>Experience</h1>
          <p className="p-3">
            Launching My Career: A Fresh Perspective on Front-End Engineering
          </p>
          <div className="experience-container">
            {experience.map((val, index) => (
              <ExperienceCard
                key={index}
                title={val.title}
                company={val.company}
                content={val.content}
              />
            ))}
          </div>
        </section>
        <div className="spacer layer1" />
      </div>
    </>
  );
}
export default Skill;
