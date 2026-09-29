import { computed } from "vue";
import { profile } from "../data/profile.js";
import { skills } from "../data/skills.js";

export function useAboutViewModel() {
  const categorias = computed(() => {
    const grupos = {};
    skills.forEach((skill) => {
      if (!grupos[skill.categoria]) grupos[skill.categoria] = [];
      grupos[skill.categoria].push(skill);
    });
    return grupos;
  });

  return { profile, skills, categorias };
}
