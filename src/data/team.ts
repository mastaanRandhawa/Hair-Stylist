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
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80",
  },
  {
    id: "james",
    name: "James Whitmore",
    role: "Senior Colorist",
    bio: "Specialist in balayage and dimensional color artistry.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    id: "sophia",
    name: "Sophia Chen",
    role: "Stylist",
    bio: "Known for precision cuts and effortless, lived-in texture.",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8cd5?w=600&q=80",
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
