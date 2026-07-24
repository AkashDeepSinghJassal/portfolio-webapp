"use client";

import { Reveal } from "@/components/Motion";
import { site } from "@/config/site";

import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <Reveal as="p" className="section-label" direction="none" delay={0.05}>
          About
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.1}>
          Engineer for systems that span machines
        </Reveal>
        <Reveal className={styles.copy} delay={0.18}>
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <Reveal as="p" className={styles.meta} delay={0.28} direction="none">
          Based in {site.location} · {site.email}
        </Reveal>
      </div>
    </section>
  );
}
