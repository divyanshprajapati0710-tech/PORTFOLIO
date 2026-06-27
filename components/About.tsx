import { skills } from "@/data/portfolio";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="fade-up">
        <p className={styles.sectionLabel}>ABOUT ME</p>

      <h2 className={styles.sectionTitle}>
      Building digital experiences
      <br />
     that make an <span>impact.</span>
     </h2>
      </div>
      <div className={`${styles.grid} fade-up`}>
        <div className={styles.text}>
          <p>Hi, I'm Divyansh, a curious developer who loves turning ideas into scalable and user-friendly applications. I enjoy working across the stack - from crafting clean interfaces to building robust backends and APIs.</p>
          <p>I'm passionate about problem solving, learning new technologies and building things that create real value. When l'm not coding, you'll find me exploring new tech, reading, or planning my next adventure.</p>
          <div className={styles.stats}>
            {[["3","Projects done"],["III Yr","Student"]].map(([n,l])=>(
              <div key={l} className={styles.stat}>
                <div className={styles.statNum}>{n}</div>
                <div className={styles.statLabel}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.skillsGrid}>
          {skills.map((s) => <div key={s} className={styles.skillTag}>{s}</div>)}
        </div>
      </div>
    </section>
  );
}