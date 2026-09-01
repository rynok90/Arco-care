import {
  AppointmentMock,
  DashboardMock,
  InventoryMock,
  PrescriptionMock,
  PromoMock,
  WhiteLabelSlider,
} from "@/components/mocks";
import { ButtonLink } from "@/components/marketing-button";
import { Eyebrow, Section } from "@/components/section";
import { MODULES } from "@/lib/site";

const MOCKS = [
  DashboardMock,
  AppointmentMock,
  PrescriptionMock,
  InventoryMock,
  DashboardMock,
  PromoMock,
];

export function ProductoPage() {
  return (
    <>
      <Section>
        <Eyebrow>Arco Care</Eyebrow>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          El sistema de tu clínica, no el de una marca genérica.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Cada módulo existe para ahorrar tiempo, bajar no-shows o hacer que el
          cliente compre de nuevo. Nada de promesas médicas: operación y
          relación.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contacto" variant="amber">
            Pedir demo
          </ButtonLink>
          <ButtonLink href="/tour" variant="ghost">
            Ver tour
          </ButtonLink>
        </div>
      </Section>
      {MODULES.map((mod, i) => {
        const Mock = MOCKS[i] ?? DashboardMock;
        const dark = i % 2 === 1;
        return (
          <Section key={mod.id} dark={dark}>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <Eyebrow>
                  <span className={dark ? "text-amber" : undefined}>{mod.name}</span>
                </Eyebrow>
                <h2 className="mt-3 font-display text-3xl">{mod.kicker}</h2>
                <ul className="mt-5 space-y-3">
                  {mod.benefit.map((b) => (
                    <li key={b} className={dark ? "text-cream/75" : "text-muted"}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <Mock />
            </div>
          </Section>
        );
      })}
      <Section>
        <WhiteLabelSlider />
      </Section>
    </>
  );
}
