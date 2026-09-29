export function createProject({
  id,
  nombre,
  descripcion,
  imagen = "",
  tecnologias = [],
  repoUrl = "",
  demoUrl = "",
} = {}) {
  return { id, nombre, descripcion, imagen, tecnologias, repoUrl, demoUrl };
}
