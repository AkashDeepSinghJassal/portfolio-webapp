"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const spring = {
  type: "spring" as const,
  damping: 18,
  stiffness: 120,
};

type Direction = "up" | "down" | "left" | "right" | "none" | "scale";

const offsets: Record<Direction, { x: number; y: number; scale: number }> = {
  up: { x: 0, y: 36, scale: 1 },
  down: { x: 0, y: -24, scale: 1 },
  left: { x: -36, y: 0, scale: 1 },
  right: { x: 36, y: 0, scale: 1 },
  none: { x: 0, y: 12, scale: 1 },
  scale: { x: 0, y: 16, scale: 0.94 },
};

type Tag =
  | "div"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "li"
  | "ul"
  | "ol"
  | "article"
  | "dl"
  | "span";

const motionTags = {
  div: motion.div,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  li: motion.li,
  ul: motion.ul,
  ol: motion.ol,
  article: motion.article,
  dl: motion.dl,
  span: motion.span,
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  as?: Tag;
  once?: boolean;
  amount?: number;
  id?: string;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
  once = true,
  amount = 0.22,
  id,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = offsets[direction];
  const Component = motionTags[as];

  if (reduceMotion) {
    const StaticTag = as;
    return (
      <StaticTag id={id} className={className}>
        {children}
      </StaticTag>
    );
  }

  return (
    <Component
      id={id}
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y, scale: offset.scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      transition={{ ...spring, delay }}
    >
      {children}
    </Component>
  );
}

export function MotionLine({
  className,
  delay = 0.15,
}: {
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ ...spring, delay, stiffness: 90 }}
      style={{ originX: 0 }}
    />
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduceMotion ? 0 : stagger,
            delayChildren: reduceMotion ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const reduceMotion = useReducedMotion();
  const offset = offsets[direction];

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduceMotion
          ? { opacity: 1 }
          : { opacity: 0, x: offset.x, y: offset.y, scale: offset.scale },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: spring,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
