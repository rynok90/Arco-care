import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  dark,
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        dark ? "bg-ink text-cream" : "bg-paper text-ink",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.16em] text-clinic">
      {children}
    </p>
  );
}
