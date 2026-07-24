"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { certifications } from "@/config/certifications";
import { skills } from "@/config/skills";

import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="shell">
        <Reveal as="p" className="section-label" direction="none">
          Skills
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.08}>
          Tools of the stack
        </Reveal>
        <Reveal as="p" className="section-lead" delay={0.14}>
          Languages, frameworks, and infrastructure I use to design, ship, and observe
          distributed systems.
        </Reveal>

        <Stagger className={styles.groups} delay={0.1} stagger={0.1}>
          {skills.map((group) => (
            <StaggerItem key={group.title} className={styles.group} direction="scale">
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className={styles.bottom} delay={0.2}>
          <h3 className={styles.groupTitle}>Certifications</h3>
          <ul className={styles.certs}>
            {certifications.map((cert) => (
              <li key={cert.name}>
                <strong>{cert.name}</strong>
                {cert.issuer ? <span> · {cert.issuer}</span> : null}
                {cert.url ? (
                  <>
                    {" · "}
                    <a href={cert.url} target="_blank" rel="noreferrer">
                      View credential
                    </a>
                  </>
                ) : null}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
