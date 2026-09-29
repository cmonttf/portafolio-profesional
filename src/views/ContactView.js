import { useContactViewModel } from "../viewmodels/useContactViewModel.js";
import SectionTitle from "../components/SectionTitle.js";

export default {
  name: "ContactView",
  components: { SectionTitle },
  setup() {
    const { enlaces } = useContactViewModel();
    return { enlaces };
  },
  template: `
    <section id="contacto" class="contact">
      <section-title titulo="Contáctame" subtitulo="¿Trabajamos juntos? Escríbeme" />
      <ul class="contact__enlaces">
        <li v-for="enlace in enlaces" :key="enlace.etiqueta">
          <a :href="enlace.url" target="_blank" rel="noopener">
            <i :class="enlace.icono"></i>
            <span>{{ enlace.etiqueta }}</span>
          </a>
        </li>
      </ul>
    </section>
  `,
};
