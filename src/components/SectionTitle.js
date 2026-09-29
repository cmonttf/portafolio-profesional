export default {
  name: "SectionTitle",
  props: {
    titulo: { type: String, required: true },
    subtitulo: { type: String, default: "" },
  },
  template: `
    <div class="titulo-seccion">
      <h2>{{ titulo }}</h2>
      <p v-if="subtitulo">{{ subtitulo }}</p>
    </div>
  `,
};
