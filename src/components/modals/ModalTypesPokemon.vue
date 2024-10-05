<template>
  <div class="modal" v-if="isModalOpen">
    <div class="modal-content">
      <div class="modal-title">
        <p>Selecione os Tipos de Pokémon</p>
        <button class="close" @click="closeModal">&times;</button>
      </div>
      <div>
        <div class="types-list">
          <label
            v-for="type in allTypes"
            :key="type"
            :class="`type-${type} type-checkbox`"
          >
            <input type="checkbox" :value="type" v-model="selectedTypes" />
            {{ getLabelText(type) }}
          </label>
        </div>
      </div>
      <div class="container-btn">
        <button @click="applyTypeFilter" class="filter-apply">
          Aplicar Filtro
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const isModalOpen = ref(true);
const allTypes = ref([]);
const selectedTypes = ref([]);
const emit = defineEmits();

const closeModal = () => {
  emit("closeModal");
};

const getLabelText = (type) => {
  return selectedTypes.value.includes(type)
    ? "SELECIONADO"
    : type.toUpperCase();
};

const applyTypeFilter = () => {
  console.log(selectedTypes.value);
  emit("filterApplied", selectedTypes.value);
  closeModal();
};

// Alterna a seleção de todos os checkboxes
const toggleAll = (event) => {
  if (event.target.checked) {
    selectedTypes.value = [...allTypes.value];
  } else {
    selectedTypes.value = [];
  }
};

// Buscar todos os tipos de Pokémon
const fetchAllTypes = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/type");
    const data = await response.json();
    allTypes.value = data.results.map((type) => type.name);
  } catch (error) {
    console.error("Erro ao buscar tipos de Pokémon:", error);
  }
};

fetchAllTypes();
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}

.modal-content {
  background-color: white;
  margin: 15% auto;
  border: 1px solid #888;
  width: 80%;
  max-height: 600px;
  overflow-y: auto;
  margin: auto;
}

.modal-title {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: var(--color-white);
  padding: 20px 30px;
  z-index: 10;
}

.modal-title p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  color: var(--color-black);
  font-size: 1.3rem;
  padding-left: 10px;
  border-left: 10px solid var(--color-red);
}

.close {
  background: transparent;
  border: none;
  color: #404040;
  float: right;
  font-size: 30px;
  font-weight: bold;
  padding: 0;
  margin: 0;
}

.close:hover,
.close:focus {
  color: var(--color-black);
  text-decoration: none;
  cursor: pointer;
}

.types-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1.5rem 0;
  gap: 1rem;
  padding: 20px;
}

.type-checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: var(--color-white);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  user-select: none;
  color: var(--color-white);
  text-shadow: var(--stroke-text);
  letter-spacing: 1px;
}

.type-checkbox:hover {
  background-color: var(--color-light-gray);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.type-checkbox input[type="checkbox"] {
  appearance: none;
  visibility: hidden;
  position: absolute !important;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-gray);
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.type-checkbox input[type="checkbox"]:hover {
  border-color: var(--color-red);
}

.type-checkbox input[type="checkbox"]:checked {
  background-color: var(--color-red);
  border-color: var(--color-red);
}

.container-btn {
  width: 100%;
  display: flex;
  justify-content: center;
}

.filter-apply {
  background: var(--color-black);
  color: var(--color-white);
  font-family: var(--font-anton);
  font-size: 1rem;
  letter-spacing: 1px;
  border: none;
  margin-block: 20px;
  outline-offset: 5px;
  outline: 2px solid var(--color-black);
  padding: 10px;
  width: 100%;
  max-width: 250px;
  text-align: center;
  cursor: pointer;
  user-select: none;
}

.filter-apply:hover {
  background: var(--color-red);
  outline-color: var(--color-red);
}
</style>
