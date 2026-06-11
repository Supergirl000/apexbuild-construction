"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export function Reveal({ children, className, delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
