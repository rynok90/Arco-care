import { useState, type ReactNode } from "react";
import { Bell, Calendar, Package, TrendingUp } from "lucide-react";
import { cn } from "@/lib/cn";
import { CLINIC_SKINS } from "@/lib/site";
import {
  TOUR_APPOINTMENTS,
  TOUR_CLINIC,
  TOUR_PETS,
  TOUR_PROMO,
  TOUR_RX,
  TOUR_STAFF,
  TOUR_STOCK,
  TOUR_TUTOR,
} from "@/lib/tour-demo";

function WindowChrome({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-cream shadow-[var(--shadow-float)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line bg-paper-2 px-4 py-2.5">
        <span className="size-2 rounded-full bg-line-strong" />
        <span className="size-2 rounded-full bg-line-strong" />
        <span className="size-2 rounded-full bg-line-strong" />
        <p className="ml-2 truncate text-xs text-muted">{title}</p>
      </div>
      {children}
    </div>
  );
}

export function DashboardMock({ className }: { className?: string }) {
  return (
    <WindowChrome title="Arco Care · Clínica Norte" className={className}>
      <div className="grid gap-3 p-4 sm:grid-cols-5">
        <div className="sm:col-span-3">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted">
            Citas de hoy
          </p>
          <ul className="mt-2 space-y-2">
            {TOUR_APPOINTMENTS.slice(0, 3).map((a) => (
              <li
                key={a.time}
                className="flex items-center justify-between rounded-lg border border-line bg-paper px-3 py-2"
              >
                <div>
                  <p className="text-sm font-medium text-ink">
                    {a.time} · {a.pet}
                  </p>
                  <p className="text-xs text-muted">{a.reason}</p>
                </div>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-medium",
                    a.status === "En sala"
                      ? "bg-clinic/15 text-clinic"
                      : "bg-paper-2 text-muted",
                  )}
                >
                  {a.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 sm:col-span-2">
          <div className="rounded-lg border border-amber/40 bg-amber/15 p-3">
            <div className="flex items-center gap-2 text-amber-ink">
              <Package className="size-4" />
              <p className="text-xs font-medium">Stock bajo</p>
            </div>
            <p className="mt-1 text-sm text-ink">Antirrábica · 3 dosis</p>
          </div>
          <div className="rounded-lg border border-line bg-paper p-3">
            <p className="text-[11px] uppercase tracking-wider text-muted">
              Paciente
            </p>
            <p className="mt-1 font-display text-base font-medium text-ink">
              Luna · border collie
            </p>
            <p className="text-xs text-muted">Ana López · control de peso</p>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

export function PhoneMock({
  clinicName = TOUR_CLINIC.name,
  color = TOUR_CLINIC.color,
  className,
}: {
  clinicName?: string;
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[230px] rounded-[28px] border border-ink/20 bg-ink p-2 shadow-[var(--shadow-float)]",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[22px] bg-paper">
        <div className="flex items-center justify-between px-4 pt-3 text-[10px] text-muted">
          <span>09:41</span>
          <span className="mx-auto h-3 w-16 rounded-full bg-ink/80" />
          <span>5G</span>
        </div>
        <div className="px-4 pb-5 pt-3">
          <div className="flex items-center justify-between">
            <p className="font-display text-lg font-semibold text-fochi">Fochi</p>
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-medium text-cream"
              style={{ background: color }}
            >
              {clinicName}
            </span>
          </div>
          <div className="relative mt-4 overflow-hidden rounded-xl border border-line bg-cream p-3">
            <p className="text-[11px] text-muted">{TOUR_PETS.luna.name}</p>
            <p className="font-display text-2xl font-medium text-ink">
              {TOUR_PETS.luna.weight}
            </p>
            <p className="mt-1 inline-flex items-center gap-1 text-sm text-clinic">
              <TrendingUp className="size-4" />
              Subió {TOUR_PETS.luna.delta}
            </p>
            <span className="confetti-dot bg-amber left-8 top-8" />
            <span className="confetti-dot bg-fochi left-16 top-6 [animation-delay:200ms]" />
            <span className="confetti-dot bg-clinic left-24 top-10 [animation-delay:400ms]" />
          </div>
          <div className="mt-3 rounded-xl border border-line bg-paper-2 p-3">
            <div className="flex items-center gap-2 text-xs font-medium text-ink">
              <Bell className="size-3.5 text-fochi" />
              Recordatorio
            </div>
            <p className="mt-1 text-xs text-muted">
              Control de Luna · hoy 9:00 · {clinicName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LoginMock() {
  return (
    <WindowChrome title="Entrar · Arco Care">
      <div className="mx-auto max-w-sm px-6 py-8">
        <div
          className="mb-5 flex size-12 items-center justify-center rounded-xl text-sm font-semibold text-cream"
          style={{ background: TOUR_CLINIC.color }}
        >
          {TOUR_CLINIC.initials}
        </div>
        <p className="font-display text-xl font-medium text-ink">{TOUR_CLINIC.name}</p>
        <p className="text-sm text-muted">Guadalajara · espacio privado</p>
        <label className="mt-6 block text-xs text-muted" htmlFor="tour-email">
          Correo
        </label>
        <input
          id="tour-email"
          readOnly
          value="elena@clinicanorte.mx"
          className="mt-1 w-full rounded-md border border-line bg-paper px-3 py-2 text-sm"
        />
        <label className="mt-3 block text-xs text-muted" htmlFor="tour-pass">
          Contraseña
        </label>
        <input
          id="tour-pass"
          readOnly
          type="password"
          value="••••••••"
          className="mt-1 w-full rounded-md border border-line bg-paper px-3 py-2 text-sm"
        />
        <div className="mt-5 rounded-lg bg-clinic px-4 py-2.5 text-center text-sm font-medium text-cream">
          Entrar a mi clínica
        </div>
      </div>
    </WindowChrome>
  );
}

export function PetFileMock() {
  const p = TOUR_PETS.coco;
  return (
    <WindowChrome title="Ficha · Coco">
      <div className="grid gap-4 p-5 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <div className="flex aspect-square items-center justify-center rounded-xl bg-clinic/10 font-display text-4xl text-clinic">
            Co
          </div>
          <p className="mt-3 font-display text-xl font-medium text-ink">{p.name}</p>
          <p className="text-sm text-muted">
            {p.species} · {p.breed}
          </p>
          <p className="mt-1 text-xs text-muted">
            Tutor: {TOUR_TUTOR.name}
          </p>
        </div>
        <div className="space-y-3 sm:col-span-2">
          <div className="grid grid-cols-3 gap-2">
            {[
              ["Edad", p.age],
              ["Peso", p.weight],
              ["Estado", p.delta],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-line bg-paper p-3">
                <p className="text-[11px] text-muted">{k}</p>
                <p className="text-sm font-medium text-ink">{v}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-line p-3">
            <p className="text-xs font-medium text-ink">Notas clínicas</p>
            <p className="mt-1 text-sm text-muted">
              Plumaje brillante. Pico con desgaste leve en el borde. Dieta de
              pellets + verdura. Próximo recorte de uñas en 6 semanas.
            </p>
          </div>
          <p className="text-xs text-clinic">
            Especie: ave. El expediente no asume perro o gato.
          </p>
        </div>
      </div>
    </WindowChrome>
  );
}

export function AppointmentMock() {
  return (
    <WindowChrome title="Nueva cita">
      <div className="grid gap-4 p-5 sm:grid-cols-2">
        <div className="space-y-3">
          {[
            ["Paciente", "Coco · loro amazónico"],
            ["Tutor", TOUR_TUTOR.name],
            ["Médico", TOUR_STAFF.doctor],
            ["Fecha", "27 ago 2026 · 09:30"],
            ["Motivo", "Revisión de pico y uñas"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="text-[11px] text-muted">{k}</p>
              <p className="rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink">
                {v}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-line bg-paper p-4">
          <div className="flex items-center gap-2 text-clinic">
            <Calendar className="size-4" />
            <p className="text-sm font-medium">Hueco sugerido</p>
          </div>
          <p className="mt-3 font-display text-2xl text-ink">09:30</p>
          <p className="text-sm text-muted">
            Dra. Ruiz libre 30 min. Recepción no tiene que preguntar.
          </p>
          <div className="mt-6 rounded-lg bg-clinic px-4 py-2.5 text-center text-sm font-medium text-cream">
            Confirmar cita
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

export function PrescriptionMock() {
  return (
    <WindowChrome title="Receta PDF">
      <div className="m-4 rounded-xl border border-line bg-cream p-5">
        <div className="flex items-start justify-between border-b border-line pb-3">
          <div className="flex items-center gap-3">
            <div
              className="flex size-10 items-center justify-center rounded-lg text-xs font-semibold text-cream"
              style={{ background: TOUR_CLINIC.color }}
            >
              {TOUR_CLINIC.initials}
            </div>
            <div>
              <p className="font-display font-medium text-ink">{TOUR_CLINIC.name}</p>
              <p className="text-xs text-muted">Receta veterinaria · {TOUR_RX.date}</p>
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-wider text-muted">PDF</p>
        </div>
        <p className="mt-4 text-sm text-ink">
          Paciente: {TOUR_PETS.luna.name} · {TOUR_PETS.luna.breed}
        </p>
        <p className="text-xs text-muted">Tutor: {TOUR_TUTOR.name}</p>
        <p className="mt-3 text-sm text-muted">{TOUR_RX.diagnosis}</p>
        <ul className="mt-4 space-y-2">
          {TOUR_RX.items.map((item) => (
            <li key={item.name} className="rounded-lg bg-paper px-3 py-2 text-sm">
              <p className="font-medium text-ink">{item.name}</p>
              <p className="text-xs text-muted">
                {item.dose} · {item.days}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-right text-xs text-muted">{TOUR_STAFF.doctor}</p>
      </div>
    </WindowChrome>
  );
}

export function InventoryMock() {
  return (
    <WindowChrome title="Inventario">
      <div className="p-4">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wider text-muted">
            <tr>
              <th className="pb-2 font-medium">Producto</th>
              <th className="pb-2 font-medium">Stock</th>
              <th className="pb-2 font-medium">Mínimo</th>
            </tr>
          </thead>
          <tbody>
            {TOUR_STOCK.map((row) => (
              <tr key={row.sku} className="border-t border-line">
                <td className="py-2.5">
                  <p className="text-ink">{row.name}</p>
                  <p className="text-[11px] text-muted">{row.sku}</p>
                </td>
                <td
                  className={cn(
                    "py-2.5 tabular-nums",
                    row.stock < row.min ? "font-medium text-danger" : "text-ink",
                  )}
                >
                  {row.stock} {row.unit}
                </td>
                <td className="py-2.5 text-muted tabular-nums">
                  {row.min}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </WindowChrome>
  );
}

export function PromoMock() {
  return (
    <WindowChrome title="Nueva promoción">
      <div className="space-y-4 p-5">
        <div>
          <p className="text-[11px] text-muted">Título</p>
          <p className="mt-1 rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink">
            {TOUR_PROMO.title}
          </p>
        </div>
        <div>
          <p className="text-[11px] text-muted">Mensaje para Fochi</p>
          <p className="mt-1 rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink">
            {TOUR_PROMO.body}
          </p>
        </div>
        <p className="text-xs text-muted">{TOUR_PROMO.valid}</p>
        <div className="rounded-lg bg-clinic px-4 py-2.5 text-center text-sm font-medium text-cream">
          Publicar en Fochi
        </div>
      </div>
    </WindowChrome>
  );
}

export function FochiTutorMock() {
  return (
    <div className="flex justify-center rounded-2xl bg-ink px-6 py-8">
      <PhoneMock />
    </div>
  );
}

export function WhiteLabelSlider() {
  const [i, setI] = useState(0);
  const skin = CLINIC_SKINS[i];
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-display text-lg text-ink">Tu logo. Tu color.</p>
        <div className="flex gap-2">
          <button
            type="button"
            className="min-h-11 rounded-lg border border-line px-3"
            onClick={() => setI((n) => (n + CLINIC_SKINS.length - 1) % CLINIC_SKINS.length)}
          >
            Anterior
          </button>
          <button
            type="button"
            className="min-h-11 rounded-lg border border-line px-3"
            onClick={() => setI((n) => (n + 1) % CLINIC_SKINS.length)}
          >
            Siguiente
          </button>
        </div>
      </div>
      <div className="mt-5 overflow-hidden rounded-2xl border border-line bg-cream p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="flex size-12 items-center justify-center rounded-xl text-sm font-semibold text-cream"
              style={{ background: skin.color }}
            >
              {skin.initials}
            </div>
            <div>
              <p className="font-display text-xl text-ink">{skin.name}</p>
              <p className="text-sm text-muted">{skin.city}</p>
            </div>
          </div>
          <span
            className="hidden rounded-full px-3 py-1 text-xs font-medium text-cream sm:inline"
            style={{ background: skin.accent, color: "#3d2a0c" }}
          >
            White-label
          </span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {["Agenda del día", "Receta PDF", "Fochi del tutor"].map((label) => (
            <div
              key={label}
              className="rounded-xl border border-line p-4"
              style={{ borderColor: `${skin.color}33` }}
            >
              <div className="h-1.5 w-12 rounded-full" style={{ background: skin.color }} />
              <p className="mt-3 text-sm font-medium text-ink">{label}</p>
              <p className="text-xs text-muted">Pinta con el color de {skin.name}.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

