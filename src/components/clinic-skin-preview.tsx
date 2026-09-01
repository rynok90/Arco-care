"use client";

import { useState } from "react";
import { PhoneMock } from "@/components/mocks";
import { CLINIC_SKINS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ClinicSkinPreview() {
  const [skin, setSkin] = useState(0);
  const clinic = CLINIC_SKINS[skin];

  return (
    <div className="mt-12 rounded-2xl border border-cream/10 bg-cream/5 p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-cream/80">
          Un tutor puede ir a dos clínicas. Al entrar, cambia el logo.
        </p>
        <div className="flex rounded-lg bg-ink p-1">
          {CLINIC_SKINS.slice(0, 2).map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSkin(i)}
              className={cn(
                "min-h-11 rounded-md px-4 text-sm",
                skin === i ? "bg-cream text-ink" : "text-cream/70",
              )}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <div
          className="flex size-14 items-center justify-center rounded-2xl text-sm font-semibold text-cream"
          style={{ background: clinic.color }}
        >
          {clinic.initials}
        </div>
        <div>
          <p className="font-display text-2xl">{clinic.name}</p>
          <p className="text-sm text-cream/60">{clinic.city} · branding de esta sede</p>
        </div>
        <PhoneMock
          clinicName={clinic.name}
          color={clinic.color}
          className="sm:ml-auto"
        />
      </div>
    </div>
  );
}
