"use client";

import { Reveal } from "@/components/Motion";
import { achievements } from "@/config/achievements";

import styles from "./Achievements.module.css";

export function Achievements() {
  const countParity = achievements.length % 2 === 0 ? "even" : "odd";

  return (
    <section id="achievements" className="section">
      <div className="shell">
        <Reveal as="p" className="section-label" direction="none">
          Impact
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.08}>
          Wins &amp; signals
        </Reveal>
        <Reveal as="p" className="section-lead" delay={0.14}>
          Measurable outcomes from systems, competitions, and learning.
        </Reveal>

        <ul className={styles.list} data-count={countParity}>
          {achievements.map((item, index) => (
            <Reveal
              key={item.title}
              as="li"
              className={styles.item}
              delay={0.05 + (index % 4) * 0.07}
              direction="up"
            >
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.detail}>{item.detail}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
