import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Eyebrow, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { PLANS, SITE } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: `Pedir demo — ${SITE.name}` },
      {
        name: "description",
        content:
          "Pide una demo de Arco Care. Te escribimos en menos de un día hábil. Datos tratados bajo LFPDPPP.",
      },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: conectar Resend / endpoint cuando G08 esté listo. Hoy es submit simulado.
    setSent(true);
    toast.success("Te escribimos en menos de 1 día hábil.");
  }

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
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-line bg-cream p-6 shadow-[var(--shadow-card)]"
        >
          <Field label="Nombre" name="nombre" required />
          <Field label="Clínica" name="clinica" required />
          <Field label="Ciudad" name="ciudad" required />
          <Field label="WhatsApp" name="whatsapp" type="tel" required />
          <label className="mt-4 block text-sm text-ink">
            Plan de interés
            <select
              name="plan"
              className="mt-1 h-11 w-full rounded-lg border border-line bg-paper px-3 text-sm"
              defaultValue="growth"
            >
              {PLANS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>
          <label className="mt-4 block text-sm text-ink">
            Mensaje
            <textarea
              name="mensaje"
              rows={4}
              className="mt-1 w-full rounded-lg border border-line bg-paper px-3 py-2 text-sm"
              placeholder="Número de médicos, si ya usan otro sistema, lo que más les duele…"
            />
          </label>
          <Button type="submit" variant="amber" className="mt-6 w-full" disabled={sent}>
            {sent ? "Recibido" : "Enviar"}
          </Button>
          <p className="mt-3 text-xs text-muted">
            Al enviar aceptas el aviso de privacidad. No compartimos tu lista.
          </p>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="mt-4 block text-sm text-ink first:mt-0">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 h-11 w-full rounded-lg border border-line bg-paper px-3 text-sm"
      />
    </label>
  );
}
