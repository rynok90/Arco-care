import { ContactForm } from "@/components/contact-form";
import { Eyebrow, Section } from "@/components/section";

export function ContactoPage() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Demo</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Cuéntanos de tu clínica.
          </h1>
          <p className="mt-4 text-lg text-muted">
            Te escribimos en menos de 1 día hábil. México. Datos tratados bajo
            LFPDPPP. Sin spam.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-muted">
            <li>14 días para poner tu logo y ver el día ordenado.</li>
            <li>Fochi gratis para tus tutores.</li>
            <li>Sin cobro en esta etapa del formulario.</li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
