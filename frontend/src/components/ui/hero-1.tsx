import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { HeroWave } from "@/components/ui/dynamic-wave-canvas-background";
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
    from: "#feed81",
    to: "#1F1F1F",
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
    backgroundImage,
    hideHeader = false,
    compact = false,
    className,
  } = { ...defaultProps, ...props };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const textOnDark = true;

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

    const className = cn(
      "text-sm font-semibold transition-colors sm:text-base",
      textOnDark
        ? "text-warm-white/90 hover:text-warm-white"
        : "text-charcoal/80 hover:text-charcoal",
    );
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

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-charcoal",
        compact ? "min-h-[50vh]" : "min-h-screen",
        className,
      )}
    >
      {/* Dynamic wave canvas — black & gold flowing background */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <HeroWave />
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-overlay"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-charcoal/50" />
      </div>

      {!hideHeader && (
        <header className="absolute inset-x-0 top-0 z-30">
          <nav
            aria-label="Global"
            className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <NavLink
                href="/"
                className={cn(
                  "-m-1.5 p-1.5 font-serif text-xl font-semibold tracking-wide",
                  textOnDark ? "text-warm-white" : "text-charcoal",
                )}
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
                  textOnDark
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
                      textOnDark
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
          "relative z-10 isolate flex flex-col justify-center px-6",
          compact ? "min-h-[50vh] py-24" : "min-h-screen py-32",
        )}
      >
        <div className="mx-auto max-w-5xl">
          {announcementBanner && (
            <div className="mb-6 flex justify-center sm:mb-8">
              <div
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm ring-1 transition-all",
                  textOnDark
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
                textOnDark ? "text-warm-white" : "text-charcoal",
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed sm:mt-8 sm:text-lg md:text-xl",
                textOnDark ? "text-warm-white/85" : "text-muted-foreground",
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
