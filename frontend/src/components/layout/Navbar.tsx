import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigation, site } from "@/config/site";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import { useSmartNavbar } from "@/hooks/use-smart-navbar";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === routes.home;
  const isVisible = useSmartNavbar(open);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isVisible && open) setOpen(false);
  }, [isVisible, open]);

  if (isHome) return null;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-transform duration-300 ease-out will-change-transform sm:px-6",
        isVisible ? "translate-y-0" : "-translate-y-[calc(100%+1rem)]",
        !isVisible && "pointer-events-none",
      )}
      aria-hidden={!isVisible}
    >
      <nav
        aria-label="Main"
        className="relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-gray-soft/60 bg-cream/90 px-5 py-3 shadow-sm backdrop-blur-md"
      >
        <Link
          to={routes.home}
          className="font-serif text-xl font-semibold tracking-wide text-charcoal"
          tabIndex={isVisible ? undefined : -1}
        >
          {site.name}
        </Link>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          tabIndex={isVisible ? undefined : -1}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              tabIndex={isVisible ? undefined : -1}
              className={cn(
                "text-sm font-medium transition-colors hover:text-charcoal/70",
                location.pathname === item.href
                  ? "text-charcoal"
                  : "text-charcoal/80",
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to={routes.contact}
            tabIndex={isVisible ? undefined : -1}
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-charcoal transition-all hover:scale-[1.02]"
          >
            Book Now
          </Link>
        </div>

        {open && (
          <div className="absolute inset-x-4 top-full z-50 mt-2 rounded-2xl border border-gray-soft bg-warm-white p-4 shadow-lg lg:hidden">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 font-medium text-charcoal hover:bg-beige"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to={routes.contact}
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-gold px-4 py-3 text-center font-semibold text-charcoal"
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
