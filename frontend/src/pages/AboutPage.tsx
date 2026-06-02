import { HeroSection } from "@/components/hero/HeroSection";
import { MotionSection } from "@/components/ui/motion-section";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TeamSection } from "@/components/sections/TeamSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { team, values, certifications } from "@/content/team";
import { Award } from "lucide-react";

export function AboutPage() {
  return (
    <>
      <HeroSection
        title="Our Story"
        description="An intimate studio devoted to editorial hair artistry since 2010."
        compact
        hideHeader
      />
      <Section>
        <MotionSection>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Studio Story"
              title="Born from a passion for craft"
              align="center"
            />
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Lumière Salon began as a single-chair studio with a vision: to
              bring runway-quality hair to everyday life. Today, our Mercer Street
              space remains intentionally intimate — a place where every guest
              receives unhurried attention and truly bespoke results.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              We believe great hair is a collaboration. Our stylists listen
              first, then create — whether you seek a subtle refresh or a bold
              editorial transformation.
            </p>
          </div>
        </MotionSection>
      </Section>

      <Section variant="warm">
        <SectionHeading
          eyebrow="Values"
          title="What guides us"
          align="center"
        />
        <MotionSection>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-cream p-8 text-center shadow-sm"
              >
                <h3 className="font-serif text-2xl font-medium text-charcoal">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </MotionSection>
      </Section>

      <TeamSection members={team} />

      <Section variant="warm">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & training"
          align="center"
        />
        <MotionSection>
          <ul className="mx-auto grid max-w-2xl gap-4">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="flex items-center gap-3 rounded-xl bg-cream px-6 py-4"
              >
                <Award className="h-5 w-5 shrink-0 text-gold" />
                <span className="text-charcoal">{cert}</span>
              </li>
            ))}
          </ul>
        </MotionSection>
      </Section>

      <CtaBand />
    </>
  );
}
