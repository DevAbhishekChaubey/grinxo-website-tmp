"use client";

import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

const directions: Record<string, { x: number; y: number }> = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
  none: { x: 0, y: 0 },
};

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const viewportConfig = { once: true, margin: "-10% 0px" as const };

const visible = { opacity: 1, x: 0, y: 0 };

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.35,
}: FadeInProps) {
  const initial = useMemo(
    () => ({
      opacity: 0,
      ...directions[direction],
    }),
    [direction]
  );

  const transition = useMemo(
    () => ({ ease, duration, delay }),
    [duration, delay]
  );

  return (
    <motion.div
      initial={initial}
      whileInView={visible}
      viewport={viewportConfig}
      transition={transition}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
