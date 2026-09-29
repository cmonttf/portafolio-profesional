export default {
  name: "TimelineItem",
  props: {
    item: { type: Object, required: true },
  },
  template: `
    <li class="timeline__item" :class="'timeline__item--' + item.tipo">
      <span class="timeline__punto"></span>
      <div class="timeline__contenido">
        <span class="timeline__fecha">{{ item.fechaInicio }} — {{ item.fechaFin }}</span>
        <h3 class="timeline__cargo">{{ item.cargo }}</h3>
        <p class="timeline__institucion">{{ item.institucion }}</p>
        <p class="timeline__descripcion">{{ item.descripcion }}</p>
        <ul v-if="item.logros.length" class="timeline__logros">
          <li v-for="(logro, i) in item.logros" :key="i">{{ logro }}</li>
        </ul>
      </div>
    </li>
  `,
};
