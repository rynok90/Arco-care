import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";

export function ArcoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8 shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="10" className="fill-clinic" />
      <path
        d="M7 21 C12 10, 20 10, 25 21"
        fill="none"
        stroke="currentColor"
        className="stroke-amber"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="22.5" r="1.6" className="fill-cream" />
    </svg>
  );
}

export function ArcoWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-[1.15rem] font-semibold tracking-tight",
        className,
      )}
    >
      Ar
      <span className="relative inline-block px-px">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 10"
          className="pointer-events-none absolute left-1/2 top-[-0.55em] h-[0.55em] w-[1.35em] -translate-x-1/2 text-clinic"
        >
          <path
            d="M2 8.5 C8 1.5, 16 1.5, 22 8.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        c
      </span>
      o Care
    </span>
  );
}

export function ArcoLogo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn("inline-flex items-center gap-2.5 text-ink", className)}
      aria-label="Arco Care, inicio"
    >
      <ArcoMark />
      <ArcoWordmark />
    </Link>
  );
}

export function FochiWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-[1.2rem] font-semibold tracking-tight text-fochi",
        className,
      )}
    >
      Fochi
    </span>
  );
}
