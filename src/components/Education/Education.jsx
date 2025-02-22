import { useState } from "react";
import React from "react";
import "./EducationModule.css";

const educations = [
  {
    schoolname: "Francis xavier engineering college",
    studyinfo: "bachelor of engineering",
    year: "2019-2023",
    grade: "85%",
    content: `With a comprehensive front-end development course under my belt, I've cultivated expertise in HTML, CSS, and JavaScript. This educational journey has empowered me to craft visually captivating, responsive websites and dynamic web applications. Complementing this, I've refined my abilities through hands-on projects using React.js, a powerful tool for contemporary web development. These experiences have enriched my understanding of front-end development, igniting my passion to design user-centric and captivating digital solutions.`,
  },
  {
    schoolname: "HTML Developer",
    studyinfo: "Sprite Software",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores qui aut nobis repellat totam expedita adipisci, impedit ullam quae dolore hic deserunt velit quisquam! Laboriosam vel pariatur repudiandae non ullam quibusdam hic sunt consequatur, quam deserunt corrupti culpa explicabo. Placeat natus, amet dolorum doloribus asperiores quasi doloremque fugiat dignissimos accusantium?",
  },
  {
    schoolname: "HTML Developer",
    studyinfo: "Sprite Software",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores qui aut nobis repellat totam expedita adipisci, impedit ullam quae dolore hic deserunt velit quisquam! Laboriosam vel pariatur repudiandae non ullam quibusdam hic sunt consequatur, quam deserunt corrupti culpa explicabo. Placeat natus, amet dolorum doloribus asperiores quasi doloremque fugiat dignissimos accusantium?",
  },
];

const EducationCard = ({ schoolname, studyinfo, grade, year, content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`education-card ${expanded ? "expanded" : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={
        {
          // maxHeight: expanded ? "500px" : "200px", // Adjust height for expansion
          // transition: "max-height .5s ease-in-out",
        }
      }
    >
      <h5 className="card-title  text-start">{schoolname}</h5>
      <h6 className="card-subtitle mb-1 text-start">{studyinfo}</h6>
      <h6 className="  text-start">{year}</h6>
      <div className="text-start ">
        <h6 className="text-start">Gard:{grade}</h6>
      </div>
      <p className="card-text text-start">{content}</p>
    </div>
  );
};
function Education() {
  return (
    <section className="education" id="education">
      <h1 className="mb-3">Education</h1>
      <p className="mb-4 ">
        My education has been a journey of self-discovery and growth. My
        educational details are as follows.
      </p>
      <div className="education-container">
        {educations.map((val, index) => (
          <EducationCard
            key={index}
            schoolname={val.schoolname}
            studyinfo={val.studyinfo}
            year={val.year}
            grade={val.grade}
            content={val.content}
          />
        ))}
      </div>
    </section>
  );
}
export default Education;
