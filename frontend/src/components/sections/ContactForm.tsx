import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/config/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid gap-16 lg:grid-cols-2">
      <div>
        <h2 className="font-serif text-3xl font-medium text-charcoal md:text-4xl">
          Send us a message
        </h2>
        <p className="mt-3 text-muted-foreground">
          We'll respond within one business day.
        </p>
        {submitted ? (
          <p className="mt-8 rounded-xl bg-gold/30 px-6 py-4 text-charcoal">
            Thank you! We'll be in touch shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input placeholder="First name" required name="firstName" />
              <Input placeholder="Last name" required name="lastName" />
            </div>
            <Input type="email" placeholder="Email" required name="email" />
            <Input type="tel" placeholder="Phone" name="phone" />
            <Textarea
              placeholder="Tell us about your desired service..."
              required
              name="message"
              rows={5}
            />
            <Button type="submit" size="lg">
              Send Message
            </Button>
          </form>
        )}
      </div>

      <div className="space-y-8 rounded-2xl bg-warm-white p-8 shadow-sm">
        <div className="flex gap-4">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
          <div>
            <p className="font-semibold text-charcoal">Visit</p>
            <p className="mt-1 text-sm text-muted-foreground">{site.address}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
          <div>
            <p className="font-semibold text-charcoal">Call</p>
            <a
              href={`tel:${site.phone}`}
              className="mt-1 block text-sm text-muted-foreground hover:text-charcoal"
            >
              {site.phone}
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" />
          <div>
            <p className="font-semibold text-charcoal">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block text-sm text-muted-foreground hover:text-charcoal"
            >
              {site.email}
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
          <div>
            <p className="font-semibold text-charcoal">Hours</p>
            <p className="mt-1 text-sm text-muted-foreground">{site.hours}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
