export function createSkill({ nombre, categoria = "frontend", nivel = 3 } = {}) {
  return { nombre, categoria, nivel };
}
