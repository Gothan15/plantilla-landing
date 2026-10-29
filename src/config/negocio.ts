// ============================================================
// PLANTILLA DE LANDING — CONFIGURACIÓN DEL NEGOCIO
// ============================================================
// Este es el ÚNICO archivo que se edita para adaptar la plantilla
// a un negocio nuevo. El resto del código no se toca:
//   1. Edita los datos de abajo.
//   2. Cambia las fotos de public/fondos/ y public/fotos/.
//   3. Elige tema.fuente y tema.animacion de las opciones dadas.
// Los datos cargados ahora son de un NEGOCIO DE EJEMPLO (un estudio
// de cejas y pestañas) para poder ver la plantilla funcionando.
// Precios, zona y WhatsApp de ejemplo: se sustituyen por los reales
// de cada cliente. Si whatsapp queda en "", la página avisa de que
// falta el dato en vez de enlazar a un número equivocado.
// ============================================================

export const negocio = {
  // Identidad
  nombre: "Estudio Aura",
  rubro: "Cejas y pestañas",
  slogan: "Cejas y pestañas hechas con calma, a tu medida",
  descripcion:
    "Estudio de cejas y pestañas con cita previa. Eliges el servicio, escribes por WhatsApp y te confirmamos el turno en el mismo chat. Sin registros y sin descargar nada.",

  // Titular del hero, en tres partes: la del medio sale en itálica
  // de acento, como en una portada de revista.
  heroTitulo: {
    antes: "La mirada",
    italica: "también",
    despues: "se diseña",
  },
  notaHero: "cita previa · sin filas ni esperas",

  // Contacto (DE EJEMPLO: sustituir por los datos reales del cliente)
  whatsapp: "", // solo dígitos, con código de país. Ej.: "5351234567"
  zona: "Centro Habana (ejemplo)",
  horario: "Lun a Sáb · 9:00 am – 6:00 pm (ejemplo)",

  // Tema: se elige, no se programa
  tema: {
    colores: {
      papel: "#f7f2e9", // fondo tipo papel
      crema: "#ede3cf", // bloques suaves
      tinta: "#211812", // texto y bloques oscuros
      acento: "#b0512b", // terracota
      dorado: "#b9862f", // detalles y cifras
      linea: "#d8cbb2", // reglas y bordes
    },
    fuente: "editorial" as const, // editorial | moderna | clasica
    animacion: "editorial" as const, // editorial | suave | energica
  },

  // Fotos de AMBIENTE (public/fondos/): ilustran el tipo de servicio,
  // NUNCA se presentan como trabajos del negocio. Los trabajos reales
  // van solo en la galería (public/fotos/).
  fondos: {
    hero: "/fondos/hero.jpg",
    detalle: "/fondos/pestanas.jpg",
  },

  // Cinta que se desplaza bajo el hero (marquesina de revista)
  cinta: ["Cejas", "Pestañas", "Diseño a tu medida", "Retoques", "Cita previa", "Sin filas"],

  // Servicios del negocio de ejemplo. precio/duracion vacíos salen
  // como "Por confirmar" en la página.
  servicios: [
    {
      id: "diseno-cejas",
      nombre: "Diseño y perfilado de cejas",
      descripcion: "Se dibuja la forma según tu rostro y se perfila limpia, sin cambiarte la expresión.",
      precio: "800 CUP",
      duracion: "45 min",
    },
    {
      id: "arreglo-cejas",
      nombre: "Arreglo de cejas",
      descripcion: "Mantenimiento entre diseños: limpieza y forma para que la ceja no se desarme.",
      precio: "500 CUP",
      duracion: "20 min",
    },
    {
      id: "pestanas",
      nombre: "Pestañas pelo a pelo",
      descripcion: "Aplicación pelo a pelo buscando un resultado bonito sin cargar la mirada.",
      precio: "1 500 CUP",
      duracion: "1 h 30 min",
    },
    {
      id: "retoque-pestanas",
      nombre: "Retoque de pestañas",
      descripcion: "Cada 15–20 días, para mantenerlas completas y parejas.",
      precio: "900 CUP",
      duracion: "1 h",
    },
    {
      id: "combo",
      nombre: "Combo cejas + pestañas",
      descripcion: "Los dos servicios en una misma cita, para salir lista de una sola vez.",
      precio: "2 000 CUP",
      duracion: "2 h",
    },
  ],

  // Cómo se reserva: tres pasos, en palabras simples
  pasos: [
    {
      titulo: "Elige el servicio",
      texto: "Toca «Reservar» en el servicio que quieres y bajas directo al formulario con ese servicio ya elegido.",
    },
    {
      titulo: "Escribe por WhatsApp",
      texto: "El formulario arma el mensaje por ti: servicio, día y hora. Solo tienes que darle enviar.",
    },
    {
      titulo: "Te confirman el turno",
      texto: "El negocio te responde en el mismo chat y deja la cita cerrada. Sin cuentas ni contraseñas.",
    },
  ],

  // Frase del negocio (en la demo es un texto de ejemplo; con un
  // cliente real se pone una frase dicha por el dueño, tal cual)
  frase: "Un turno a la vez, sin correr. Así se hace un trabajo que dura.",
  fraseAutor: "La forma de trabajar del estudio",

  // Galería: SOLO fotos reales del negocio (public/fotos/).
  // Con src en "" se muestra un marco «foto por subir», nunca una
  // foto falsa de otra persona.
  galeria: [
    { src: "", alt: "Trabajo de cejas", pie: "Diseño de cejas", formato: "vertical" as const },
    { src: "", alt: "Trabajo de pestañas", pie: "Pestañas pelo a pelo", formato: "horizontal" as const },
    { src: "", alt: "Combo de cejas y pestañas", pie: "Combo completo", formato: "vertical" as const },
    { src: "", alt: "Detalle de un trabajo", pie: "Detalle", formato: "horizontal" as const },
  ],

  // Cada cuánto toca retoque (solo si el rubro lo lleva)
  retoques: [
    { servicio: "Pestañas", cada: "15–20 días" },
    { servicio: "Cejas", cada: "≈ 1 mes" },
  ],

  redes: {
    instagram: "", // Ej.: "https://instagram.com/..."
    facebook: "",
  },

  // Secciones activables sin tocar componentes
  secciones: {
    hero: true,
    cinta: true,
    servicios: true,
    galeria: true,
    comoReservar: true,
    frase: true,
    reservar: true,
    retoques: true,
  },
};

export type Negocio = typeof negocio;
export type Servicio = (typeof negocio.servicios)[number];
