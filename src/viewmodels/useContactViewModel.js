import { profile } from "../data/profile.js";

export function useContactViewModel() {
  const enlaces = [
    { etiqueta: "Email", valor: profile.email, url: `mailto:${profile.email}`, icono: "fa-solid fa-envelope" },
    { etiqueta: "Teléfono", valor: profile.telefono, url: `tel:${profile.telefono}`, icono: "fa-solid fa-phone" },
    { etiqueta: "GitHub", valor: profile.github, url: profile.github, icono: "fa-brands fa-github" },
    { etiqueta: "LinkedIn", valor: profile.linkedin, url: profile.linkedin, icono: "fa-brands fa-linkedin" },
  ].filter((enlace) => enlace.valor);

  return { profile, enlaces };
}
