import { profile } from "../data/profile.js";

export default {
  name: "FooterView",
  setup() {
    const anio = new Date().getFullYear();
    return { profile, anio };
  },
  template: `
    <footer class="footer">
      <p>&copy; {{ anio }} {{ profile.nombre }}. Todos los derechos reservados.</p>
    </footer>
  `,
};
