// Godzilla · tema para Kino TV (apiVersion 18)
//
// Los temas viven como datos en kino-plugin.json (appThemes): no corren código,
// no usan la red y no piden permisos. Este archivo solo dibuja una pantalla de
// presentación con un botón por tema (go.useTheme). Ajustes ▸ Apariencia sigue
// siendo la vía principal para activarlos.

const THEMES = [
  { id: "godzilla-alpha", es: "Titán Alfa", en: "Alpha Titan" },
  { id: "godzilla-thermonuclear", es: "Termonuclear", en: "Thermonuclear" },
  { id: "godzilla-evolved", es: "Evolucionado", en: "Evolved" },
];

export async function screen({ activeTheme }) {
  const buttons = THEMES.map((t) => {
    const on = activeTheme === t.id;
    return {
      type: "ElevatedButton",
      key: "theme-" + t.id,
      icon: on ? "check" : "bolt",
      labelText: on ? t.es + " · activo (desactivar)" : "Activar " + t.es,
      labelTextEn: on ? t.en + " · on (turn off)" : "Turn on " + t.en,
      onPressed: { go: { useTheme: { theme: on ? null : t.id } } },
    };
  });

  return {
    type: "SingleChildScrollView",
    children: [
      {
        type: "Column",
        padding: 16,
        gap: 12,
        children: [
          { type: "Badge", text: "TEMA INSPIRADO EN GODZILLA", textEn: "GODZILLA INSPIRED THEME", color: "primary" },
          { type: "Text", text: "Rey de los monstruos", textEn: "King of the Monsters", style: "h1" },
          {
            type: "Text",
            text: "Tres eras del Titán: azul atómico, brasas termonucleares y rosa evolucionado.",
            textEn: "Three eras of the Titan: atomic blue, thermonuclear embers and evolved pink.",
            style: "caption",
            color: "muted",
          },
          { type: "Divider" },
          {
            type: "Card",
            variant: "outlined",
            key: "about",
            children: [
              {
                type: "Text",
                text: "Placas dorsales en el logo, reproductor reforzado con barra gruesa y un carácter distinto en cada tema: roca, fuego y cristal.",
                textEn: "Dorsal plates in the logo, a beefed-up player with a thick seek bar and a different character in each theme: rock, fire and crystal.",
              },
            ],
          },
          { type: "Column", gap: 8, crossAxisAlignment: "stretch", children: buttons },
          {
            type: "Text",
            text: "También puedes cambiarlo en Ajustes ▸ Apariencia. Tema no oficial hecho por un fan; sin relación con Toho, Legendary ni Warner Bros.",
            textEn: "You can also switch it in Settings ▸ Appearance. Unofficial fan-made theme; not affiliated with Toho, Legendary or Warner Bros.",
            style: "caption",
            color: "muted",
          },
        ],
      },
    ],
  };
}

export async function screenEvent() {
  // go.useTheme lo resuelve Kino directamente desde la pulsación del botón.
  return null;
}
