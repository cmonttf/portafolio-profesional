import { ref } from "vue";

export function useNavViewModel() {
  const menuAbierto = ref(false);

  function alternarMenu() {
    menuAbierto.value = !menuAbierto.value;
  }

  function cerrarMenu() {
    menuAbierto.value = false;
  }

  return { menuAbierto, alternarMenu, cerrarMenu };
}
