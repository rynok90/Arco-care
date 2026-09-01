# Arco Care

**Arco Care** es el SaaS de clínicas veterinarias de **MERBAL** en México: agenda, expedientes y operación de la clínica con la marca del veterinario.

Este repositorio es la aplicación web de **Arco Care**. El kit de marketing original vive en `ArcoCare-landing/` (referencia de copy y diseño; no se modifica).

## Requisitos

- Node.js 20 o superior
- npm

## Instalar y correr en local

```bash
npm install
cp .env.example .env
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). La home es el sitio de marketing (tagline **Tu clínica, con tu nombre.**). Rutas: `/`, `/producto`, `/fochi`, `/tour`, `/precios`, `/contacto`, `/privacidad`. La página de mantenimiento está en `/standby.html`.

No hace falta una base de datos ni un `SESSION_SECRET` real para arrancar el home.

En PowerShell, si `cp` no está disponible:

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

## Scripts

| Comando | Qué hace |
| --- | --- |
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor de desarrollo |
| `npm test` | Corre los tests del esqueleto |
| `npm run build` | Compila para producción |
| `npm start` | Sirve el build de producción |

## Variables de entorno

Copia `.env.example` a `.env`. Incluye:

- `DATABASE_URL` — conexión PostgreSQL para Prisma
- `SESSION_SECRET` — reservado para sesiones futuras
