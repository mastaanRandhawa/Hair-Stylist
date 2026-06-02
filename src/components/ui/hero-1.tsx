import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavigationItem {
  name: string;
  href: string;
}

export interface AnnouncementBanner {
  text: string;
  linkText: string;
  linkHref: string;
}

export interface CallToAction {
  text: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface HeroLandingProps {
  logo?: {
    src: string;
    alt: string;
    companyName: string;
  };
  navigation?: NavigationItem[];
  loginText?: string;
  loginHref?: string;
  title: string;
  description: string;
  announcementBanner?: AnnouncementBanner;
  callToActions?: CallToAction[];
  titleSize?: "small" | "medium" | "large";
  gradientColors?: {
    from: string;
    to: string;
  };
  backgroundImage?: string;
  hideHeader?: boolean;
  compact?: boolean;
  className?: string;
}

const defaultProps: Partial<HeroLandingProps> = {
  titleSize: "large",
  gradientColors: {
    from: "#D8C86A",
    to: "#EAE4D6",
  },
};

export function HeroLanding(props: HeroLandingProps) {
  const {
    logo,
    navigation,
    loginText,
    loginHref,
    title,
    description,
    announcementBanner,
    callToActions,
    titleSize,
    gradientColors,
    backgroundImage,
    hideHeader = false,
    compact = false,
    className,
  } = { ...defaultProps, ...props };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getTitleSizeClasses = () => {
    switch (titleSize) {
      case "small":
        return "text-3xl sm:text-4xl md:text-5xl";
      case "medium":
        return "text-4xl sm:text-5xl md:text-6xl lg:text-7xl";
      case "large":
      default:
        return "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl";
    }
  };

  const renderCallToAction = (cta: CallToAction, index: number) => {
    const isExternal = cta.href.startsWith("http");

    if (cta.variant === "primary") {
      const className =
        "rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal shadow-sm transition-all hover:scale-[1.02] hover:bg-gold/90 sm:px-8 sm:text-base";
      return isExternal ? (
        <a key={index} href={cta.href} className={className}>
          {cta.text}
        </a>
      ) : (
        <Link key={index} to={cta.href} className={className}>
          {cta.text}
        </Link>
      );
    }

    const className =
      "text-sm font-semibold text-warm-white/90 transition-colors hover:text-warm-white sm:text-base";
    return isExternal ? (
      <a key={index} href={cta.href} className={className}>
        {cta.text} <span aria-hidden="true">→</span>
      </a>
    ) : (
      <Link key={index} to={cta.href} className={className}>
        {cta.text} <span aria-hidden="true">→</span>
      </Link>
    );
  };

  const NavLink = ({ href, children, className: cls }: { href: string; children: React.ReactNode; className?: string }) => {
    if (href.startsWith("http")) {
      return (
        <a href={href} className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={cls}>
        {children}
      </Link>
    );
  };

  const textOnImage = !!backgroundImage;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        compact ? "min-h-[50vh]" : "min-h-screen",
        className,
      )}
    >
      {backgroundImage ? (
        <>
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-charcoal/50" aria-hidden="true" />
        </>
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                background: `linear-gradient(to top right, ${gradientColors?.from}, ${gradientColors?.to})`,
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="absolute inset-0 bg-cream" aria-hidden="true" />
        </>
      )}

      {!hideHeader && (
        <header className="absolute inset-x-0 top-0 z-20">
          <nav
            aria-label="Global"
            className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <NavLink
                href="/"
                className="-m-1.5 p-1.5 font-serif text-xl font-semibold tracking-wide text-warm-white"
              >
                {logo?.companyName ?? "Lumière"}
              </NavLink>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={cn(
                  "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors",
                  textOnImage
                    ? "text-warm-white hover:text-gold"
                    : "text-charcoal hover:text-charcoal/70",
                )}
              >
                <span className="sr-only">Open main menu</span>
                <Menu aria-hidden="true" className="size-6" />
              </button>
            </div>
            {navigation && navigation.length > 0 && (
              <div className="hidden lg:flex lg:gap-x-10">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      textOnImage
                        ? "text-warm-white/90 hover:text-gold"
                        : "text-charcoal hover:text-charcoal/70",
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
            {loginText && loginHref && (
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <NavLink
                  href={loginHref}
                  className={cn(
                    "rounded-full bg-gold px-5 py-2 text-sm font-semibold text-charcoal transition-all hover:scale-[1.02]",
                  )}
                >
                  {loginText}
                </NavLink>
              </div>
            )}
          </nav>
          <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DialogContent className="fixed inset-y-0 right-0 z-50 h-full w-full max-w-sm translate-x-0 translate-y-0 rounded-none border-0 bg-warm-white px-6 py-6 sm:max-w-sm">
              <div className="flex items-center justify-between">
                <span className="font-serif text-xl font-semibold text-charcoal">
                  {logo?.companyName}
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md p-2.5 text-charcoal hover:bg-beige"
                >
                  <span className="sr-only">Close menu</span>
                  <X aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-8 space-y-2">
                {navigation?.map((item) => (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-3 font-medium text-charcoal hover:bg-beige"
                  >
                    {item.name}
                  </NavLink>
                ))}
                {loginText && loginHref && (
                  <NavLink
                    href={loginHref}
                    className="mt-4 block rounded-full bg-gold px-4 py-3 text-center font-semibold text-charcoal"
                  >
                    {loginText}
                  </NavLink>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </header>
      )}

      <div
        className={cn(
          "relative isolate flex flex-col justify-center px-6",
          compact ? "min-h-[50vh] py-24" : "min-h-screen py-32",
        )}
      >
        <div className="mx-auto max-w-5xl">
          {announcementBanner && (
            <div className="mb-6 flex justify-center sm:mb-8">
              <div
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm ring-1 transition-all",
                  textOnImage
                    ? "text-warm-white/90 ring-warm-white/30 hover:ring-gold"
                    : "text-muted-foreground ring-border hover:ring-gold",
                )}
              >
                {announcementBanner.text}{" "}
                <NavLink
                  href={announcementBanner.linkHref}
                  className="font-semibold text-gold hover:text-gold/80"
                >
                  {announcementBanner.linkText} →
                </NavLink>
              </div>
            </div>
          )}

          <div className="text-center">
            <h1
              className={cn(
                getTitleSizeClasses(),
                "font-serif font-medium leading-[1.05] tracking-tight text-balance",
                textOnImage ? "text-warm-white" : "text-charcoal",
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed sm:mt-8 sm:text-lg md:text-xl",
                textOnImage ? "text-warm-white/85" : "text-muted-foreground",
              )}
            >
              {description}
            </p>

            {callToActions && callToActions.length > 0 && (
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                {callToActions.map((cta, index) =>
                  renderCallToAction(cta, index),
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
