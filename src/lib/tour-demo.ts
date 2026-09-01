// TOUR_MOCK — sustituir frames por capturas reales en G11+

export const TOUR_CLINIC = {
  name: "Clínica Norte",
  initials: "CN",
  city: "Guadalajara",
  color: "#1F6B57",
  accent: "#E8A54B",
} as const;

export const TOUR_STAFF = {
  doctor: "Dra. Elena Ruiz",
  reception: "Sofía Vega",
} as const;

export const TOUR_TUTOR = {
  name: "Ana López",
  phone: "33 1450 2291",
} as const;

export const TOUR_PETS = {
  luna: {
    name: "Luna",
    species: "Perro",
    breed: "Border collie",
    age: "3 años",
    weight: "16.4 kg",
    delta: "+200 g",
  },
  coco: {
    name: "Coco",
    species: "Ave",
    breed: "Loro amazónico",
    age: "7 años",
    weight: "380 g",
    delta: "estable",
  },
} as const;

export const TOUR_APPOINTMENTS = [
  { time: "09:00", pet: "Luna", tutor: "Ana López", reason: "Control de peso", doctor: "Dra. Ruiz", status: "En sala" },
  { time: "09:30", pet: "Coco", tutor: "Ana López", reason: "Revisión pico", doctor: "Dra. Ruiz", status: "Confirmada" },
  { time: "10:15", pet: "Milo", tutor: "Jorge Peña", reason: "Vacuna anual", doctor: "Dr. Campos", status: "Por llegar" },
  { time: "11:00", pet: "Nube", tutor: "Patricia Gil", reason: "Corte y baño", doctor: "Estética", status: "Agendada" },
] as const;

export const TOUR_STOCK = [
  { sku: "VAC-RAB-01", name: "Vacuna antirrábica", stock: 3, min: 8, unit: "dosis" },
  { sku: "DES-INT-04", name: "Desparasitante oral 10 ml", stock: 2, min: 6, unit: "frascos" },
  { sku: "ALI-REN-2K", name: "Alimento renal 2 kg", stock: 14, min: 4, unit: "bolsas" },
] as const;

export const TOUR_PROMO = {
  title: "Refuerzo de vacunas · septiembre",
  body: "20% en paquete anual si agendan esta semana desde Fochi.",
  valid: "Vigente al 30 sep 2026",
} as const;

export const TOUR_RX = {
  date: "26 ago 2026",
  diagnosis: "Control nutricional y seguimiento de peso",
  items: [
    { name: "Alimento gastrointestinal", dose: "120 g / día, dividido en 2 tomas", days: "30 días" },
    { name: "Probiótico veterinario", dose: "1 sobre con el alimento de la mañana", days: "14 días" },
  ],
} as const;

export const TOUR_STEPS = [
  {
    id: 1,
    kicker: "Acceso",
    title: "Entrar a tu clínica",
    caption: "Cada organización tiene su espacio. El logo que ves es el tuyo, no el de otra veterinaria.",
  },
  {
    id: 2,
    kicker: "Operación",
    title: "El dashboard del día",
    caption: "Citas, stock bajo y quién ya está en sala. Sin preguntar a gritos en pasillo.",
  },
  {
    id: 3,
    kicker: "Expediente",
    title: "Ficha de Coco, el loro",
    caption: "No todo es perro y gato. El modelo admite ave, reptil, roedor o exótico.",
  },
  {
    id: 4,
    kicker: "Agenda",
    title: "Crear la cita",
    caption: "Se asigna médico, horario y motivo. Queda en el sistema, no en un chat.",
  },
  {
    id: 5,
    kicker: "Marca",
    title: "Receta PDF con tu logo",
    caption: "Sale con la identidad de Clínica Norte. El tutor se la lleva. Tú te quedas el historial.",
  },
  {
    id: 6,
    kicker: "Inventario",
    title: "Stock que avisa",
    caption: "Tres dosis de antirrábica y el mínimo era ocho. Mejor enterarte hoy que mañana en consulta.",
  },
  {
    id: 7,
    kicker: "Relación",
    title: "Publicar una promo",
    caption: "La clínica habla. No un marketplace genérico: tu campaña, tu logo, tus clientes.",
  },
  {
    id: 8,
    kicker: "Fochi",
    title: "Lo que ve el tutor",
    caption: "Ana abre Fochi, ve el logo de Clínica Norte, el +200 g de Luna y la promo de septiembre.",
  },
] as const;
