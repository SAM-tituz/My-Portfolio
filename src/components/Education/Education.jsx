import { useState } from "react";
import React from "react";
import "./EducationModule.css";

const educations = [
  {
    schoolname: "Francis Xavier Engineering College",
    studyinfo:
      "Bachelor of Engineering - BE,Electronics and Communication Engineering",
    year: "2019-2023",
    grade: "8.4 CGPA",
    content: `With a strong foundation in Electronics and Communication Engineering (ECE), I have developed analytical thinking and problem-solving skills that are essential in the tech industry. My academic journey has provided me with a deep understanding of engineering principles, which I now integrate with my passion for IT. This blend of knowledge enables me to approach challenges with both technical precision and innovative solutions, making me a versatile professional ready to contribute effectively to the evolving digital landscape.`,
  },
  {
    schoolname: "M.K.V.K Matric Higher Secondary School",
    studyinfo: "HSC- XII(std) (BIO-MATHS)",
    year: "2018-2019",
    grade: "60%",
    content:
      "I completed my Higher Secondary Education (HSC) in Bio-Maths, which gave me valuable insights into the real world and strengthened my ability to make hard, critical decisions. The challenges I faced during this period helped me develop a problem-solving mindset and adaptability, shaping me into a more resilient and analytical thinker.",
  },
  {
    schoolname: "M.K.V.K Matric Higher Secondary School",
    studyinfo: "SSLC - Xth(std)",
    year: "2016-2017",
    grade: "84%",
    content:
      "This phase that laid the foundation for my decision-making-skills. It was during this time that I learned the importance of real-world competition, adaptability, and perseverance. This period helped me develop discipline, curiosity, and resilience, shaping me into someone who thrives in challenging environments and constantly seeks growth.",
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
          maxHeight: expanded ? "700px" : "250px", // Adjust height for expansion
          transition: "max-height .5s ease-in-out",
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
