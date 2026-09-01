import { ArrowRight, Building2, Smartphone } from "lucide-react";
import Link from "next/link";
import { ClinicSkinPreview } from "@/components/clinic-skin-preview";
import { FochiWordmark } from "@/components/logo";
import { ButtonLink } from "@/components/marketing-button";
import { DashboardMock, PhoneMock } from "@/components/mocks";
import { Eyebrow, Section } from "@/components/section";
import { PAIN, PLANS, STATS, TESTIMONIALS, TOUR_TEASERS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function HomePage() {
  return (
    <>
      <Section className="overflow-hidden !pt-10 sm:!pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>SaaS para clínicas veterinarias · México</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Tu clínica, con tu nombre. Tus clientes, siempre de vuelta.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Arco Care ordena la operación. Fochi mantiene viva la relación con
              cada mascota.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contacto" variant="amber">
                Pedir demo
              </ButtonLink>
              <ButtonLink href="/tour" variant="ghost">
                Ver el tour
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[380px] lg:min-h-[480px] lg:pl-4">
            <div className="float-slow lg:pr-28">
              <DashboardMock />
            </div>
            <div className="relative mx-auto mt-6 w-fit sm:absolute sm:bottom-0 sm:right-0 sm:mt-0">
              <div className="float-slower origin-bottom scale-90">
                <PhoneMock />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          {PAIN.map((item) => (
            <article
              key={item.id}
              tabIndex={0}
              className="pain-card relative min-h-[220px] overflow-hidden rounded-2xl border border-line bg-cream p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-float)]"
            >
              <p className="font-display text-xl text-ink">{item.title}</p>
              <p className="chaos mt-3 text-sm leading-relaxed text-muted">{item.chaos}</p>
              <p className="order mt-3 text-sm leading-relaxed text-clinic">{item.order}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>
              <span className="text-amber">Arco Care</span>
            </Eyebrow>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">La clínica trabaja con orden</h2>
            <p className="mt-4 text-cream/70">
              Agenda, expediente, receta, inventario y staff. El dueño, la
              recepción y el médico ven lo mismo — con el logo de la clínica.
            </p>
            <ButtonLink href="/producto" variant="invert" className="mt-6">
              Ver Arco Care <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-amber">
              Fochi
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              El tutor se queda cerca
            </h2>
            <p className="mt-4 text-cream/70">
              Historial, peso, recordatorios y las promos de <em>su</em> clínica.
              Gratis para el tutor. Invierte la veterinaria.
            </p>
            <ButtonLink href="/fochi" variant="amber" className="mt-6">
              Ver <FochiWordmark className="text-sm" />
            </ButtonLink>
          </div>
        </div>
        <ClinicSkinPreview />
      </Section>

      <Section>
        <Eyebrow>Tour</Eyebrow>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">Tres pasos para verlo claro</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {TOUR_TEASERS.map((t) => (
            <Link
              key={t.step}
              href="/tour"
              className="group rounded-2xl border border-line bg-cream p-6 transition-transform hover:-translate-y-0.5"
            >
              <p className="font-display text-sm text-clinic">{t.step}</p>
              <p className="mt-2 font-display text-xl text-ink">{t.title}</p>
              <p className="mt-2 text-sm text-muted">{t.copy}</p>
              <p className="mt-4 inline-flex items-center gap-1 text-sm text-clinic">
                Abrir en el tour{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="!bg-paper-2">
        <Eyebrow>Clínicas que ya se ven así</Eyebrow>
        <h2 className="mt-3 font-display text-3xl">México, no un template global</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.clinic} className="rounded-2xl border border-line bg-cream p-6">
              <blockquote className="text-sm leading-relaxed text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm">
                <p className="font-medium text-ink">{t.person}</p>
                <p className="text-muted">
                  {t.role} · {t.clinic}, {t.city}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-line bg-cream p-6">
              <p className="font-display text-4xl text-clinic">
                {s.value}
                {s.suffix}
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PLANS.filter((p) => p.id !== "enterprise").map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "rounded-2xl border p-6",
                plan.recommended ? "border-clinic bg-clinic text-cream" : "border-line bg-cream",
              )}
            >
              <p className="font-display text-lg">{plan.name}</p>
              <p className="mt-2 font-display text-3xl">{plan.priceLabel}</p>
              <p className={cn("text-sm", plan.recommended ? "text-cream/70" : "text-muted")}>
                {plan.period} · {plan.doctors}
              </p>
              <ButtonLink
                href="/contacto"
                variant={plan.recommended ? "amber" : "ghost"}
                className="mt-5 w-full"
              >
                {plan.cta}
              </ButtonLink>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-muted">
          <Link href="/precios" className="text-clinic underline-offset-4 hover:underline">
            Ver planes completos
          </Link>
        </p>
      </Section>

      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <Building2 className="mx-auto size-8 text-amber" />
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Deja el cuaderno. Ponle tu logo al sistema.
          </h2>
          <p className="mt-4 text-cream/70">
            14 días para ver tu operación con tu marca. El tutor usa{" "}
            <Smartphone className="inline size-4" /> Fochi sin costo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contacto" variant="amber">
              Pedir demo
            </ButtonLink>
            <ButtonLink
              href="/tour"
              variant="ghost"
              className="border-cream/20 text-cream hover:bg-cream/10"
            >
              Ver tour
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
