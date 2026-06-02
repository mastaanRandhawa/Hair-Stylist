import { images } from "./images";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: "elena",
    name: "Elena Marchetti",
    role: "Founder & Creative Director",
    bio: "15 years shaping editorial looks for runway and red carpet.",
    image: images.teamElena,
  },
  {
    id: "james",
    name: "James Whitmore",
    role: "Senior Colorist",
    bio: "Specialist in balayage and dimensional color artistry.",
    image: images.teamJames,
  },
  {
    id: "sophia",
    name: "Sophia Chen",
    role: "Stylist",
    bio: "Known for precision cuts and effortless, lived-in texture.",
    image: images.teamSophia,
  },
];

export const values = [
  {
    title: "Artistry",
    description:
      "Every service is approached as a collaboration between stylist and guest.",
  },
  {
    title: "Intention",
    description:
      "We take time to understand your lifestyle, texture, and vision.",
  },
  {
    title: "Experience",
    description:
      "From arrival to finish, your visit should feel unhurried and exceptional.",
  },
];

export const certifications = [
  "Schwarzkopf Professional Color Master",
  "Bumble and bumble Cut & Style Certified",
  "Oribe Editorial Styling Workshop",
  "Kerastase Fusio-Dose Specialist",
];
