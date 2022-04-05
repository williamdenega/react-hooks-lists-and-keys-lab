import React from "react";

function ProjectItem({ name, about, technologies }) {


  const techRender = technologies.map(language => (
    <span key={language}> {language}</span>


  ))

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techRender}
      </div>
    </div>
  );
}

export default ProjectItem;
