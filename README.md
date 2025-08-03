# Mi Portafolio Personal - Desarrollador Web

Un portafolio personal moderno y accesible que presenta proyectos, habilidades y experiencia profesional en desarrollo web.

## 🌟 Características

### Navegación por Slides
- **Navegación fluida**: Transiciones suaves entre secciones tipo slides
- **Scroll inteligente**: Permite scroll interno en slides con mucho contenido antes de cambiar de slide
- **Múltiples controles**: Navegación por puntos, flechas, teclado y gestos táctiles
- **Sin auto-play**: El usuario tiene control total sobre la navegación
- **Slider 3D**: Carrusel de proyectos con efecto de perspectiva 3D tipo Xbox

### Sistema Multiidioma
- **Español e Inglés**: Soporte completo para ambos idiomas
- **Selector visual**: Botones de idioma en la esquina superior izquierda
- **Cambio dinámico**: Cambio instantáneo de todo el contenido
- **Accesibilidad**: Aria-labels y placeholders adaptados al idioma

### Accesibilidad (A11y)
- **Navegación por teclado**: Control completo con teclado (flechas, Home, End)
- **Screen readers**: Compatible con lectores de pantalla
- **Contraste alto**: Soporte para preferencias de contraste del sistema
- **Movimiento reducido**: Respeta preferencias de movimiento reducido
- **Skip links**: Enlaces para saltar al contenido principal
- **ARIA labels**: Etiquetas descriptivas para elementos interactivos
- **Focus visible**: Indicadores claros de focus para navegación

### Tecnologías Presentadas
- **Frontend**: JavaScript, TypeScript, React, Angular, Vue.js
- **Backend**: Node.js, Nest.js, Next.js, Django, Laravel, Symfony
- **Bases de datos**: PostgreSQL, MongoDB, MySQL, Redis
- **Herramientas**: Git, AWS, Docker, Terraform, Terragrunt
- **Y más**: 50+ tecnologías en total

## 🎮 Controles de Navegación

### Navegación Anidada Inteligente
El sistema implementa una navegación anidada que separa claramente los controles:

**Navegación Principal de Slides:**
- Controla la transición entre las secciones principales (Inicio, Tecnologías, Proyectos, Contacto)
- Funciona en todos los slides excepto cuando se está navegando específicamente dentro del slider de proyectos

**Slider de Proyectos (Navegación Interna):**
- Solo se activa cuando estás en el slide de "Proyectos"
- Tiene sus propios controles independientes
- Permite navegar entre los diferentes proyectos sin afectar la navegación principal

### Navegación por Slides
- **Puntos de navegación**: Clic en los puntos del lado derecho
- **Flechas**: Botones de flecha para siguiente/anterior
- **Teclado**: 
  - `←` `→` - Navegar entre slides
  - `↑` `↓` - Navegar entre slides (alternativo)
  - `Home` - Ir al primer slide
  - `End` - Ir al último slide
  - `PageUp`/`PageDown` - Navegar entre slides
  - `1-5` - Ir directamente a un slide específico
- **Scroll**: Scroll del mouse para navegar
- **Táctil**: Swipe horizontal en dispositivos móviles

### Slider de Proyectos (Dentro del Slide de Proyectos)
- **Diseño 3D**: Carrusel con efecto de perspectiva 3D tipo Xbox
- **Controles internos**: Flechas y puntos específicos para el slider
- **Teclado**: 
  - `←` `→` - Navegar entre proyectos (solo en slide de proyectos)
  - `Home`/`End` - Ir al primer/último proyecto
- **Scroll**: Scroll vertical para navegar entre proyectos
- **Táctil**: Swipe horizontal en el área del slider
- **Indicadores**: Puntos que muestran el proyecto activo
- **Efectos visuales**: Tarjetas con profundidad, escala y opacidad dinámica

### Sistema de Idiomas
- **Botón ES**: Cambiar a español
- **Botón EN**: Cambiar a inglés
- **Teclado**: Los botones son accesibles por teclado

## 🎨 Características de Diseño

### Estilo Moderno
- **Tema oscuro**: Fondo negro con acentos azules
- **Gradientes**: Efectos de gradiente en elementos clave
- **Glassmorphism**: Efectos de cristal con backdrop-filter
- **Animaciones**: Transiciones suaves con GSAP
- **Efectos 3D**: Perspectiva y profundidad en el slider de proyectos

### Responsive Design
- **Mobile-first**: Optimizado para dispositivos móviles
- **Tablet**: Adaptado para tablets
- **Desktop**: Experiencia completa en pantallas grandes

