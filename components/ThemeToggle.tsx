"use client";

import { motion } from "motion/react";

import { useTheme } from "@/components/ThemeProvider";

import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme, ready } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      data-ready={ready ? "true" : "false"}
    >
      <span className={styles.track} aria-hidden="true">
        <span className={styles.iconSun}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path
              d="M12 2v2.2M12 19.8V22M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2 12h2.2M19.8 12H22M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className={styles.iconMoon}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M20.4 14.2A8.2 8.2 0 0 1 9.8 3.6 8.5 8.5 0 1 0 20.4 14.2Z" />
          </svg>
        </span>
        <motion.span
          className={styles.thumb}
          layout
          transition={{ type: "spring", stiffness: 420, damping: 28 }}
          animate={{ x: isDark ? 22 : 0 }}
        />
      </span>
    </button>
  );
}
