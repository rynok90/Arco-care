# Arco Care + Fochi — sitio marketing

Sitio de marketing en español de México para **Arco Care** (web de la clínica) y **Fochi** (app del tutor). Holding: MERBAL.

Esto **no es el SaaS**. El tour es un mock de UI (`src/lib/tour-demo.ts` y los frames en `src/components/mocks.tsx`) pensado para sustituirse por capturas reales cuando el producto exista.

## Páginas

- `/` inicio
- `/producto` Arco Care
- `/fochi` app del tutor
- `/tour` 8 pasos interactivos
- `/precios`
- `/contacto` formulario simulado
- `/privacidad` LFPDPPP

## Datos editables

- Precios, módulos, testimonios: `src/lib/site.ts`
- Guion del tour: `src/lib/tour-demo.ts`

## Qué falta conectar

- Formulario de contacto: UI lista, submit simulado (toast). TODO en `src/routes/contacto.tsx` para Resend.
- Analytics: no integrado.
- Auth, base de datos y pagos: fuera de este sitio.

## Desarrollo

`npm run dev` (el entorno de preview ya lo arranca).
