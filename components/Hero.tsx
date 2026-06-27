"use client";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = "Divyansh Prajapati.";
    const el = nameRef.current;
    if (!el) return;
    const cursor = el.querySelector<HTMLSpanElement>(".cursor")!;
    let i = 0;
    const type = () => {
      if (i < text.length) {
        el.insertBefore(document.createTextNode(text[i]), cursor);
        i++;
        setTimeout(type, 68 + Math.random() * 40);
      }
    };
    const t = setTimeout(type, 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.grid} />
      <div className={styles.glow} />
      <p className={styles.terminal}>./portfolio</p>
      <h1 className={styles.name} ref={nameRef}>
        <span className={`${styles.cursor} cursor`} />
      </h1>
      <p className={styles.role}>
        AI & Data Science student{" "}
        <span>passionate about building modern web applications</span> — and solving real-world problems through code.
      </p>
      <a href="#projects" className={styles.cta}>View my work →</a>
      <div className={styles.scroll}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}