import { createSkill } from "../models/SkillItem.js";

export const skills = [
  // Frontend
  createSkill({ nombre: "HTML5", categoria: "frontend", nivel: 3 }),
  createSkill({ nombre: "CSS3 / Sass", categoria: "frontend", nivel: 3 }),
  createSkill({ nombre: "JavaScript", categoria: "frontend", nivel: 3 }),
  createSkill({ nombre: "Vue.js", categoria: "frontend", nivel: 3 }),
  createSkill({ nombre: "Bootstrap", categoria: "frontend", nivel: 3 }),

  // Backend
  createSkill({ nombre: "PHP", categoria: "backend", nivel: 5 }),
  createSkill({ nombre: "Laravel", categoria: "backend", nivel: 5 }),
  createSkill({ nombre: "CodeIgniter", categoria: "backend", nivel: 3 }),
  createSkill({ nombre: "Eloquent", categoria: "backend", nivel: 4 }),
  createSkill({ nombre: "APIs RESTful", categoria: "backend", nivel: 4 }),
  createSkill({ nombre: "Microservicios", categoria: "backend", nivel: 4 }),

  // Bases de datos
  createSkill({ nombre: "Oracle", categoria: "bases de datos", nivel: 5 }),
  createSkill({ nombre: "MySQL", categoria: "bases de datos", nivel: 4 }),

  // Herramientas
  createSkill({ nombre: "Git / GitHub", categoria: "herramientas", nivel: 5 }),
  createSkill({ nombre: "Linux", categoria: "herramientas", nivel: 5 }),
  createSkill({ nombre: "VS Code", categoria: "herramientas", nivel: 4 }),
  createSkill({ nombre: "WordPress", categoria: "herramientas", nivel: 3 }),

  // Metodologías y buenas prácticas
  createSkill({ nombre: "SOLID", categoria: "metodologías", nivel: 5 }),
  createSkill({ nombre: "Clean Code", categoria: "metodologías", nivel: 4 }),
  createSkill({ nombre: "PSR / PHPDoc", categoria: "metodologías", nivel: 4 }),
  createSkill({ nombre: "Testing", categoria: "metodologías", nivel: 4 }),
  createSkill({ nombre: "Scrum", categoria: "metodologías", nivel: 3 }),
];
