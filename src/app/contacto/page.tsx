import type { Metadata } from "next";
import { ContactoPage } from "@/components/contacto-page";

export const metadata: Metadata = {
  title: "Pedir demo",
  description:
    "Pide una demo de Arco Care. Te escribimos en menos de un día hábil. Datos tratados bajo LFPDPPP.",
};

export default function Page() {
  return <ContactoPage />;
}
