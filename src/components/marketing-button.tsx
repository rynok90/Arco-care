import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-clinic text-cream hover:bg-clinic-deep active:scale-[0.98] shadow-[0_10px_24px_color-mix(in_oklab,var(--color-clinic)_28%,transparent)]",
  amber:
    "bg-amber text-amber-ink hover:brightness-95 active:scale-[0.98] shadow-[0_10px_24px_color-mix(in_oklab,var(--color-amber)_35%,transparent)]",
  ghost:
    "bg-transparent text-ink border border-line-strong hover:bg-paper-2 active:scale-[0.98]",
  invert: "bg-cream text-ink hover:bg-paper active:scale-[0.98]",
  fochi:
    "bg-fochi text-cream hover:bg-fochi-deep active:scale-[0.98]",
} as const;

type Variant = keyof typeof variants;

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium tracking-tight transition-[transform,background-color,box-shadow,filter] duration-150 ease-[var(--ease-out-soft)] min-h-11 disabled:opacity-50 disabled:pointer-events-none";

type Common = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: Common & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  href,
}: Common & { href: string }) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
