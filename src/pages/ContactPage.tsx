import { Instagram, Facebook } from "lucide-react";
import { HeroSection } from "@/components/hero/HeroSection";
import { MotionSection } from "@/components/ui/motion-section";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/data/site";

export function ContactPage() {
  return (
    <>
      <HeroSection
        title="Get in Touch"
        description="We'd love to welcome you to the studio."
        compact
        hideHeader
      />

      <Section>
        <MotionSection>
          <ContactForm />
        </MotionSection>
      </Section>

      <Section variant="warm" className="py-0 pb-20">
        <MotionSection>
          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="Salon location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0!2d-73.998!3d40.724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzI2LjQiTiA3M8KwNTknNTIuOCJX!5e0!3m2!1sen!2sus!4v1"
              className="h-80 w-full border-0 md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </MotionSection>
      </Section>

      <Section>
        <MotionSection>
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Connect with us
            </p>
            <div className="flex gap-6">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-charcoal transition-colors hover:text-charcoal/70"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-charcoal transition-colors hover:text-charcoal/70"
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </a>
            </div>
          </div>
        </MotionSection>
      </Section>
    </>
  );
}
