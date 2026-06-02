import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigation, site } from "@/config/site";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import { useSmartNavbar } from "@/hooks/use-smart-navbar";

function isActivePath(pathname: string, href: string) {
  if (href === routes.home) return pathname === routes.home;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isVisible = useSmartNavbar(open);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isVisible && open) setOpen(false);
  }, [isVisible, open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-300 ease-out will-change-transform sm:px-4 sm:pt-4",
        isVisible ? "translate-y-0" : "-translate-y-[calc(100%+0.75rem)]",
        !isVisible && "pointer-events-none",
      )}
      aria-hidden={!isVisible}
    >
      <nav
        aria-label="Main"
        className="relative mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 rounded-lg border border-charcoal/10 bg-cream/95 px-4 shadow-[0_1px_3px_rgba(31,31,31,0.08)] backdrop-blur-md sm:h-[3.75rem] sm:px-5"
      >
        <Link
          to={routes.home}
          className="shrink-0 font-serif text-lg font-semibold tracking-tight text-charcoal sm:text-xl"
          tabIndex={isVisible ? undefined : -1}
        >
          {site.name}
        </Link>

        <div className="hidden items-center gap-1 md:flex md:gap-2 lg:gap-3">
          {navigation.map((item) => {
            const active = isActivePath(location.pathname, item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                tabIndex={isVisible ? undefined : -1}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-charcoal/5 text-charcoal"
                    : "text-charcoal/75 hover:bg-charcoal/[0.04] hover:text-charcoal",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            to={routes.contact}
            tabIndex={isVisible ? undefined : -1}
            className="ml-1 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-gold/90"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-charcoal transition-colors hover:bg-charcoal/5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          tabIndex={isVisible ? undefined : -1}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {open && (
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 bg-charcoal/20 backdrop-blur-[2px] md:hidden"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <div className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-50 rounded-lg border border-charcoal/10 bg-cream p-2 shadow-lg md:hidden">
              {navigation.map((item) => {
                const active = isActivePath(location.pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                      active
                        ? "bg-charcoal/5 text-charcoal"
                        : "text-charcoal/80 hover:bg-charcoal/[0.04]",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                to={routes.contact}
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-md bg-gold px-3 py-2.5 text-center text-sm font-semibold text-charcoal"
              >
                Book Now
              </Link>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
