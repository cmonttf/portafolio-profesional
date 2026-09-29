import { createApp } from "vue";
import NavBarView from "./views/NavBarView.js";
import HeroView from "./views/HeroView.js";
import AboutView from "./views/AboutView.js";
import ExperienceView from "./views/ExperienceView.js";
import ProjectsView from "./views/ProjectsView.js";
import ContactView from "./views/ContactView.js";
import FooterView from "./views/FooterView.js";

const App = {
  name: "App",
  components: { NavBarView, HeroView, AboutView, ExperienceView, ProjectsView, ContactView, FooterView },
  template: `
    <nav-bar-view />
    <main>
      <hero-view />
      <about-view />
      <experience-view />
      <projects-view />
      <contact-view />
    </main>
    <footer-view />
  `,
};

createApp(App).mount("#app");
