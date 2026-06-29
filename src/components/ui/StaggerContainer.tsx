"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.06,
  delayChildren = 0,
}: StaggerContainerProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export const StaggerItem = ({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] as const }
    },
  };

  return (
    <motion.div variants={itemVariants} className={cn(className)} style={style}>
      {children}
    </motion.div>
  );
};
