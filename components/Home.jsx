import React from "react";
import styles from "../styles/Home.module.scss";
import Head from "next/head";

import Project from "./Project";
import About from "./About";

export default function Home() {
  const projects = [
    {
      name: "Honeycomb",
      type: "Web Application",
      personal: true,
      imageUrl: "https://i.imgur.com/FqnN3hO.png",
      link: "https://baustela2.netlify.app/",
    },
    {
      name: "eCommerce",
      type: "Web Application",
      personal: true,
      imageUrl: "https://i.imgur.com/sgMLhPd.png",
      link: "https://bakmazon.netlify.app/",
    },
    {
      name: "Minty Solutions",
      type: "Web Application",
      personal: false,
      imageUrl: "https://i.imgur.com/HdcEhpC.png",
      link: "https://mintysolutions.com/",
    },
  ];

  return (
    <div className={styles.home}>
      <Head>
        <link
          rel="preload"
          href="/fonts/KeplerStd/KeplerStd-Regular.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/KeplerStd/KeplerStd-Medium.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/KeplerStd/KeplerStd-Bold.otf"
          as="font"
          crossOrigin=""
        />
        <title>Home</title>
      </Head>
      <div className={styles.title}>
        <h1>BRKIC</h1>
        <p>Full Stack Developer and Freelancer.</p>
      </div>
      <div className={styles.work}>
        {projects.map((project, i) => {
          return (
            <Project key={i} project={{ ...project, ...{ index: i + 1 } }} />
          );
        })}
      </div>
      <About />
    </div>
  );
}
