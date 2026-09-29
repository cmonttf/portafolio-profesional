import { useProjectsViewModel } from "../viewmodels/useProjectsViewModel.js";
import ProjectCard from "../components/ProjectCard.js";
import SectionTitle from "../components/SectionTitle.js";

export default {
  name: "ProjectsView",
  components: { ProjectCard, SectionTitle },
  setup() {
    const { tecnologias, proyectosFiltrados, filtroActivo, setFiltro } = useProjectsViewModel();
    return { tecnologias, proyectosFiltrados, filtroActivo, setFiltro };
  },
  template: `
    <section id="proyectos" class="projects">
      <section-title titulo="Proyectos" subtitulo="Una selección de mis proyectos frontend" />
      <div class="projects__filtros">
        <button
          v-for="tech in tecnologias"
          :key="tech"
          class="chip"
          :class="{ 'chip--activo': filtroActivo === tech }"
          @click="setFiltro(tech)"
        >{{ tech }}</button>
      </div>
      <div class="projects__grid">
        <project-card v-for="proyecto in proyectosFiltrados" :key="proyecto.id" :proyecto="proyecto" />
      </div>
    </section>
  `,
};
