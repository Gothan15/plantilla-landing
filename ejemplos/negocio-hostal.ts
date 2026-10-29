// EJEMPLO de config para un hostal / casa de renta.
// Para usarlo: copia estos valores sobre src/config/negocio.ts y
// cambia las fotos. Los «servicios» pasan a ser las habitaciones y
// la reserva sigue saliendo por WhatsApp con día y hora (de llegada).
export const negocioHostal = {
  nombre: "Casa Colonial 1930",
  rubro: "Hostal",
  heroTitulo: { antes: "Duerme", italica: "como", despues: "en casa" },
  notaHero: "desayuno incluido · a dos cuadras del malecón",
  servicios: [
    { id: "hab-doble", nombre: "Habitación doble", precio: "—", duracion: "por noche" },
    { id: "hab-familiar", nombre: "Habitación familiar", precio: "—", duracion: "por noche" },
    { id: "apartamento", nombre: "Apartamento completo", precio: "—", duracion: "por noche" },
  ],
  secciones: { retoques: false, galeria: true },
  // La frase sería una dicha por los anfitriones, tal cual la digan.
};
