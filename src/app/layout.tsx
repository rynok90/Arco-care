import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — el sistema de tu clínica`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Arco Care ordena la operación de tu veterinaria. Fochi mantiene viva la relación con cada mascota. Inversión, no gasto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${inter.variable} ${outfit.variable} antialiased`}>
      <body>
        <div className="relative min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
