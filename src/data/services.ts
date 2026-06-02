export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export const featuredServices: Service[] = [
  {
    id: "signature-cut",
    title: "Signature Cut & Style",
    description:
      "Precision cutting tailored to your face shape, finished with a bespoke blowout.",
    price: "From $120",
    duration: "90 min",
    image:
      "https://images.unsplash.com/photo-1560066984-138d7174ebb1?w=800&q=80",
  },
  {
    id: "balayage",
    title: "Hand-Painted Balayage",
    description:
      "Sun-kissed dimension with seamless blending for a natural, editorial finish.",
    price: "From $280",
    duration: "3 hrs",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
  },
  {
    id: "gloss-treatment",
    title: "Luxury Gloss Treatment",
    description:
      "Mirror-like shine and deep conditioning for revitalized, runway-ready hair.",
    price: "From $95",
    duration: "60 min",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
  },
  {
    id: "bridal",
    title: "Bridal Styling",
    description:
      "Trial and day-of styling crafted for timeless, camera-ready elegance.",
    price: "From $350",
    duration: "2 hrs",
    image:
      "https://images.unsplash.com/photo-1595476108010-b7d1a02d0f1c?w=800&q=80",
  },
];

export const serviceCategories = [
  {
    title: "Cut & Style",
    items: ["Women's Cut", "Men's Cut", "Blowout", "Updos"],
  },
  {
    title: "Color",
    items: ["Full Color", "Balayage", "Highlights", "Gloss"],
  },
  {
    title: "Treatments",
    items: ["Keratin", "Scalp Therapy", "Deep Conditioning"],
  },
  {
    title: "Special Occasions",
    items: ["Bridal", "Editorial", "Event Styling"],
  },
];

export const pricing = [
  { service: "Women's Cut & Style", price: "$120–$160" },
  { service: "Men's Cut", price: "$65–$85" },
  { service: "Full Color", price: "$180–$240" },
  { service: "Balayage", price: "$280–$420" },
  { service: "Highlights", price: "$200–$320" },
  { service: "Gloss Treatment", price: "$95" },
  { service: "Keratin Treatment", price: "$350–$450" },
  { service: "Bridal Trial + Day-of", price: "$550+" },
];

export const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 2–3 weeks ahead for cuts and 4–6 weeks for color services. Bridal appointments require a consultation at least 3 months prior.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Please provide 48 hours notice to reschedule or cancel. Late cancellations may incur a fee equal to 50% of the scheduled service.",
  },
  {
    question: "Do you offer consultations?",
    answer:
      "Yes. Complimentary 15-minute consultations are available for color and bridal services. Book via our contact page.",
  },
  {
    question: "What products do you use?",
    answer:
      "We partner with premium, salon-exclusive lines chosen for performance, sustainability, and beautiful results on every hair type.",
  },
];
