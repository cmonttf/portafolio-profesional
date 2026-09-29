export default {
  name: "ProjectCard",
  props: {
    proyecto: { type: Object, required: true },
  },
  template: `
    <article class="card">
      <img
        v-if="proyecto.imagen"
        :src="proyecto.imagen"
        :alt="'Captura del proyecto ' + proyecto.nombre"
        class="card__imagen"
      />
      <div class="card__contenido">
        <h3 class="card__titulo">{{ proyecto.nombre }}</h3>
        <p class="card__descripcion">{{ proyecto.descripcion }}</p>
        <ul class="card__tecnologias">
          <li v-for="tech in proyecto.tecnologias" :key="tech" class="badge">{{ tech }}</li>
        </ul>
        <div class="card__acciones">
          <a v-if="proyecto.demoUrl" :href="proyecto.demoUrl" target="_blank" rel="noopener" class="boton boton--primario">Ver demo</a>
          <a v-if="proyecto.repoUrl" :href="proyecto.repoUrl" target="_blank" rel="noopener" class="boton boton--secundario">Código</a>
        </div>
      </div>
    </article>
  `,
};
