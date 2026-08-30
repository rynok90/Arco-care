import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: `Aviso de privacidad — ${SITE.name}` },
      {
        name: "description",
        content:
          "Aviso de privacidad de Arco Care conforme a la LFPDPPP. Responsable: MERBAL.",
      },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <Section>
      <h1 className="font-display text-4xl font-semibold tracking-tight">
        Aviso de privacidad
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        En cumplimiento de la Ley Federal de Protección de Datos Personales en
        Posesión de los Particulares (LFPDPPP) y su Reglamento.
      </p>
      <div className="mt-10 max-w-2xl space-y-6 text-sm leading-relaxed text-ink-soft">
        <p>
          <strong>Responsable.</strong> MERBAL, con sitio en merbal.lat, es
          responsable del tratamiento de los datos que recabe a través de este
          sitio de Arco Care y Fochi.
        </p>
        <p>
          <strong>Datos que recabamos.</strong> En el formulario de demo:
          nombre, clínica, ciudad, número de WhatsApp, plan de interés y el
          mensaje que usted escriba. No solicitamos datos clínicos de pacientes
          ni de mascotas en este sitio de marketing.
        </p>
        <p>
          <strong>Finalidad.</strong> Contactarlo para una demostración,
          responder dudas comerciales y, en su caso, dar seguimiento a una
          prueba. No vendemos bases. No enviamos publicidad masiva.
        </p>
        <p>
          <strong>Conservación.</strong> Los mensajes de demo se conservan el
          tiempo necesario para atender la solicitud. Este sitio, en su versión
          actual, simula el envío: aún no hay almacenamiento productivo del
          formulario.
        </p>
        <p>
          <strong>Derechos ARCO.</strong> Puede acceder, rectificar, cancelar u
          oponerse al tratamiento de sus datos escribiendo a través de la
          página de contacto. Responderemos en los plazos que marca la ley.
        </p>
        <p>
          <strong>Transferencias.</strong> No transferimos datos a terceros
          ajenos a la operación, salvo obligación legal. Infraestructura futura
          (correo transaccional, hospedaje) se documentará cuando se active.
        </p>
        <p>
          <strong>Cambios.</strong> Cualquier actualización a este aviso se
          publicará en esta misma ruta.
        </p>
        <p className="text-muted">Hecho en México. Última actualización: 26 de agosto de 2026.</p>
      </div>
    </Section>
  );
}
