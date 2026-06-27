"use client";

import styles from "./Contact.module.css";
import {
  Mail,
  Code,
  Share2,
  MapPin,
  Download,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.glow}></div>

      <p className="section-label fade-up">CONTACT</p>

      <h2 className={`section-title ${styles.title} fade-up`}>
        Let's Connect.
      </h2>

      <p className={`${styles.subtitle} fade-up`}>
        I'm always open to internships, collaborations and exciting
        opportunities. Feel free to reach out through any of the platforms
        below.
      </p>

      <div className={`${styles.grid} fade-up`}>

        <a
          href="mailto:yourmail@gmail.com"
          className={styles.card}
        >
          <Mail className={styles.icon} />

          <div>
            <h3>Email</h3>
            <p>divyanshprajapati@gmail.com</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/divyansh-prajapati-510bb9385/"
          target="_blank"
          className={styles.card}
        >
          <Share2 className={styles.icon} />

          <div>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/divyansh</p>
          </div>
        </a>

        <a
          href="https://github.com/divyanshprajapati0710-tech"
          target="_blank"
          className={styles.card}
        >
          <Code className={styles.icon} />

          <div>
            <h3>GitHub</h3>
            <p>github.com/divyansh</p>
          </div>
        </a>

        <div className={styles.card}>
          <MapPin className={styles.icon} />

          <div>
            <h3>Location</h3>
            <p>Mumbai, Maharashtra</p>
          </div>
        </div>

      </div>

      <div className={`${styles.buttons} fade-up`}>

        <a
          href="mailto:yourmail@gmail.com"
          className={styles.primary}
        >
          <Mail size={18} />
          Email Me
        </a>

        <a
          href="/resume.pdf"
          className={styles.secondary}
        >
          <Download size={18} />
          Resume
        </a>

      </div>
    </section>
  );
}