import { Bell, Heart, Scale, Sparkles, Stethoscope } from "lucide-react";
import { FochiWordmark } from "@/components/logo";
import { ButtonLink } from "@/components/marketing-button";
import { PhoneMock } from "@/components/mocks";
import { Eyebrow, Section } from "@/components/section";
import { FOCHI_FEATURES } from "@/lib/site";

const ICONS = [Heart, Stethoscope, Scale, Bell, Sparkles];

export function FochiPage() {
  return (
    <>
      <Section className="overflow-hidden">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-fochi">
              App del tutor
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              <FochiWordmark className="text-5xl" /> cuida el vínculo.
              <span className="block text-muted">Tú cuidas la clínica.</span>
            </h1>
            <p className="mt-5 text-lg text-muted">
              Gratis para el tutor. La clínica es quien invierte. Perro, gato,
              ave, reptil, roedor o exótico: el expediente no elige especie.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contacto" variant="fochi">
                Quiero Fochi para mi clínica
              </ButtonLink>
              <ButtonLink href="/tour" variant="ghost">
                Ver el paso 8 del tour
              </ButtonLink>
            </div>
          </div>
          <PhoneMock className="lg:justify-self-end" />
        </div>
      </Section>
      <Section className="!bg-paper-2">
        <div className="grid gap-4 md:grid-cols-2">
          {FOCHI_FEATURES.map((f, i) => {
            const Icon = ICONS[i] ?? Heart;
            return (
              <article key={f.id} className="rounded-2xl border border-line bg-cream p-6">
                <Icon className="size-5 text-fochi" />
                <h2 className="mt-3 font-display text-xl text-ink">{f.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.copy}</p>
              </article>
            );
          })}
        </div>
      </Section>
      <Section dark>
        <div className="rounded-2xl border border-cream/10 p-8 text-center">
          <Eyebrow>
            <span className="text-amber">Próximamente en Fochi</span>
          </Eyebrow>
          <h2 className="mt-3 font-display text-3xl">Sugerencias de producto</h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/70">
            Más adelante el tutor podrá comprar alimento, juguetes o ropa desde
            la app. Hoy Fochi es historial, recordatorios y la voz de tu clínica.
            No fingimos una tienda que aún no existe.
          </p>
        </div>
      </Section>
    </>
  );
}
