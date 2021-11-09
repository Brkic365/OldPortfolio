import React from "react";
import styles from "../styles/Home.module.scss";
import Head from "next/head";

import Project from "./Project";
import About from "./About";

export default function Home({ projects }) {
  console.log(projects);

  const projects2 = [
    {
      name: "Youtube",
      type: "Web Application",
      personal: false,
      imageUrl:
        "https://cdn.vox-cdn.com/thumbor/szR7Ec1Qjx3ku0RPrpriEXM-Ze0=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/65784178/homepage.0.jpeg",
      link: "https://www.youtube.com/",
    },
    {
      name: "Youtube",
      type: "Web Application",
      personal: false,
      imageUrl:
        "https://cdn.vox-cdn.com/thumbor/szR7Ec1Qjx3ku0RPrpriEXM-Ze0=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/65784178/homepage.0.jpeg",
      link: "https://www.youtube.com/",
    },
    {
      name: "Youtube",
      type: "Web Application",
      personal: true,
      imageUrl:
        "https://cdn.vox-cdn.com/thumbor/szR7Ec1Qjx3ku0RPrpriEXM-Ze0=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/65784178/homepage.0.jpeg",
      link: "https://www.youtube.com/",
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
        {projects2.map((project, i) => {
          return (
            <Project key={i} project={{ ...project, ...{ index: i + 1 } }} />
          );
        })}
      </div>
      <About />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const req = await fetch(`http://localhost:3000/projects.json`);
  const projects = await req.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
