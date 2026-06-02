import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
}

export function MotionSection({ children, className }: MotionSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}
