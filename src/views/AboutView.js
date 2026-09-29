import { useAboutViewModel } from "../viewmodels/useAboutViewModel.js";
import SkillBadge from "../components/SkillBadge.js";
import SectionTitle from "../components/SectionTitle.js";

export default {
  name: "AboutView",
  components: { SkillBadge, SectionTitle },
  setup() {
    const { profile, categorias } = useAboutViewModel();
    return { profile, categorias };
  },
  template: `
    <section id="sobre-mi" class="about">
      <section-title titulo="Sobre mí" subtitulo="Un poco sobre mi trayectoria y lo que hago" />
      <p class="about__bio">{{ profile.bio }}</p>
      <div class="about__habilidades" v-for="(items, categoria) in categorias" :key="categoria">
        <h3 class="about__categoria">{{ categoria }}</h3>
        <div class="about__lista-badges">
          <skill-badge v-for="skill in items" :key="skill.nombre" :skill="skill" />
        </div>
      </div>
    </section>
  `,
};
