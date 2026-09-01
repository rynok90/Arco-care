import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — tu clínica, con tu nombre`,
  description:
    "Arco Care ordena la operación. Fochi mantiene viva la relación con cada mascota. Hecho para clínicas en México.",
};

export default function Page() {
  return <HomePage />;
}
