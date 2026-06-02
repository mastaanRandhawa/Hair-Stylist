import { images } from "./images";

export const galleryImages = [
  {
    id: "1",
    src: images.hairStyling,
    alt: "Balayage color work",
    span: "large" as const,
  },
  {
    id: "2",
    src: images.salonInterior,
    alt: "Salon styling session",
    span: "small" as const,
  },
  {
    id: "3",
    src: images.hairGloss,
    alt: "Gloss treatment result",
    span: "small" as const,
  },
  {
    id: "4",
    src: images.bridalHair,
    alt: "Bridal updo styling",
    span: "medium" as const,
  },
  {
    id: "5",
    src: images.blowout,
    alt: "Editorial blowout",
    span: "small" as const,
  },
  {
    id: "6",
    src: images.precisionCut,
    alt: "Precision cut detail",
    span: "large" as const,
  },
];

export const beforeAfter = [
  {
    id: "ba1",
    before: images.precisionCut,
    after: images.hairStyling,
    label: "Balayage Transformation",
  },
  {
    id: "ba2",
    before: images.hairGloss,
    after: images.blowout,
    label: "Cut & Gloss Refresh",
  },
];

export const stats = [
  { label: "Years of Experience", value: "15+" },
  { label: "Happy Clients", value: "3,200+" },
  { label: "Services Offered", value: "24" },
];
