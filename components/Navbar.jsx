import React, { useState } from "react";
import styles from "../styles/Navbar.module.scss";

import { BiMenu } from "react-icons/bi";

import Link from "next/link";

import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <Link href="/">
          <a>
            <h2>BRKIC</h2>
          </a>
        </Link>
      </div>
      <div className={styles.right}>
        <BiMenu
          className={styles.menuOpener}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <div
          className={styles.links}
          style={{ display: menuOpen ? "flex" : "none" }}
        >
          <Link href="/">
            <a style={{ opacity: router.pathname === "/" ? 1 : 0.6 }}>WORK</a>
          </Link>
          <Link href="/contact">
            <a style={{ opacity: router.pathname === "/contact" ? 1 : 0.6 }}>
              CONTACT
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
