/** Image CDN helper — Pexels allows hotlinking; works on GitHub Pages */
function pexels(id: number, width = 1200) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

export const images = {
  salonInterior: pexels(3771836, 1200),
  hairStyling: pexels(3992206, 1200),
  hairGloss: pexels(3065209, 1200),
  bridalHair: pexels(265426, 1200),
  blowout: pexels(769283, 1200),
  precisionCut: pexels(2481174, 1200),
  salonChair: pexels(1319460, 1200),
  teamElena: pexels(1181519, 800),
  teamJames: pexels(2379004, 800),
  teamSophia: pexels(774909, 800),
} as const;

export const imageFallback = images.salonChair;
