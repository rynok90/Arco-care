import type { Metadata } from "next";
import { PrivacidadPage } from "@/components/privacidad-page";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad de Arco Care conforme a la LFPDPPP. Responsable: MERBAL.",
};

export default function Page() {
  return <PrivacidadPage />;
}
