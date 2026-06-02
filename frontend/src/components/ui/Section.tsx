import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "gold" | "warm";
  containerClassName?: string;
}

export function Section({
  children,
  className,
  id,
  variant = "default",
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28 [content-visibility:auto] [contain-intrinsic-size:auto_500px]",
        variant === "gold" && "bg-gold",
        variant === "warm" && "bg-warm-white",
        variant === "default" && "bg-cream",
        className,
      )}
    >
      <div
        className={cn("mx-auto max-w-7xl px-6 lg:px-8", containerClassName)}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-charcoal/70" : "text-gold",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-4xl font-medium leading-tight md:text-5xl lg:text-6xl",
          light ? "text-charcoal" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed md:text-lg",
            align === "center" && "mx-auto",
            light ? "text-charcoal/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
