"use client";

import Image from "next/image";

import { Reveal } from "@/components/Motion";
import { projects } from "@/config/projects";

import styles from "./Projects.module.css";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section">
      <div className="shell">
        <Reveal as="p" className="section-label" direction="none">
          Projects
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.08}>
          Selected work
        </Reveal>
        <Reveal as="p" className="section-lead" delay={0.14}>
          Agentic systems, real-time traffic platforms, and product backends—built for
          scale and clarity.
        </Reveal>

        <div className={styles.featured}>
          {featured.map((project, index) => (
            <Reveal
              key={project.name}
              as="article"
              className={styles.feature}
              delay={0.06 + index * 0.08}
              direction="scale"
            >
              {project.image ? (
                <div className={styles.media}>
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    width={1200}
                    height={720}
                    loading="lazy"
                    className={styles.image}
                  />
                </div>
              ) : (
                <div className={styles.mediaFallback} aria-hidden="true">
                  <span>{project.name}</span>
                </div>
              )}

              <div className={styles.body}>
                {project.badge ? <p className={styles.badge}>{project.badge}</p> : null}
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.tech}>
                  {project.tech.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
                {project.links.length > 0 ? (
                  <div className={styles.links}>
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        {more.length > 0 ? (
          <div className={styles.more}>
            <Reveal as="h3" className={styles.moreTitle} direction="none">
              More builds
            </Reveal>
            <ul className={styles.moreList}>
              {more.map((project, index) => (
                <Reveal
                  key={project.name}
                  as="li"
                  className={styles.moreItem}
                  delay={0.05 + index * 0.07}
                  direction="left"
                >
                  <div>
                    <h4 className={styles.moreName}>{project.name}</h4>
                    <p className={styles.moreDescription}>{project.description}</p>
                    <ul className={styles.tech}>
                      {project.tech.map((item) => (
                        <li key={item} className="tag">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {project.links.length > 0 ? (
                    <div className={styles.links}>
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </Reveal>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
