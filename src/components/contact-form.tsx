"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/marketing-button";
import { PLANS } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Envío a Resend queda pendiente. Hoy el submit es visual.
    setSent(true);
  }

  return (
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
