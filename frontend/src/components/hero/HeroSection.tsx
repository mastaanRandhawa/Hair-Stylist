import { HeroLanding } from "@/components/ui/hero-1";
import { site } from "@/config/site";
import {
  homeHeroGradient,
  pageHeroGradients,
  type HeroGradient,
  type PageHeroKey,
} from "@/config/hero-gradients";

const defaultCallToActions = [
  { text: "Book Appointment", href: "/contact", variant: "primary" as const },
  { text: "View Services", href: "/services", variant: "secondary" as const },
];

interface HomeHeroProps {
  page?: "home";
  title?: string;
  description?: string;
}

interface PageHeroProps {
  page: PageHeroKey;
  title: string;
  description: string;
}

export type HeroSectionProps = HomeHeroProps | PageHeroProps;

function isPageHero(props: HeroSectionProps): props is PageHeroProps {
  return (
    "page" in props &&
    props.page !== undefined &&
    props.page !== "home"
  );
}

export function HeroSection(props: HeroSectionProps) {
  const isPage = isPageHero(props);
  const title = props.title ?? "Elevate Your Natural Beauty";
  const description = props.description ?? site.tagline;
  const gradient: HeroGradient = isPage
    ? pageHeroGradients[props.page]
    : homeHeroGradient;

  return (
    <HeroLanding
      title={title}
      description={description}
      gradient={gradient}
      announcementBanner={
        isPage
          ? undefined
          : {
              text: "Now accepting bridal appointments for 2026.",
              linkText: "Learn more",
              linkHref: "/services",
            }
      }
      callToActions={defaultCallToActions}
      titleSize={isPage ? "medium" : "large"}
      compact={isPage}
    />
  );
}
