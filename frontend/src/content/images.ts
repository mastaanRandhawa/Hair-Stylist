/** Image CDN helper — Pexels allows hotlinking; works on GitHub Pages */
function pexels(id: number, width = 1200) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

/** Verified hair / salon Pexels IDs only (reused where needed). */
export const images = {
  salonInterior: pexels(7750099, 1200),
  hairStyling: pexels(10318060, 1200),
  hairGloss: pexels(3993449, 1200),
  bridalHair: pexels(28863309, 1200),
  blowout: pexels(3065209, 1200),
  precisionCut: pexels(1319462, 1200),
  salonChair: pexels(696287, 1200),
  teamElena: pexels(3992879, 800),
  teamJames: pexels(3992875, 800),
  teamSophia: pexels(10318060, 800),
} as const;

export const imageFallback = images.salonInterior;
