import type { Metadata } from "next";
import { FochiPage } from "@/components/fochi-page";

export const metadata: Metadata = {
  title: "Fochi — la app del tutor",
  description:
    "Fochi es gratis para el tutor. Historial, peso, recordatorios y las promociones de su clínica. La veterinaria es quien invierte.",
};

export default function Page() {
  return <FochiPage />;
}
