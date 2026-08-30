import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ArcoLogo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { NAV } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <ArcoLogo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink",
                pathname === item.to && "text-ink font-medium",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink
            to="/tour"
            variant="ghost"
            className="hidden min-h-10 px-4 py-2 sm:inline-flex"
          >
            Ver tour
          </ButtonLink>
          <ButtonLink to="/contacto" className="min-h-10 px-4 py-2">
            Pedir demo
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-paper md:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Móvil">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-3 py-3 text-base text-ink hover:bg-paper-2"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink to="/tour" variant="ghost" className="mt-2 w-full">
              Ver tour
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
