"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import { MotionLine, Reveal } from "@/components/Motion";
import { site, socialLinks } from "@/config/site";

import styles from "./Hero.module.css";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const orbOneY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orbTwoY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const orbThreeY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.35]);

  return (
    <section
      id="top"
      ref={ref}
      className={styles.hero}
      aria-labelledby="hero-name"
    >
      <div className={styles.atmosphere} aria-hidden="true">
        <motion.div
          className={styles.orbOne}
          style={reduceMotion ? undefined : { y: orbOneY }}
        />
        <motion.div
          className={styles.orbTwo}
          style={reduceMotion ? undefined : { y: orbTwoY }}
        />
        <motion.div
          className={styles.orbThree}
          style={reduceMotion ? undefined : { y: orbThreeY }}
        />
      </div>

      <motion.div
        className={`shell ${styles.layout}`}
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className={styles.content}>
          <Reveal className={styles.identity} direction="none" delay={0.05}>
            <Image
              src={site.profileImage}
              alt={`${site.name} portrait`}
              width={96}
              height={96}
              priority
              className={styles.avatar}
            />
            <p className={styles.role}>{site.role}</p>
          </Reveal>

          <Reveal as="h1" id="hero-name" className={styles.name} delay={0.12}>
            <span translate="no">{site.name}</span>
          </Reveal>

          <MotionLine className={styles.line} delay={0.28} />

          <Reveal as="p" className={styles.tagline} delay={0.34}>
            {site.tagline}
          </Reveal>
          <Reveal as="p" className={styles.intro} delay={0.42} direction="none">
            {site.intro}
          </Reveal>

          <Reveal className={styles.actions} delay={0.5}>
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href={`mailto:${site.email}`}>
              Get in Touch
            </a>
          </Reveal>

          <Reveal as="ul" className={styles.social} delay={0.58} direction="none">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={site.resumePath} target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </Reveal>
        </div>
      </motion.div>
    </section>
  );
}
