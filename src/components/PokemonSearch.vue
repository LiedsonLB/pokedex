<template>
  <ModalTypesPokemon
    v-if="isShowModal"
    @closeModal="closeModal"
    @filterTypes="handleFilterTypes"
  />

  <Loading v-if="isLoading" />

  <section class="pokemon-search" v-else>
    <div class="container-search">
      <input
        type="text"
        placeholder="Procure por um pokémon..."
        v-model="searchTerm"
        @input="filterPokemon"
      />
      <div class="filter-icon" @click="openModal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#1C1A1F"
        >
          <path
            d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
          />
        </svg>
      </div>
    </div>
    <p>Pokémons encontrados: {{ filteredPokemons.length }}</p>
    <div class="pokemon-cards">
      <div
        class="pokemon-card"
        v-for="pokemon in filteredPokemons"
        :key="pokemon.id"
        @click="selectPokemon(pokemon)"
      >
        <div class="rank">#{{ pokemon.id }}</div>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
        <p>{{ pokemon.name }}</p>
      </div>
    </div>
    <div v-if="evolutions.length">
      <h3>Cadeia de Evolução:</h3>
      <div class="pokemon-cards">
        <div
          class="pokemon-card"
          v-for="evolution in evolutions"
          :key="evolution.id"
        >
          <div class="rank">#{{ evolution.id }}</div>
          <img :src="evolution.sprites.front_default" :alt="evolution.name" />
          <p>{{ evolution.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ModalTypesPokemon from "./modals/ModalTypesPokemon.vue";
import Loading from "@/components/Loading.vue";
import { ref, defineEmits } from "vue";

const emit = defineEmits();

const searchTerm = ref("");
const allPokemons = ref([]);
const filteredPokemons = ref([]);
const evolutions = ref([]);
const selectedTypes = ref([]);
const isShowModal = ref(false);
const isLoading = ref(true);

const selectPokemon = async (pokemon) => {
  try {
    const response = await fetch(pokemon.url);
    const detailedPokemon = await response.json();

    emit("pokemon-selected", detailedPokemon);
  } catch (error) {
    console.error("Erro ao buscar detalhes do Pokémon:", error);
  }

  const evolutionsSection = document.querySelector("#header");
  if (evolutionsSection) {
    evolutionsSection.scrollIntoView({ behavior: "smooth" });
  }
};

const handleFilterTypes = (types) => {
  selectedTypes.value = types;
  filterPokemon();
};

const openModal = () => {
  isShowModal.value = true;
};

const closeModal = () => {
  isShowModal.value = false;
};

// Função para filtrar tanto por nome quanto por tipos
const filterPokemon = () => {
  filteredPokemons.value = allPokemons.value.filter((pokemon) => {
    const matchesName = pokemon.name
      .toLowerCase()
      .includes(searchTerm.value.toLowerCase());
    const matchesType =
      selectedTypes.value.length === 0 ||
      pokemon.types.some((type) => selectedTypes.value.includes(type));
    return matchesName && matchesType;
  });
};

// Função para buscar todos os Pokémons
const fetchAllPokemons = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=920");
    const data = await response.json();
    allPokemons.value = data.results.map((pokemon, index) => ({
      id: index + 1,
      name: pokemon.name,
      url: pokemon.url,
      sprites: {
        front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`,
      },
      types: [], // O tipo será preenchido ao buscar os detalhes do Pokémon
    }));

    filteredPokemons.value = allPokemons.value;

    // Buscar detalhes adicionais para incluir os tipos
    await Promise.all(
      allPokemons.value.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const details = await response.json();
        pokemon.types = details.types.map((typeInfo) => typeInfo.type.name);
      })
    );
  } catch (error) {
    console.error("Erro ao buscar a lista de Pokémons:", error);
  } finally {
    isLoading.value = false;
  }
};

// Chama a função para buscar todos os pokémons ao carregar o componente
fetchAllPokemons();
</script>

<style scoped>
.pokemon-search {
  width: 45%;
}

.pokemon-search input {
  width: 100%;
  padding: 10px;
  border: 2px solid var(--color-black);
  color: var(--color-black);
  font-family: var(--font-anton);
  outline: none;
}

.pokemon-search input::placeholder {
  color: var(--color-black);
}

.pokemon-search input:focus {
  border-color: var(--color-red) !important;
}

.container-search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 10px;
}

.pokemon-search p {
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.filter-icon {
  display: flex;
  align-items: center;
  border: 2px solid var(--color-black);
  max-width: 45px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
}

.filter-icon:hover {
  border-color: var(--color-red);
}

.filter-icon:hover svg,
.filter-icon:focus svg {
  fill: var(--color-red);
}

.pokemon-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-height: 450px;
  overflow-y: auto;
  padding: 1.5rem 1rem;
}

.pokemon-card {
  background: var(--card-off-gradient);
  border: none;
  outline-offset: 5px;
  outline: 2px solid var(--color-black);
  padding-block: 10px;
  text-align: center;
  position: relative;
  cursor: pointer;
  user-select: none;
}

.pokemon-card:hover,
.pokemon-card:focus {
  outline: 2px solid var(--color-red) !important;
  background: var(--card-gradient) !important;
}

.pokemon-card .rank {
  position: absolute;
  top: -1rem;
  left: -10px;
  background-color: var(--color-black);
  color: var(--color-white);
  padding: 2px 20px;
  border: 2px solid var(--color-gray);
  outline: 2px solid var(--color-black);
}

.pokemon-card:hover .rank,
.pokemon-card:focus .rank {
  background-color: var(--color-red);
  outline: 2px solid var(--color-red);
}

.pokemon-card img {
  width: 100px;
  margin-bottom: 10px;
}

.pokemon-card:hover img,
.pokemon-card:focus img {
  transform: scale(1.1);
  transition: transform 0.3s;
}

.pokemon-card p {
  font-size: 20px;
  color: var(--color-white);
  text-shadow: var(--stroke-text);
}
</style>
