import { HeroLanding } from "@/components/ui/hero-1";
import { navigation, site } from "@/data/site";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1560066984-138d7174ebb1?w=1920&q=85";

interface HeroSectionProps {
  title?: string;
  description?: string;
  compact?: boolean;
  hideHeader?: boolean;
}

export function HeroSection({
  title = "Elevate Your Natural Beauty",
  description = site.tagline,
  compact = false,
  hideHeader = false,
}: HeroSectionProps) {
  return (
    <HeroLanding
      logo={{
        src: "",
        alt: site.name,
        companyName: site.name,
      }}
      navigation={hideHeader ? undefined : navigation}
      loginText={hideHeader ? undefined : "Book Now"}
      loginHref="/contact"
      title={title}
      description={description}
      announcementBanner={
        compact
          ? undefined
          : {
              text: "Now accepting bridal appointments for 2026.",
              linkText: "Learn more",
              linkHref: "/services",
            }
      }
      callToActions={[
        { text: "Book Appointment", href: "/contact", variant: "primary" },
        { text: "View Services", href: "/services", variant: "secondary" },
      ]}
      titleSize="large"
      backgroundImage={HERO_IMAGE}
      gradientColors={{ from: "#D8C86A", to: "#EAE4D6" }}
      hideHeader={hideHeader}
      compact={compact}
    />
  );
}
