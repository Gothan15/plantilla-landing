// EJEMPLO de config para un gimnasio de barrio.
// Para usarlo: copia estos valores sobre src/config/negocio.ts y
// cambia las fotos. No hace falta tocar ningún componente — los
// campos que este rubro no usa (retoques) se apagan en `secciones`.
export const negocioGimnasio = {
  nombre: "Gimnasio Fuerza Viva",
  rubro: "Gimnasio",
  heroTitulo: { antes: "Entrena", italica: "cerca", despues: "de tu casa" },
  notaHero: "primera clase de prueba · sin compromiso",
  servicios: [
    { id: "mensualidad", nombre: "Mensualidad completa", precio: "2 500 CUP", duracion: "—" },
    { id: "clase-suelta", nombre: "Clase suelta", precio: "300 CUP", duracion: "1 h" },
    { id: "plan-pareja", nombre: "Plan en pareja", precio: "4 000 CUP", duracion: "—" },
  ],
  secciones: { retoques: false, galeria: true },
  // La cinta diría: Fuerza · Cardio · Clases en grupo · Primera clase gratis
};
