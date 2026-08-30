import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  AppointmentMock,
  DashboardMock,
  FochiTutorMock,
  InventoryMock,
  LoginMock,
  PetFileMock,
  PrescriptionMock,
  PromoMock,
} from "@/components/mocks";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { TOUR_STEPS } from "@/lib/tour-demo";

const FRAMES = [
  LoginMock,
  DashboardMock,
  PetFileMock,
  AppointmentMock,
  PrescriptionMock,
  InventoryMock,
  PromoMock,
  FochiTutorMock,
];

export function TourPlayer({ startAt = 1 }: { startAt?: number }) {
  const [step, setStep] = useState(() =>
    Math.min(Math.max(startAt, 1), TOUR_STEPS.length),
  );
  const Frame = FRAMES[step - 1];
  const meta = TOUR_STEPS[step - 1];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setStep((s) => Math.min(s + 1, TOUR_STEPS.length));
      if (e.key === "ArrowLeft") setStep((s) => Math.max(s - 1, 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
      <ol className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
        {TOUR_STEPS.map((s) => (
          <li key={s.id} className="min-w-[11rem] lg:min-w-0">
            <button
              type="button"
              onClick={() => setStep(s.id)}
              className={cn(
                "w-full rounded-xl border px-3 py-3 text-left transition-colors",
                s.id === step
                  ? "border-clinic bg-clinic text-cream"
                  : "border-line bg-cream text-ink hover:bg-paper-2",
              )}
            >
              <span className="block text-[11px] uppercase tracking-wider opacity-70">
                {String(s.id).padStart(2, "0")} · {s.kicker}
              </span>
              <span className="mt-1 block text-sm font-medium">{s.title}</span>
            </button>
          </li>
        ))}
      </ol>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-clinic">
          Paso {step} de {TOUR_STEPS.length}
        </p>
        <h2 className="mt-1 font-display text-3xl text-ink">{meta.title}</h2>
        <p className="mt-2 max-w-2xl text-muted">{meta.caption}</p>
        <div className="relative mt-6 min-h-[340px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <Frame />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-1 rounded-lg border border-line px-4 text-sm disabled:opacity-40"
              disabled={step === 1}
              onClick={() => setStep((s) => s - 1)}
            >
              <ChevronLeft className="size-4" /> Anterior
            </button>
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-1 rounded-lg bg-clinic px-4 text-sm text-cream disabled:opacity-40"
              disabled={step === TOUR_STEPS.length}
              onClick={() => setStep((s) => s + 1)}
            >
              Siguiente <ChevronRight className="size-4" />
            </button>
          </div>
          <ButtonLink to="/contacto" variant="amber">
            Pedir demo
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
