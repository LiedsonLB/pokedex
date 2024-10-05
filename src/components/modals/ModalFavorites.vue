<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <div class="modal-title">
        <p>Pokémons Favoritos</p>
        <button class="close" @click="closeModal">&times;</button>
      </div>
      <div>
        <div class="favorites">
          <!-- Se houver favoritos, exibe a lista de cards -->
          <template v-if="favoritePokemons.length > 0">
            <div
              class="pokemon-card"
              v-for="pokemon in favoritePokemons"
              :key="pokemon.name"
            >
              <div class="rank">#{{ pokemon.id }}</div>
              <img :src="pokemon.image" :alt="pokemon.name" />
              <p>{{ pokemon.name }}</p>
            </div>
          </template>

          <!-- Se não tiver pokemons como favoritos -->
          <template v-else>
            <p class="no-favorites">Você não tem Pokémons favoritos.</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const favoritePokemons = ref([]);

// Função para buscar os detalhes do Pokémon na API
async function fetchPokemonData(name) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    if (!response.ok) {
      throw new Error(`Erro ao buscar Pokémon: ${response.statusText}`);
    }
    const data = await response.json();

    return {
      id: data.id,
      name: data.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Recupera os Pokémons favoritos do localStorage ao montar o componente
onMounted(async () => {
  const favorites = JSON.parse(localStorage.getItem("favoritePokemons")) || [];
  if (favorites.length === 0) {
    favoritePokemons.value = [];
  } else {
    const promises = favorites.map(fetchPokemonData);
    const results = await Promise.all(promises);
    favoritePokemons.value = results.filter((pokemon) => pokemon !== null); // Filtra resultados válidos
  }
});

watch(
  () => props.isVisible,
  (isVisible) => {
    if (isVisible) {
      const favorites =
        JSON.parse(localStorage.getItem("favoritePokemons")) || [];
      if (favorites.length === 0) {
        favoritePokemons.value = [];
      } else {
        const promises = favorites.map(fetchPokemonData);
        Promise.all(promises).then((results) => {
          favoritePokemons.value = results.filter(
            (pokemon) => pokemon !== null
          );
        });
      }
    }
  }
);

function closeModal() {
  emit("close");
}
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
  text-align: center;
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

.favorites {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1.5rem 0;
  gap: 1rem;
  padding: 20px;
}

.rank {
  position: absolute;
  top: -1rem;
  left: -10px;
  background-color: var(--color-black);
  color: var(--color-white);
  padding: 0px 10px;
  border: 2px solid var(--color-gray);
  outline: 2px solid var(--color-black);
}

.pokemon-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
}

.pokemon-card p {
  color: var(--color-black);
}

.pokemon-card img {
  width: 80px;
  height: 80px;
}

.no-favorites {
  grid-column: 1 / -1;
  text-align: center;
  color: var(--color-gray-letter) !important;
  font-size: 1.2rem;
  padding: 2rem 0;
}
</style>