### Elementos Interactivos
- **Galerías de imágenes**: Modales para ver imágenes en detalle
- **Videos de proyectos**: Reproductor integrado con controles
- **Formulario de contacto**: Validación y envío
- **Hover effects**: Efectos visuales en elementos interactivos

## 📁 Estructura del Proyecto

```
repo/
├── index.html          # Estructura HTML5 semántica
├── styles.css          # Estilos CSS3 modernos
├── script.js           # Funcionalidad JavaScript
├── README.md           # Documentación
└── assets/
    ├── images/         # Imágenes de proyectos
    ├── videos/         # Videos de demostración
    └── icons/          # Iconos y recursos
```

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado
- Conexión a internet para cargar recursos externos (GSAP, CDN)

### Demo en Línea
Puedes ver el portafolio en funcionamiento en: [https://dumarpabon.netlify.app/](https://dumarpabon.netlify.app/)

### Instalación Local

#### Opción 1: Abrir directamente
1. Descarga o clona el repositorio:
   ```bash
   git clone [url-del-repositorio]
   cd repo
   ```

2. Abre el archivo `index.html` directamente en tu navegador:
   - Doble clic en el archivo `index.html`
   - O arrastra el archivo a una ventana del navegador
   - O usa `Ctrl+O` en el navegador y selecciona el archivo

#### Opción 2: Servidor local (Recomendado)
1. Abre una terminal en la carpeta del proyecto
2. Ejecuta uno de estos comandos:

   **Con Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Con Node.js:**
   ```bash
   npx http-server -p 8000
   ```

   **Con PHP:**
   ```bash
   php -S localhost:8000
   ```

3. Abre tu navegador y visita: `http://localhost:8000`

### Uso del Sitio

#### Navegación Básica
1. **Explorar secciones**: Usa los controles de navegación para moverte entre slides
2. **Cambiar idioma**: Haz clic en los botones ES/EN en la esquina superior izquierda
3. **Ver proyectos**: Explora las galerías de imágenes y videos de cada proyecto
4. **Contacto**: Completa el formulario para ponerte en contacto

#### Navegación por Teclado
- **Flechas**: `←` `→` para navegar entre slides
- **Números**: `1` `2` `3` `4` `5` para ir directamente a un slide
- **Home/End**: Ir al primer o último slide
- **Page Up/Down**: Navegar slide por slide
- **Tab**: Navegar entre elementos interactivos
- **Enter/Space**: Activar botones y enlaces
- **Escape**: Cerrar modales y galerías

#### Navegación por Mouse
- **Scroll**: Usa la rueda del mouse para navegar
- **Puntos**: Clic en los puntos de navegación del lado derecho
- **Flechas**: Clic en las flechas de navegación
- **Galerías**: Clic en las imágenes para verlas en detalle
- **Videos**: Clic en el botón de play para reproducir videos

## ♿ Características de Accesibilidad

### Navegación por Teclado Completa

#### Navegación de Slides
- **Flechas**: `←` `→` `↑` `↓` para navegar entre slides
- **Números**: `1` `2` `3` `4` `5` para ir directamente a un slide específico
- **Home**: Ir al primer slide (Inicio)
- **End**: Ir al último slide (Contacto)
- **Page Up/Down**: Navegar slide por slide

#### Navegación de Elementos
- **Tab**: Navegar entre elementos interactivos (botones, enlaces, formularios)
- **Shift + Tab**: Navegar hacia atrás entre elementos
- **Enter/Space**: Activar botones y enlaces
- **Escape**: Cerrar modales y galerías

#### Navegación de Formularios
- **Tab**: Mover entre campos del formulario
- **Enter**: Enviar formulario
- **Escape**: Cancelar o salir del formulario

#### Navegación de Galerías
- **Tab**: Navegar entre imágenes y botones de la galería
- **Enter**: Abrir imagen en modal
- **Escape**: Cerrar modal de galería

#### Navegación de Videos
- **Tab**: Navegar al reproductor de video
- **Enter/Space**: Reproducir/pausar video
- **Escape**: Salir del reproductor

### Screen Readers
- **Aria-labels**: Etiquetas descriptivas para elementos
- **Roles semánticos**: Roles apropiados para cada elemento
- **Estructura jerárquica**: Headings y landmarks apropiados
- **Estados dinámicos**: Aria-pressed, aria-hidden, etc.

### Preferencias del Sistema
- **Contraste alto**: Respeta preferencias de contraste
- **Movimiento reducido**: Respeta preferencias de movimiento
- **Tamaño de fuente**: Escalable según preferencias del usuario

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con variables, flexbox y grid
- **JavaScript**: Funcionalidad interactiva y animaciones
- **GSAP**: Animaciones avanzadas y transiciones

### Características Técnicas
- **Semántica HTML5**: Uso correcto de etiquetas semánticas
- **CSS Grid/Flexbox**: Layouts modernos y responsive
- **JavaScript ES6+**: Funcionalidad moderna
- **Accesibilidad WCAG**: Cumplimiento de estándares de accesibilidad

## 📝 Documentación de Accesibilidad

### Estructura Semántica
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Headings jerárquicos (`h1` - `h6`)
- Listas apropiadas (`<ul>`, `<ol>`)
- Enlaces descriptivos con `aria-label`

### Formularios Accesibles
- Labels asociados correctamente con `for`
- Campos requeridos marcados con `aria-required`
- Placeholders descriptivos
- Mensajes de error claros

### Navegación Accesible
- Skip links para saltar al contenido principal
- Navegación por teclado completa
- Indicadores de estado actual
- Aria-labels descriptivos

## 🌐 Soporte Multiidioma

### Implementación
- **Atributos data-**: `data-es` y `data-en` para contenido
- **Cambio dinámico**: JavaScript actualiza todo el contenido
- **Aria-labels**: Adaptados al idioma seleccionado
- **Placeholders**: Formularios adaptados al idioma

### Idiomas Soportados
- **Español (ES)**: Idioma por defecto
- **Inglés (EN)**: Traducción completa

## 📊 Validación

### HTML5
- Estructura semántica correcta
- Validación W3C sin errores
- Atributos ARIA apropiados

### CSS3
- Estilos modernos y responsive
- Variables CSS para consistencia
- Media queries para diferentes dispositivos

### JavaScript
- Funcionalidad sin dependencias externas
- Manejo de errores apropiado
- Compatibilidad con navegadores modernos

## 🔧 Solución de Problemas

### Problemas Comunes

#### El sitio no carga correctamente
- **Verifica JavaScript**: Asegúrate de que JavaScript esté habilitado en tu navegador
- **Conexión a internet**: El sitio necesita conexión para cargar GSAP desde CDN
- **Servidor local**: Usa un servidor local en lugar de abrir el archivo directamente

#### Las animaciones no funcionan
- **Actualiza navegador**: Usa una versión moderna de Chrome, Firefox, Safari o Edge
- **Habilita JavaScript**: Asegúrate de que JavaScript esté habilitado
- **Verifica consola**: Abre las herramientas de desarrollador (F12) para ver errores

#### Navegación por teclado no funciona
- **Verifica focus**: Asegúrate de que el elemento esté enfocado (visible con outline)
- **Usa Tab**: Navega con Tab para mover el focus entre elementos
- **Modo accesibilidad**: Algunos navegadores tienen configuraciones específicas

#### El selector de idioma no cambia
- **Haz clic directo**: Asegúrate de hacer clic en el botón ES o EN
- **Verifica JavaScript**: Asegúrate de que JavaScript esté habilitado
- **Recarga la página**: Intenta recargar la página (F5)

#### La navegación del slider de proyectos no funciona
- **Verifica el slide activo**: Asegúrate de estar en el slide de "Proyectos"
- **Usa los controles internos**: Las flechas y puntos dentro del slider de proyectos
- **Teclado específico**: En el slide de proyectos, usa `←` `→` para navegar entre proyectos
- **Scroll vertical**: En el slide de proyectos, el scroll vertical navega entre proyectos
- **Navegación principal**: Para cambiar de slide principal, usa `↑` `↓` o los puntos de navegación

### Compatibilidad de Navegadores

#### Navegadores Soportados
- **Chrome**: Versión 80+ (Recomendado)
- **Firefox**: Versión 75+
- **Safari**: Versión 13+
- **Edge**: Versión 80+

#### Navegadores No Soportados
- Internet Explorer (IE)
- Navegadores móviles muy antiguos

### Optimización de Rendimiento

#### Para Mejor Experiencia
- **Conexión estable**: Usa una conexión a internet estable
- **Hardware acelerado**: Asegúrate de que la aceleración por hardware esté habilitada
- **Memoria suficiente**: Cierra otras pestañas para liberar memoria

## 🤝 Contribuciones

Este proyecto está diseñado como un portafolio personal, pero las mejoras de accesibilidad y funcionalidad son bienvenidas.

## 📄 Licencia

Este proyecto es de uso personal y educativo.

---

**Desarrollado con ❤️ y enfoque en accesibilidad** 