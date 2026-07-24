"use client";

import { Reveal } from "@/components/Motion";
import { experience } from "@/config/experience";

import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience" className={`section ${styles.section}`}>
      <div className="shell">
        <Reveal as="p" className="section-label" direction="none">
          Experience
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.08}>
          Where I&apos;ve shipped
        </Reveal>
        <Reveal as="p" className="section-lead" delay={0.14}>
          From traffic AI microservices to factory workflow tooling—backends that move
          data, react in real time, and deploy cleanly.
        </Reveal>

        <ol className={styles.list}>
          {experience.map((job, index) => (
            <Reveal
              key={`${job.company}-${job.period}`}
              as="li"
              className={styles.item}
              delay={0.08 + index * 0.1}
              direction="left"
            >
              <div className={styles.meta}>
                <p className={styles.period}>{job.period}</p>
                <p className={styles.location}>{job.location}</p>
              </div>
              <div className={styles.body}>
                <h3 className={styles.role}>
                  {job.role}
                  <span className={styles.at}> @ </span>
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noreferrer">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <ul className={styles.highlights}>
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
