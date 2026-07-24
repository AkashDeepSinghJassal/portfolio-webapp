"use client";

import { MotionLine, Reveal } from "@/components/Motion";
import { site, socialLinks } from "@/config/site";

import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="shell">
        <Reveal as="p" className="section-label" direction="none">
          Contact
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.08}>
          Let&apos;s build the next reliable system
        </Reveal>
        <MotionLine className={styles.line} delay={0.18} />
        <Reveal as="p" className={styles.lead} delay={0.22}>
          Open to roles and collaborations in distributed systems, backend platforms,
          and real-time infrastructure.
        </Reveal>

        <Reveal className={styles.actions} delay={0.3}>
          <a className="btn btn-primary" href={`mailto:${site.email}`}>
            Email Me
          </a>
          <a className="btn btn-ghost" href={site.resumePath} target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </Reveal>

        <Reveal className={styles.details} delay={0.38} as="dl">
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>{site.phone}</a>
            </dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{site.location}</dd>
          </div>
        </Reveal>

        <Reveal as="ul" className={styles.social} delay={0.46} direction="none">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
