export const TIPO_EXPERIENCIA = {
  LABORAL: "laboral",
  FORMACION: "formacion",
};

export function createExperienceItem({
  id,
  tipo = TIPO_EXPERIENCIA.LABORAL,
  cargo,
  institucion,
  fechaInicio,
  fechaFin = "Actualidad",
  descripcion = "",
  logros = [],
} = {}) {
  return { id, tipo, cargo, institucion, fechaInicio, fechaFin, descripcion, logros };
}
