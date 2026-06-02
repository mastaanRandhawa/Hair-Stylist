import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigation, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHome) return null;

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-gray-soft/60 bg-cream/90 px-5 py-3 shadow-sm backdrop-blur-md"
      >
        <Link
          to="/"
          className="font-serif text-xl font-semibold tracking-wide text-charcoal"
        >
          {site.name}
        </Link>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
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
            to="/contact"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-charcoal transition-all hover:scale-[1.02]"
          >
            Book Now
          </Link>
        </div>

        {open && (
          <div className="absolute inset-x-4 top-full mt-2 rounded-2xl border border-gray-soft bg-warm-white p-4 shadow-lg lg:hidden">
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
              to="/contact"
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
