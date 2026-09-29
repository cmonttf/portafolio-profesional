import { useExperienceViewModel } from "../viewmodels/useExperienceViewModel.js";
import TimelineItem from "../components/TimelineItem.js";
import SectionTitle from "../components/SectionTitle.js";

export default {
  name: "ExperienceView",
  components: { TimelineItem, SectionTitle },
  setup() {
    const { filtros, filtroActivo, experienciaFiltrada, setFiltro } = useExperienceViewModel();
    return { filtros, filtroActivo, experienciaFiltrada, setFiltro };
  },
  template: `
    <section id="experiencia" class="experience">
      <section-title titulo="Experiencia" subtitulo="Trayectoria laboral y formación" />
      <div class="experience__filtros">
        <button
          v-for="filtro in filtros"
          :key="filtro.valor"
          class="chip"
          :class="{ 'chip--activo': filtroActivo === filtro.valor }"
          @click="setFiltro(filtro.valor)"
        >{{ filtro.etiqueta }}</button>
      </div>
      <ul class="timeline">
        <timeline-item v-for="item in experienciaFiltrada" :key="item.id" :item="item" />
      </ul>
    </section>
  `,
};
