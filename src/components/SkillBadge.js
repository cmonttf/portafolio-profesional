export default {
  name: "SkillBadge",
  props: {
    skill: { type: Object, required: true },
  },
  template: `
    <span class="badge">{{ skill.nombre }}</span>
  `,
};
