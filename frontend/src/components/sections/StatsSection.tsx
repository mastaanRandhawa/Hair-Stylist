import { MotionSection } from "@/components/ui/motion-section";
import { Section } from "@/components/ui/Section";
import { stats } from "@/content/gallery";

export function StatsSection() {
  return (
    <Section id="why-us">
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat, index) => (
          <MotionSection
            key={stat.label}
            delay={index * 100}
            className="rounded-2xl bg-gold px-8 py-12 text-center shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          >
            <p className="font-serif text-5xl font-medium text-charcoal md:text-6xl">
              {stat.value}
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-charcoal/80">
              {stat.label}
            </p>
          </MotionSection>
        ))}
      </div>
    </Section>
  );
}
