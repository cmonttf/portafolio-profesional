import { profile } from "../data/profile.js";

export default {
  name: "HeroView",
  setup() {
    return { profile };
  },
  template: `
    <section class="hero">
      <img class="hero__avatar" :src="profile.avatar" :alt="'Foto de ' + profile.nombre" />
      <div class="hero__contenido">
        <p class="hero__saludo">Hola, soy</p>
        <h1 class="hero__nombre">{{ profile.nombre }}</h1>
        <h2 class="hero__titulo">{{ profile.titulo }}</h2>
        <p class="hero__bio">{{ profile.bio }}</p>
        <div class="hero__acciones">
          <a href="#proyectos" class="boton boton--primario">Ver proyectos</a>
          <a href="#contacto" class="boton boton--secundario">Contáctame</a>
        </div>
      </div>
    </section>
  `,
};
