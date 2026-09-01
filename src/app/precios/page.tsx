import type { Metadata } from "next";
import { PreciosPage } from "@/components/precios-page";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Starter $1,099, Growth $1,899, Pro $2,999 MXN al mes. Trial 14 días. Inversión para la clínica, Fochi gratis para el tutor.",
};

export default function Page() {
  return <PreciosPage />;
}
