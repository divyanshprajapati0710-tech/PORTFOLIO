import { projects } from "@/data/portfolio";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="fade-up">
        <p className={styles.sectionLabel}>Projects</p>
        <h2 className={styles.sectionTitle}>Things I&apos;ve Built.</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.title} className={styles.card}>
            <div className={styles.thumb} style={{ background: p.bg }}>
              <span style={{ color: p.color }}>{p.initials}</span>
            </div>
            <div className={styles.body}>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
              <p className={styles.title}>{p.title}</p>
              <p className={styles.desc}>{p.desc}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}