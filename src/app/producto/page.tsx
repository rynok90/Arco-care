import type { Metadata } from "next";
import { ProductoPage } from "@/components/producto-page";

export const metadata: Metadata = {
  title: "Producto",
  description:
    "Agenda, fichas, recetas PDF con tu logo, inventario, staff y promociones. El sistema de tu clínica veterinaria.",
};

export default function Page() {
  return <ProductoPage />;
}
