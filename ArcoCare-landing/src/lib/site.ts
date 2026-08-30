export const SITE = {
  name: "Arco Care",
  tagline: "Tu clínica, con tu nombre.",
  holding: "MERBAL",
  holdingUrl: "https://merbal.lat",
  locale: "es-MX",
  currency: "MXN",
  trialDays: 14,
} as const;

export const NAV = [
  { to: "/producto", label: "Producto" },
  { to: "/fochi", label: "Fochi" },
  { to: "/tour", label: "Tour" },
  { to: "/precios", label: "Precios" },
] as const;

export const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 1099,
    priceLabel: "$1,099",
    period: "MXN / mes",
    sites: "1 sitio",
    doctors: "Hasta 2 médicos",
    recommended: false,
    cta: "Quiero una demo",
    features: [
      "Agenda y fichas de pacientes",
      "Historial clínico y recetas PDF con tu logo",
      "Inventario básico y alertas de stock",
      "Staff y horarios",
      "Promociones de la clínica",
      "App Fochi gratis para tus tutores",
      "Recordatorios push en la app",
      "White-label: logo y color",
      "14 días de prueba",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: 1899,
    priceLabel: "$1,899",
    period: "MXN / mes",
    sites: "1 sitio",
    doctors: "Hasta 6 médicos",
    recommended: true,
    cta: "Quiero una demo",
    features: [
      "Todo lo de Starter",
      "Más médicos en el mismo sitio",
      "Dashboard operativo del día",
      "Más espacio para PDFs e historial",
      "Control de promociones por temporada",
      "Roles: dueño, médico, recepción",
      "Recordatorios push en la app",
      "WhatsApp entra después, incluido en el plan básico",
      "14 días de prueba",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 2999,
    priceLabel: "$2,999",
    period: "MXN / mes",
    sites: "1 sitio",
    doctors: "Hasta 15 médicos",
    recommended: false,
    cta: "Quiero una demo",
    features: [
      "Todo lo de Growth",
      "Clínica mediana o hospital veterinario",
      "Más asientos médicos",
      "Mejor visibilidad de ocupación y no-shows",
      "Promos y seguimiento de recompra",
      "Soporte prioritario",
      "Listo para crecer a multi-sede",
      "14 días de prueba",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    priceLabel: "A cotizar",
    period: "multi-sede",
    sites: "Varias sedes",
    doctors: "Médicos ilimitados",
    recommended: false,
    cta: "Quiero una demo",
    features: [
      "Control maestro de sedes",
      "5–10% de descuento por sede extra",
      "Branding por sede o grupo",
      "Acompañamiento de implantación",
    ],
  },
] as const;

export const MODULES = [
  {
    id: "agenda",
    name: "Agenda",
    kicker: "El día deja de improvisarse",
    benefit: [
      "Menos huecos muertos entre consultas.",
      "Menos no-shows: la cita vive en un solo lugar, no en un chat.",
    ],
  },
  {
    id: "pacientes",
    name: "Clientes y mascotas",
    kicker: "Cualquier especie, el mismo expediente",
    benefit: [
      "Dejas de buscar en cuadernos el dueño de un loro o un conejo.",
      "Un tutor puede atenderse en más de una clínica sin perder historial.",
    ],
  },
  {
    id: "historial",
    name: "Historial y recetas PDF",
    kicker: "Tu logo en cada receta",
    benefit: [
      "La receta se ve profesional: sale con la marca de tu clínica.",
      "El tutor se lleva el PDF. Tú te quedas el expediente.",
    ],
  },
  {
    id: "inventario",
    name: "Inventario",
    kicker: "El frasco no se acaba en silencio",
    benefit: [
      "Alertas de stock bajo antes de decirle que no al cliente.",
      "Menos merma: ves qué se mueve y qué se queda.",
    ],
  },
  {
    id: "staff",
    name: "Staff y horarios",
    kicker: "Quién atiende, y cuándo",
    benefit: [
      "La recepción deja de preguntar a gritos si el doctor ya llegó.",
      "Las citas se asignan al médico que sí está en piso.",
    ],
  },
  {
    id: "promos",
    name: "Promociones",
    kicker: "Tu clínica también se comunica",
    benefit: [
      "Vacuna, estética o desparasitación llegan al tutor en Fochi.",
      "La recompra deja de depender de que alguien recuerde mandar un mensaje.",
    ],
  },
] as const;

export const CLINIC_SKINS = [
  {
    id: "norte",
    name: "Clínica Norte",
    city: "Guadalajara",
    color: "#1F6B57",
    accent: "#E8A54B",
    initials: "CN",
  },
  {
    id: "centro",
    name: "Clínica Centro",
    city: "Ciudad de México",
    color: "#163D33",
    accent: "#C9A227",
    initials: "CC",
  },
  {
    id: "huella",
    name: "Huella Sur",
    city: "Monterrey",
    color: "#8A3A1A",
    accent: "#E8A54B",
    initials: "HS",
  },
] as const;

export const TESTIMONIALS = [
  {
    clinic: "Clínica Norte",
    city: "Guadalajara, Jalisco",
    quote:
      "Antes la agenda era un cuaderno y tres chats. En dos semanas la recepción dejó de preguntarme a cada rato qué paciente seguía.",
    person: "Dra. Elena Ruiz",
    role: "Socia fundadora",
  },
  {
    clinic: "Huella Sur",
    city: "Monterrey, N.L.",
    quote:
      "Lo que más se nota no es el sistema: es que el cliente ve nuestra marca en el celular. Se siente clínica, no improvisación.",
    person: "MVZ. Andrés Mora",
    role: "Director",
  },
  {
    clinic: "Clínica Centro",
    city: "Ciudad de México",
    quote:
      "El no-show bajó porque la cita ya no vive en un WhatsApp que se pierde. Fochi les recuerda. Nosotros atendemos.",
    person: "Lic. Mariana Soto",
    role: "Administración",
  },
] as const;

export const PAIN = [
  {
    id: "papel",
    title: "Expedientes en papel",
    chaos: "Hojas sueltas, letra de otro turno, el dueño espera mientras buscas.",
    order: "Ficha viva: peso, vacunas y recetas en un toque.",
  },
  {
    id: "whatsapp",
    title: "WhatsApp eterno",
    chaos: "Citas, fotos de análisis y “¿a qué hora?” mezclados con memes del grupo.",
    order: "La conversación operativa vive en el sistema. El chat deja de ser tu archivo.",
  },
  {
    id: "regreso",
    title: "Clientes que no regresan",
    chaos: "Se les olvida la refuerzo. Se van a la de la esquina porque nadie les habló.",
    order: "Fochi les recuerda. Tu logo aparece. Vuelven a ti, no a cualquiera.",
  },
] as const;

export const TOUR_TEASERS = [
  {
    step: "01",
    title: "El día en un vistazo",
    copy: "Citas, stock bajo y el paciente que ya está en sala.",
    hash: 2,
  },
  {
    step: "02",
    title: "La receta con tu logo",
    copy: "Sale profesional. El tutor se la lleva. Tú te quedas el expediente.",
    hash: 5,
  },
  {
    step: "03",
    title: "El tutor, en Fochi",
    copy: "Ve tu promo, el recordatorio y el peso de su mascota.",
    hash: 8,
  },
] as const;

export const FOCHI_FEATURES = [
  {
    id: "alta",
    title: "Alta de mascotas",
    copy: "Perro, gato, ave, reptil, roedor o exótico. El tutor registra una vez y el expediente viaja con él.",
  },
  {
    id: "historial",
    title: "Historial a la mano",
    copy: "Vacunas, recetas y visitas. Sin pedir que le tomen foto al cuaderno.",
  },
  {
    id: "peso",
    title: "Curva de peso",
    copy: "Si sube o baja, Fochi lo muestra con una reacción clara. El tutor entiende el cuidado, no un número suelto.",
  },
  {
    id: "recordatorios",
    title: "Recordatorios in-app",
    copy: "Cita, medicamento, estética. Primero en la app. WhatsApp entra después, incluido en el plan básico.",
  },
  {
    id: "promos",
    title: "Promos de SU clínica",
    copy: "No un marketplace genérico. La campaña que publica su veterinaria, con el logo de esa veterinaria.",
  },
] as const;

export const STATS = [
  { value: 14, suffix: " días", label: "de prueba, con tu logo puesto" },
  { value: 3, suffix: " planes", label: "claros, sin letra chiquita de IA mágica" },
  { value: 1, suffix: " app", label: "gratis para el tutor, siempre" },
] as const;
