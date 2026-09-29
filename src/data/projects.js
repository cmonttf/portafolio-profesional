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
    demoUrl: "",
  }),
  createProject({
    id: "taskflow",
    nombre: "TaskFlow",
    descripcion:
      "Aplicación web para gestionar tareas: crear, editar, completar, eliminar y buscar, con persistencia en LocalStorage y sincronización con una API externa. Construida con JavaScript orientado a objetos (clases para Tarea, GestorTareas, UI, Storage y API).",
    imagen: "assets/img/proyectos/taskflow.png",
    tecnologias: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/cmonttf/taskflow",
    demoUrl: "",
  }),
  createProject({
    id: "bitacora",
    nombre: "Bitácora",
    descripcion:
      "Aplicación Laravel para gestionar notas personales bajo un modelo SaaS por suscripción: planes con límite mensual, perfiles y permisos administrativos, y panel de Superadmin con estadísticas e ingresos. Arquitectura en capas (Controller → Service → Interface → DAO) con DTOs, sin depender de Eloquent para la lógica de negocio.",
    imagen: "",
    tecnologias: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    repoUrl: "https://github.com/cmonttf/bitacora",
    demoUrl: "",
  }),
  createProject({
    id: "booklist-spa",
    nombre: "BookList SPA",
    descripcion:
      "SPA en Vue.js para gestionar el catálogo de libros de una editorial: alta de libros con formularios reactivos, filtros por autor/categoría, detalle individual por ruta dinámica y un dashboard de indicadores en tiempo real. Desarrollada siguiendo el patrón MVVM con Vue Router y Vuex.",
    imagen: "assets/img/proyectos/booklist-spa.png",
    tecnologias: ["Vue", "Vue Router", "Vuex", "Webpack"],
    repoUrl: "https://github.com/cmonttf/booklist-spa",
    demoUrl: "",
  }),
];
