import { useNavViewModel } from "../viewmodels/useNavViewModel.js";
import { profile } from "../data/profile.js";

export default {
  name: "NavBarView",
  setup() {
    const { menuAbierto, alternarMenu, cerrarMenu } = useNavViewModel();
    return { menuAbierto, alternarMenu, cerrarMenu, profile };
  },
  template: `
    <header class="navbar">
      <a href="#" class="navbar__marca">{{ profile.nombre }}</a>
      <button class="navbar__toggle" @click="alternarMenu" :aria-expanded="menuAbierto" aria-label="Abrir menú">
        <i class="fa-solid fa-bars"></i>
      </button>
      <nav class="navbar__menu" :class="{ 'navbar__menu--abierto': menuAbierto }">
        <a href="#sobre-mi" @click="cerrarMenu">Sobre mí</a>
        <a href="#experiencia" @click="cerrarMenu">Experiencia</a>
        <a href="#proyectos" @click="cerrarMenu">Proyectos</a>
        <a href="#contacto" @click="cerrarMenu">Contáctame</a>
      </nav>
    </header>
  `,
};
