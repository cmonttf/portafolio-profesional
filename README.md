# Portafolio — Camilo Fernando Montt Fierro

Portafolio personal que reúne mis proyectos frontend, mi trayectoria laboral y mi formación (incluyendo el bootcamp de Desarrollo de Aplicaciones Front-End Trainee de Talento Digital Chile). Construido como una SPA de una sola página con **Vue 3** (vía CDN, sin bundler), **Sass** para los estilos y arquitectura **MVVM**.

## Autor

- **Nombre:** Camilo Fernando Montt Fierro
- **Rol:** Ingeniero Civil Informático
- **Email:** cmonttf@gmail.com
- **GitHub:** [github.com/cmonttf](https://github.com/cmonttf)
- **LinkedIn:** [linkedin.com/in/camilomonttfierro](https://www.linkedin.com/in/camilomonttfierro/)

## Stack técnico

- **Vue 3** cargado desde CDN mediante `importmap`, sin paso de build ni bundler.
- **Sass (SCSS)** compilado a CSS con el paquete `sass` (sin framework de CSS).
- **Arquitectura MVVM**: separación explícita entre datos (Model), estado/lógica reactiva (ViewModel) y presentación (View).
- **Font Awesome** para iconografía y **Google Fonts (Inter)** para tipografía.

## Estructura del proyecto

```
Portafolio/
├── index.html                # Punto de entrada, importmap de Vue y carga de assets/css/main.css
├── assets/
│   ├── scss/                 # Fuente de los estilos (variables, mixins, componentes, vistas)
│   ├── css/                  # CSS compilado (generado con npm run sass:build)
│   └── img/                  # Imágenes: foto de perfil y capturas de proyectos
└── src/
    ├── app.js                # Monta la app raíz de Vue
    ├── models/                # Model: forma de los datos (Project, ExperienceItem, SkillItem)
    ├── data/                  # Datos reales del portafolio (perfil, experiencia, proyectos, skills)
    ├── viewmodels/            # ViewModel: composables con estado reactivo y lógica de cada sección
    ├── views/                 # View: componentes de cada sección de la página
    └── components/            # Componentes reutilizables (tarjetas, badges, items de línea de tiempo)
```

## Secciones del sitio

1. **Hero** — foto, nombre, título profesional y llamados a la acción.
2. **Sobre mí** — biografía y habilidades agrupadas por categoría.
3. **Experiencia** — línea de tiempo filtrable (Todo / Laboral / Formación) con cargos y formación académica.
4. **Proyectos** — grid filtrable por tecnología con capturas y enlaces a repositorio.
5. **Contáctame** — enlaces directos a email, teléfono, GitHub y LinkedIn.

## Proyectos incluidos

| Proyecto | Descripción | Tecnologías |
|---|---|---|
| [SmartBudget](https://github.com/cmonttf/smartbudget) | Plataforma de finanzas personales: dashboard, movimientos, presupuestos y reportes. | HTML, Sass, Bootstrap, JavaScript |
| [TaskFlow](https://github.com/cmonttf/taskflow) | Gestor de tareas con persistencia en LocalStorage y sincronización con una API externa. | JavaScript, HTML, CSS |
| [Dashboard de Gestión](https://github.com/cmonttf/dashboard) | Panel de administración de pedidos, clientes y productos con gráficos, CRUD y persistencia en LocalStorage. | Vue, Bootstrap, Chart.js, Sass |
| [BookList SPA](https://github.com/cmonttf/booklist-spa) | SPA en Vue para gestionar un catálogo de libros, bajo patrón MVVM. | Vue, Vue Router, Vuex, Webpack |

## Cómo ejecutarlo localmente

Requiere Node.js instalado.

```bash
npm install

# Compilar los estilos una vez
npm run sass:build

# o recompilar automáticamente mientras se edita assets/scss/
npm run sass:watch

# Levantar un servidor estático local (necesario por los módulos ES)
npm run start
```

Luego abre `http://localhost:5500`.

> El sitio usa `<script type="module">` e `importmap`, por lo que **no funciona abriendo `index.html` directamente con `file://`** — necesita servirse por HTTP.

## Personalizar el contenido

Todo el contenido (perfil, experiencia, habilidades y proyectos) vive en `src/data/`. Basta con editar esos archivos para actualizar el portafolio sin tocar la lógica ni las vistas.
