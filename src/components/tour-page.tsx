import { Eyebrow, Section } from "@/components/section";
import { TourPlayer } from "@/components/tour-player";

export function TourPage() {
  return (
    <Section>
      <Eyebrow>Tour interactivo</Eyebrow>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Así se siente el día cuando el cuaderno ya no manda.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Escenario continuo con data de ejemplo. Cuando Arco Care y Fochi estén
        en producción, estos marcos se sustituyen por capturas reales — sin
        rehacer el sitio.
      </p>
      <div className="mt-10">
        <TourPlayer />
      </div>
    </Section>
  );
}
