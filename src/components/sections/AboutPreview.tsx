import { Link } from "react-router-dom";
import { MotionSection } from "@/components/ui/motion-section";
import { Section, SectionHeading } from "@/components/ui/Section";
import { images } from "@/data/images";
import { SafeImage } from "@/components/ui/safe-image";

export function AboutPreview() {
  return (
    <Section variant="warm">
      <MotionSection>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <SafeImage
              src={images.blowout}
              alt="Salon interior with stylist at work"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
              width={800}
              height={1000}
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our Studio"
              title="A sanctuary for hair artistry"
              description="Founded on the belief that exceptional hair should feel effortless, Lumière Salon offers an intimate, editorial experience in the heart of the city."
            />
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Our team of master stylists brings runway expertise to every
              appointment — from precision cuts to hand-painted color that moves
              with you.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-charcoal transition-colors hover:text-charcoal/70"
            >
              Discover our story <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </MotionSection>
    </Section>
  );
}
