import { MotionSection } from "@/components/ui/motion-section";
import { SafeImage } from "@/components/ui/safe-image";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { TeamMember } from "@/data/team";

interface TeamSectionProps {
  members: TeamMember[];
}

export function TeamSection({ members }: TeamSectionProps) {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our Team"
        title="Meet the artists"
        description="Master stylists devoted to your vision."
        align="center"
      />
      <MotionSection>
        <div className="grid gap-10 md:grid-cols-3">
          {members.map((member) => (
            <article key={member.id} className="group text-center">
              <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-2xl">
                <SafeImage
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={400}
                  height={533}
                />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-medium text-charcoal">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-gold">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </MotionSection>
    </Section>
  );
}
