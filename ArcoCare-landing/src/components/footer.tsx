import { Link } from "@tanstack/react-router";
import { ArcoLogo, FochiWordmark } from "@/components/logo";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <ArcoLogo className="text-cream" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            El sistema de tu clínica, con tu logo. Fochi cuida la relación con
            cada tutor. Una inversión que se paga sola en operación y en clientes
            que vuelven.
          </p>
        </div>
        <div>
          <p className="font-display text-sm font-medium">Producto</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/70">
            <li>
              <Link to="/producto" className="hover:text-cream">
                Arco Care
              </Link>
            </li>
            <li>
              <Link to="/fochi" className="hover:text-cream">
                <FochiWordmark className="text-sm text-inherit" />
              </Link>
            </li>
            <li>
              <Link to="/tour" className="hover:text-cream">
                Tour
              </Link>
            </li>
            <li>
              <Link to="/precios" className="hover:text-cream">
                Precios
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-medium">Legal y contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/70">
            <li>
              <Link to="/contacto" className="hover:text-cream">
                Pedir demo
              </Link>
            </li>
            <li>
              <Link to="/privacidad" className="hover:text-cream">
                Aviso de privacidad
              </Link>
            </li>
            <li>
              <a
                href={SITE.holdingUrl}
                className="hover:text-cream"
                rel="noreferrer"
              >
                {SITE.holding}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Un producto de {SITE.holding}.</p>
          <p>Hecho en México.</p>
        </div>
      </div>
    </footer>
  );
}
