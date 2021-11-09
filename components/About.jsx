import React from "react";
import styles from "../styles/About.module.scss";

import Link from "next/link";

import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";

function About() {
  return (
    <div className={styles.about}>
      <h1>ABOUT ME</h1>
      <p>Ja san brkic.</p>
      <p>Volim raditi za dobre pare :).</p>
      <Link href="/contact" passHref={true}>
        <a>{"LET'S WORK TOGETHER!"}</a>
      </Link>
      <div className={styles.bottomBar}>
        <div className={styles.left}>
          <p>©Brkic 2021</p>
        </div>
        <div className={styles.right}>
          <AiOutlineInstagram className={styles.icon} />
          <BsFacebook className={styles.icon} />
          <BsTwitter className={styles.icon} />
          <AiFillGithub className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default About;
