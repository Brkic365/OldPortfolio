import React from "react";
import styles from "../styles/About.module.scss";

import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className={styles.about}>
      <h1>ABOUT ME</h1>
      <p>
        I am Antonio Brkic, a freelance full stack web developer with various
        skills and passion to learn even more.
      </p>
      <p>
        My passion for web development started very early and I still have it. I
        enjoy every project and make sure that my client enjoys my work even
        more.
      </p>
      <Link href="/contact" passHref={true}>
        <a>{"LET'S WORK TOGETHER!"}</a>
      </Link>
      <div className={styles.bottomBar}>
        <div className={styles.left}>
          <p>©Brkic 2021</p>
        </div>
        <div className={styles.right}>
          <Link href="https://www.linkedin.com/in/antonio-brkic-923137226/" passHref={true}>
            <FaLinkedin className={styles.icon} />
          </Link>
          <Link href="https://github.com/Brkic365" passHref={true}>
            <AiFillGithub className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
