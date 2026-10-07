import { createProject } from "../models/Project.js";

export const projects = [
  createProject({
    id: "smartbudget",
    nombre: "SmartBudget",
    descripcion:
      "Plataforma web de finanzas personales para centralizar ingresos, gastos y metas de ahorro, con dashboard, movimientos, presupuestos y reportes. Estilos organizados y compilados con Sass (SCSS).",
    imagen: "assets/img/proyectos/smartbudget.png",
    tecnologias: ["HTML", "Sass", "Bootstrap", "JavaScript"],
    repoUrl: "https://github.com/cmonttf/smartbudget",
    demoUrl: "https://cmonttf.github.io/smartbudget/",
  }),
  createProject({
    id: "taskflow",
    nombre: "TaskFlow",
    descripcion:
      "Aplicación web para gestionar tareas: crear, editar, completar, eliminar y buscar, con persistencia en LocalStorage y sincronización con una API externa. Construida con JavaScript orientado a objetos (clases para Tarea, GestorTareas, UI, Storage y API).",
    imagen: "assets/img/proyectos/taskflow.png",
    tecnologias: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/cmonttf/taskflow",
    demoUrl: "https://cmonttf.github.io/taskflow/",
  }),
  createProject({
    id: "dashboard",
    nombre: "Dashboard de Gestión",
    descripcion:
      "Panel de administración para gestionar pedidos, clientes y productos: indicadores clave, gráficos de ingresos y estados, CRUD completo con tablas filtrables y modales, tema claro/oscuro y respaldo de datos en JSON. Funciona sin backend, persistiendo todo en LocalStorage, con componentes Vue 3 cargados dinámicamente (vue3-sfc-loader) bajo el patrón MVVM.",
    imagen: "assets/img/proyectos/dashboard.png",
    tecnologias: ["Vue", "Bootstrap", "Chart.js", "Sass"],
    repoUrl: "https://github.com/cmonttf/dashboard",
    demoUrl: "https://cmonttf.github.io/dashboard/",
  }),
  createProject({
    id: "booklist-spa",
    nombre: "BookList SPA",
    descripcion:
      "SPA en Vue.js para gestionar el catálogo de libros de una editorial: alta de libros con formularios reactivos, filtros por autor/categoría, detalle individual por ruta dinámica y un dashboard de indicadores en tiempo real. Desarrollada siguiendo el patrón MVVM con Vue Router y Vuex.",
    imagen: "assets/img/proyectos/booklist-spa.png",
    tecnologias: ["Vue", "Vue Router", "Vuex", "Webpack"],
    repoUrl: "https://github.com/cmonttf/booklist-spa",
    demoUrl: "https://cmonttf.github.io/booklist-spa/",
  }),
];
