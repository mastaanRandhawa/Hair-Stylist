import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Section } from "@/components/ui/Section";
import { stats } from "@/data/gallery";

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="why-us">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid gap-6 md:grid-cols-3"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            className="rounded-2xl bg-gold px-8 py-12 text-center shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          >
            <p className="font-serif text-5xl font-medium text-charcoal md:text-6xl">
              {stat.value}
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-charcoal/80">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
