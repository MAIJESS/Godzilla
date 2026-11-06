# Godzilla · tema para Kino TV

Tema para **toda la app** de Kino (celular y TV) inspirado en el Godzilla del Monsterverso. Tres estilos, uno por cada «era» del Titán: azul atómico, brasas termonucleares y rosa evolucionado. Todos comparten un logo de **placas dorsales** y un reproductor reforzado.

> **Aviso:** es un tema no oficial hecho por un fan, sin relación con Toho, Legendary ni Warner Bros. El logo y el icono son dibujos originales (placas dorsales abstractas), no material oficial.

Es un plugin de **solo temas**: los temas son datos en `kino-plugin.json` (`appThemes`). No usa la red (`"hosts": []`) y no pide permisos. Guía oficial: <https://kinotvapp.github.io/kino-plugins/themes/>

> Requiere **Kino 0.9.81 o posterior** (`apiVersion` 18). Los bordes los dibuja Kino 0.9.82 o posterior; en 0.9.81 el tema funciona, pero sin bordes.

## Los tres estilos

| id | Nombre | Inspiración | Acento | Foco | Carácter |
|---|---|---|---|---|---|
| `godzilla-alpha` | Titán Alfa | el Godzilla de 2014: escamas grises y aliento azul | azul atómico `#3FC8FF` | blanco azulado | esquinas casi rectas (4 dp), botones redondeados, fundidos lentos (380 ms), deriva del héroe activa. **Roca.** |
| `godzilla-thermonuclear` | Termonuclear | el Godzilla de *Rey de los monstruos* al sobrecargarse | naranja brasa `#FF5A1F` | amarillo `#FFD21F` | esquinas rectas, bordes naranja de 2 dp, botones cuadrados, cortes rápidos (150 ms), zoom de foco 1,10, experiencia ligera. **Fuego.** |
| `godzilla-evolved` | Evolucionado | el Godzilla rosa de *El nuevo imperio* | rosa `#FF5BC8` | cian Tierra Hueca `#7CF3FF` | esquinas muy redondeadas, botones circulares, fundidos de 260 ms, deriva del héroe activa. **Cristal.** |

> No cambies nunca un `id` después de publicar: de él cuelgan la elección y los ajustes de cada persona.

## Qué hay en cada parte

- **Logo.** `logo.wordmark` (menú lateral, cabecera del celular, riel abierto de la TV) lleva una fila de placas dorsales sobre «KINO» en bloques con esquinas cortadas, y una barra fina debajo como un aliento atómico. Cada tema dibuja las placas distinto: ocho placas compactas en Titán Alfa, diez más afiladas con chispas en Termonuclear, y siete anchas con esquirlas de cristal de otro color en Evolucionado. `logo.mark` (riel cerrado de la TV) son cuatro placas ascendentes sobre una base. Las letras usan `textPrimary` y las placas `accent` (las chispas y esquirlas, `focus`), así que el color sale del tema. Kino conserva su propio logo en la pantalla de inicio y en las pantallas de decisión.
- **Reproductor.** Botón de play grande (`playButtonScale` 1,5; 1,6 en TV), barra de reproducción gruesa (1,4; 1,6 en TV) y etiquetas un 5 % mayores. La forma de los botones cambia por tema: redondeada, cuadrada y circular.
- **Tipografía.** Kino no permite cargar una fuente desde un tema (solo escalas): Termonuclear sube más los títulos (`typography.scale` 1,06 y `titleScale` 1,15); la identidad tipográfica va en el logo.
- **Experiencia.** Titán Alfa y Evolucionado sugieren la experiencia completa y Termonuclear la ligera. Kino pregunta al activar el tema y nada cambia sin tu «sí».
- **Plugins de terceros.** `"pluginColors": "override"`: el tema manda también sobre los colores `theme` de otros plugins. Se puede apagar con el interruptor **Colores de los plugins**.

## Personalizar (Ajustes ▸ Apariencia ▸ Personalizar)

Se puede cambiar el acento (azul atómico, naranja, rosa, cian o amarillo), el color de foco, la duración del fundido (0–600 ms), el grosor de la barra de reproducción (1,0–2,0), la escala de letra (1,0–1,3) y el fondo.

## Pantalla de presentación

`plugin.js` exporta `screen` y `screenEvent` para una página con un botón por tema (`go.useTheme`). Se abre desde la pestaña de ajustes del plugin con **Ver presentación** y lee `activeTheme` para alternar «Activar» y «Desactivar».

## Archivos

```
kino-plugin.json   manifiesto, tres temas y logos vectoriales
plugin.js          pantalla de presentación (los temas no necesitan código)
icon.png           icono 256×256 del plugin
README.md          este archivo
```

## Probar

Con el kit oficial de plugins de Kino:

```bash
node sdk/validate.mjs .                                                      # formato y advertencias, celular y TV
node sdk/run.mjs --context '{"activeTheme":"godzilla-alpha"}' . screen        # pantalla con el tema activo
```

Los tres temas cumplen en mis comprobaciones las protecciones de legibilidad de Kino (fondo oscuro, `accent` y `focus` ≥ 3:1 sobre el fondo, `onAccent` y texto ≥ 4,5:1), pero confirma con el validador oficial y mira el resultado en **Ajustes ▸ Apariencia** antes de publicar. Los logos son trazos SVG que no pude rasterizar en mi entorno: revísalos en la vista previa.

## Publicar

1. Sube la carpeta a un repositorio de GitHub.
2. Sigue <https://kinotvapp.github.io/kino-plugins/publish/>.
3. `categories: ["themes"]` lo lista en **Temas** en la tienda de plugins.

El manifiesto pesa unos 13 KB de los 16 KB permitidos; si añades más temas o logos, vigila ese tope.

## Propuesta visual del icono (`icon.png`)

- **Fondo:** noche azul oscuro con un horizonte de líneas de oleaje y chispas dispersas.
- **Símbolo:** cinco placas dorsales; las tres centrales son los tres estilos (azul atómico, naranja termonuclear y rosa evolucionado) con halo de luz, y las dos de los extremos son de roca gris.
- **Base:** una línea de aliento atómico que pasa del azul al naranja y al rosa.
- **Marco:** doble borde fino, gris por fuera y azul por dentro.

Puedes reemplazarlo por un PNG tuyo cuadrado de hasta 128 KB con el mismo nombre `icon.png`.
