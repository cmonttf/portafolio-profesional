import { ref, computed } from "vue";
import { projects } from "../data/projects.js";

export function useProjectsViewModel() {
  const filtroActivo = ref("todos");

  const tecnologias = computed(() => ["todos", ...new Set(projects.flatMap((p) => p.tecnologias))]);

  const proyectosFiltrados = computed(() => {
    if (filtroActivo.value === "todos") return projects;
    return projects.filter((p) => p.tecnologias.includes(filtroActivo.value));
  });

  function setFiltro(valor) {
    filtroActivo.value = valor;
  }

  return { tecnologias, proyectosFiltrados, filtroActivo, setFiltro };
}
