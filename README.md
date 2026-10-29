# Plantilla de landing para negocios pequeños — reserva por WhatsApp

Esta es mi plantilla de landing page. La hice porque los negocios
pequeños que están empezando no necesitan un sistema de agenda
completo: necesitan una página que se vea bien, diga qué hacen y
cuánto cuesta, y termine en un botón de WhatsApp. Todo lo demás es
peso.

La idea central: **adaptarla a un negocio nuevo no toca el código**.
Todo lo que cambia por cliente vive en un solo archivo,
`src/config/negocio.ts` — nombre, slogan, WhatsApp, zona, horario,
colores, servicios con precio y duración, fotos y qué secciones se
muestran. Adaptar = editar ese archivo y cambiar las fotos de
`public/fondos/` y `public/fotos/`.

Ahora mismo carga un negocio de ejemplo (un estudio de cejas y
pestañas) para que se vea funcionando. En `ejemplos/` hay otros dos
config de muestra: un gimnasio y un hostal.

## El diseño

No quería que se viera como «la típica plantilla»: nada de tarjetas
iguales en cuadrícula, degradados morados ni todo centrado. El diseño
es editorial, como una revista de barrio impresa:

- Hero asimétrico con titular serif grande (Fraunces) y fotos
  montadas como recortes de papel, con nota manuscrita.
- Servicios como índice de revista: filas numeradas con el precio al
  final de la fila, no tarjetas.
- Marquesina con los servicios bajo el hero.
- Galería como tira de fotos con marcos numerados.
- El formulario es una «ficha de reserva» en papel, con campos de
  línea inferior y muescas de vale.
- Botón fijo de reserva en el móvil.

Las referencias que miré están en `INSPIRACION.md` (diseños de
personas reales en Dribbble y tendencias recogidas de Awwwards).

Regla que me impuse: las fotos de ambiente (generadas, en
`public/fondos/`) solo ilustran el tipo de servicio. La galería es
**solo** para fotos reales del negocio; si un cliente no tiene fotos
todavía, el marco se queda «por subir» en vez de inventar trabajos.

## Cómo funciona la reserva

1. La clienta toca «Reservar» en un servicio (o el botón fijo).
2. El formulario ya trae ese servicio elegido; pone nombre, día y hora.
3. Se abre WhatsApp con el mensaje armado («Hola, quiero reservar una
   cita. Servicio: … Me gustaría el lunes 2 de noviembre a las
   10:00…») y el negocio confirma el turno en el chat.

Si el campo `whatsapp` del config está vacío, la página lo muestra
«por confirmar» y el botón avisa, en vez de mandar a un número
equivocado.

## Correrla

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
```

Stack: Next.js 16 + TypeScript + Tailwind CSS 4. Sin base de datos
ni backend: es una página, no un sistema.

## Lo que falta (siendo honesto)

- En la subida inicial a GitHub no entraron las dos fotos de
  ambiente en JPG (`public/fondos/`) ni el favicon: la vía de subida
  que usé solo acepta archivos de texto. Las fotos están en el zip
  del proyecto y en mi carpeta local; al trabajar el repo en local
  se arrastran a `public/fondos/` y entran en el siguiente commit.
- Los datos del negocio cargado son de ejemplo: precios, zona,
  horario y WhatsApp hay que sustituirlos por los de cada cliente.
- La galería espera fotos reales del negocio.
- Solo probé dos presets completos de tema (editorial); el config
  admite cambiar colores, pero no hay todavía un selector visual.
- El boceto original lo hice en una libreta; este diseño es mi
  interpretación en pantalla de esa idea, no una copia línea a línea.

— Gothan
