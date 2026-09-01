import type { Metadata } from "next";
import { TourPage } from "@/components/tour-page";

export const metadata: Metadata = {
  title: "Tour",
  description:
    "Recorre ocho pasos: del login de la clínica hasta lo que ve el tutor en Fochi. Mock reemplazable por capturas reales.",
};

export default function Page() {
  return <TourPage />;
}
