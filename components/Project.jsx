import React from "react";
import styles from "../styles/Project.module.scss";

import Link from "next/link";

function Project({ project }) {
  return (
    <div
      className={`${styles.project} ${
        project.index % 2 === 0 && styles.reverseProject
      }`}
    >
      <h1>00{project.index}</h1>
      <div className={styles.title}>
        <h4>{project.name}</h4>
        <p>
          {project.type}
          {project.personal && (
            <p style={{ marginTop: "0rem" }}>Personal Project</p>
          )}
        </p>
        <Link href={project.link} passHref={true}>
          <a>VISIT</a>
        </Link>
      </div>

      <Link href={project.link} passHref={true}>
        <img src={project.imageUrl} />
      </Link>
    </div>
  );
}

export default Project;
