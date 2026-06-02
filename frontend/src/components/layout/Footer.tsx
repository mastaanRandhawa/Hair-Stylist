import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import { navigation, site } from "@/config/site";

export function Footer() {
  return (
    <footer
      data-nav-background="dark"
      className="border-t border-gray-soft bg-charcoal text-warm-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl font-medium">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-warm-white/70">
              {site.tagline}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/70 transition-colors hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/70 transition-colors hover:text-gold"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-warm-white/70 transition-colors hover:text-gold"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Visit
            </p>
            <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-warm-white/70">
              <p>{site.address}</p>
              <p>
                <a href={`tel:${site.phone}`} className="hover:text-gold">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </p>
              <p>{site.hours}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-warm-white/10 pt-8 text-center text-xs text-warm-white/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
