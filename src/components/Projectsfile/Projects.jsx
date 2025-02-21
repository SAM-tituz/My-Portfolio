import "./ProjectModule.css";
import React, { useState, useEffect } from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

function Project() {
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    {
      image: project1,
      title: "My Portfolio",
      description: "Created using React.",
      link: "https://example.com/great-path",
    },
    {
      image: project2,
      title: "Starry Night",
      description: "Poon Hill, Nepal",
      link: "https://example.com/starry-night",
    },
    {
      image: project3,
      title: "Path Of Peace",
      description: "Bojcin Forest, Serbia",
      link: "https://example.com/path-of-peace",
    },
    {
      image:project3,
      title:"working on it",
      description:"comming soon",
      
    }
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
              <p className="modal__info">{projects[activeModal].description}</p>
              <div className="modal__buttons">
                <a
                  href={projects[activeModal].link}
                  className="modal__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source code
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
