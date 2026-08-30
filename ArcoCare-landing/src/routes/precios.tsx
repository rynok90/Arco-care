import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Eyebrow, Section } from "@/components/section";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { PLANS, SITE } from "@/lib/site";

export const Route = createFileRoute("/precios")({
  head: () => ({
    meta: [
      { title: `Precios — ${SITE.name}` },
      {
        name: "description",
        content:
          "Starter $1,099, Growth $1,899, Pro $2,999 MXN al mes. Trial 14 días. Inversión para la clínica, Fochi gratis para el tutor.",
      },
    ],
  }),
  component: Precios,
});

function Precios() {
  return (
    <>
      <Section>
        <Eyebrow>Precios en México</Eyebrow>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Una inversión que se paga sola. No un software barato.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          14 días de prueba. Push en la app desde el inicio. WhatsApp entra
          después, incluido en el plan básico. El tutor nunca paga.
        </p>
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={cn(
                "flex flex-col rounded-2xl border p-6",
                plan.recommended
                  ? "border-clinic bg-clinic text-cream shadow-[var(--shadow-float)] lg:-translate-y-2"
                  : "border-line bg-cream",
              )}
            >
              {plan.recommended ? (
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-amber">
                  Recomendado
                </p>
              ) : null}
              <h2 className="font-display text-2xl">{plan.name}</h2>
              <p className="mt-3 font-display text-3xl">{plan.priceLabel}</p>
              <p
                className={cn(
                  "text-sm",
                  plan.recommended ? "text-cream/70" : "text-muted",
                )}
              >
                {plan.period}
              </p>
              <p className="mt-2 text-sm">
                {plan.sites} · {plan.doctors}
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                to="/contacto"
                variant={plan.recommended ? "amber" : "ghost"}
                className="mt-6 w-full"
              >
                {plan.cta}
              </ButtonLink>
            </article>
          ))}
        </div>
      </Section>
      <Section dark>
        <h2 className="font-display text-3xl">Multi-sede</h2>
        <p className="mt-3 max-w-2xl text-cream/70">
          Si la clínica tiene más de un sitio, hay 5–10% de descuento por cada
          sede extra y un control maestro. Enterprise se cotiza. No hay
          auto-upgrade ni letra chica de inteligencia artificial.
        </p>
      </Section>
    </>
  );
}
