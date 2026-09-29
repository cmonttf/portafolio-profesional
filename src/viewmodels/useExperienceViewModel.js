import { ref, computed } from "vue";
import { experience } from "../data/experience.js";
import { TIPO_EXPERIENCIA } from "../models/ExperienceItem.js";

export function useExperienceViewModel() {
  const filtroActivo = ref("todos");

  const filtros = [
    { valor: "todos", etiqueta: "Todo" },
    { valor: TIPO_EXPERIENCIA.LABORAL, etiqueta: "Laboral" },
    { valor: TIPO_EXPERIENCIA.FORMACION, etiqueta: "Formación" },
  ];

  const experienciaFiltrada = computed(() => {
    if (filtroActivo.value === "todos") return experience;
    return experience.filter((item) => item.tipo === filtroActivo.value);
  });

  function setFiltro(valor) {
    filtroActivo.value = valor;
  }

  return { filtros, filtroActivo, experienciaFiltrada, setFiltro };
}
