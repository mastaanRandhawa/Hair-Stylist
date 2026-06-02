export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "The most transformative color experience I've ever had. Elena understood exactly the dimension I wanted.",
    author: "Victoria Ashford",
    role: "Regular Client",
  },
  {
    id: "2",
    quote:
      "An oasis of calm in the city. My cut grows out beautifully — true editorial craftsmanship.",
    author: "Michael Torres",
    role: "Client since 2019",
  },
  {
    id: "3",
    quote:
      "They styled my entire bridal party. Every look was timeless, romantic, and absolutely flawless.",
    author: "Claire Bennett",
    role: "Bride",
  },
  {
    id: "4",
    quote:
      "Finally found a salon that treats hair as art. The attention to detail is unmatched.",
    author: "Amara Okonkwo",
    role: "Editorial Client",
  },
];
