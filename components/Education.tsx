import { education } from "@/data/portfolio";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className="fade-up">
        <p className={styles["section-label"]}>Education</p>
        <h2 className={styles["section-title"]}>Where I learned to think.</h2>
      </div>
      <div className={`${styles.timeline} fade-up`}>
        {education.map((e) => (
          <div key={e.degree} className={styles.card}>
            <p className={styles.year}>{e.year}</p>
            <p className={styles.degree}>{e.degree}</p>
            <p className={styles.school}>{e.school}</p>
            <p className={styles.desc}>{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}