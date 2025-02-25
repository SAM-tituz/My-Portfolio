import "./ProjectModule.css";
import React, { useState, useEffect } from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import projectsoon from "../../assets/projectsoon.png";

function Project() {
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    {
      image: project1,
      title: "My Portfolio",
      description: "My portfolio is a personal website built using React...",
      detaildescription: `My portfolio is a personal website built using React, Bootstrap, HTML, and CSS to showcase my skills, experiences, and projects.It serves as a digital space where I introduce myself, highlight my work, and provide ways to connect.
      One of the biggest challenges was designing an engaging and professional UI while ensuring the site was fully responsive across different devices. I overcame this by leveraging Bootstrap’s grid system and fine-tuning styles with CSS. Additionally, working with JSX posed some challenges, but through practice and debugging, I improved my understanding of React’s component-based structure.
      This project reflects my skills in frontend development, responsive design, and problem-solving, making it a great addition to my portfolio.`,
      link: "https://github.com/SAM-tituz/My-Portfolio",
    },

    {
      image: project2,
      title: "Login System Userlist",
      description: "The Login System is a user-friendly authentication...",
      detaildescription:
        "The Login System is a user-friendly authentication platform built with Angular and Bootstrap, designed to provide seamless user registration, login, and homepage navigation. It features authentication guards to restrict unauthorized access and a custom password match directive for secure registration. One of the main challenges faced was implementing authentication guards to protect routes, which was resolved using Angular’s built-in security mechanisms. Additionally, a password match validation directive was developed to enhance form validation, ensuring a smooth and secure user experience.",
      link: "https://github.com/SAM-tituz/Userlist",
    },
    {
      image: project3,
      title: "Path Of Peace",
      description: "The Weather App is a dynamic and interactive application... ",
      detaildescription:
        "The Weather App is a dynamic and interactive application built using HTML, CSS, and JavaScript, designed to fetch and display real-time weather data. By integrating an external API, the app allows users to search for any city and retrieve essential weather details like temperature, humidity, and conditions. The key learning outcome from this project was mastering API fetching using JavaScript, handling asynchronous requests, and efficiently displaying the fetched data for a seamless user experience.",
      link: "https://github.com/SAM-tituz/simple-weather-app",
    },
    {
      image: projectsoon,
      title: "working on it",
      description: "coming soon",
      detaildescription: "coming soon",
      link: "https://example.com/path-of-peace",
    },
  ];
  //
  useEffect(() => {
    if (activeModal !== null) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [activeModal]);

  // Handle modal close with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveModal(null);
      }
    };

    if (activeModal !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  return (
    <div className="background__project">
      <div className="container__projects" id="projects">
        <div className="project__title">
          <h1>Projects</h1>
          <h3>Here are some of my projects.</h3>
        </div>

        <div className="card__container">
          {projects.map((project, index) => (
            <article className="card__article" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="card__img"
              />
              <div className="card__data">
                <h2 className="card__title">{project.title}</h2>
                <span className="card__description">{project.description}</span>
                <p
                  onClick={() => setActiveModal(index)}
                  className="card__button"
                  aria-label={`Read more about ${project.title}`}
                >
                  Read More
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Modal */}
        {activeModal !== null && (
          <div
            className={`modal ${activeModal !== null ? "active-modal" : ""}`}
            onClick={() => setActiveModal(null)}
          >
            <div className="modal__card" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal__close"
                onClick={() => setActiveModal(null)}
              >
                ✖
              </button>
              <img
                src={projects[activeModal].image}
                alt={projects[activeModal].title}
                className="modal__img"
              />
              <h3 className="modal__name">{projects[activeModal].title}</h3>
              <p className="modal__info">
                {/* inline break function */}
                {projects[activeModal].detaildescription
                  .split("\n")
                  .map((line, index) =>
                    line.trim() ? <p key={index}>{line}</p> : <br key={index} />
                  )}
              </p>
              <div className="modal__buttons">
                <a
                  href={projects[activeModal].link}
                  className="modal__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View code
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
