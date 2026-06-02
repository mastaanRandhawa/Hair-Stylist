export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  gallery: "/gallery",
  contact: "/contact",
} as const;

/** Router basename for GitHub Pages (`/Hair-Stylist`) or undefined on localhost. */
export function getRouterBasename(): string | undefined {
  const base = import.meta.env.BASE_URL;
  if (base === "/") return undefined;
  return base.replace(/\/$/, "");
}
