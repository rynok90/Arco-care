import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "sonner";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteChrome } from "@/components/site-chrome";
import { AuthProvider } from "@/lib/auth/provider";
import { SITE } from "@/lib/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} — el sistema de tu clínica` },
      {
        name: "description",
        content:
          "Arco Care ordena la operación de tu veterinaria. Fochi mantiene viva la relación con cada mascota. Inversión, no gasto.",
      },
      { name: "theme-color", content: "#1F6B57" },
      { name: "lang", content: "es-MX" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Root,
  notFoundComponent: NotFound,
});

function Root() {
  return (
    <html lang="es-MX" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteChrome>
            <Outlet />
          </SiteChrome>
          <Toaster position="top-center" richColors />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="text-sm text-clinic">404</p>
      <h1 className="mt-2 font-display text-4xl text-ink">Esta página no existe</h1>
      <p className="mt-3 text-muted">Vuelve al inicio o pide una demo.</p>
    </div>
  );
}
