"use client";
import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          {/* Left Section */}
          <div className={styles.headerLeft}>
            <h1 className={styles.logo}>Stan</h1>
            <div className={styles.socialLinks}>
              <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          {/* Burger Menu */}
          <div className={styles.burger} onClick={toggleMenu}>
            {menuOpen ? "x" : "☰"}
          </div>

          {/* Navigation Links */}
          {menuOpen && (
            <nav className={`${styles.headerRight} ${menuOpen ? styles.menuOpen : ""}`}>
              <a className={styles.navItem} href="#projects">Projects</a>
              <a className={styles.navItem} href="#about">About</a>
              <a className={styles.navItem} href="#contact">Contact</a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
