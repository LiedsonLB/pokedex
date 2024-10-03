<template>
  <div>
    <Header />
    <main>
      <PokemonInfo v-if="selectedPokemon" :pokemon="selectedPokemon" :evolutions="evolutions" />
      <PokemonSearch @pokemon-selected="setSelectedPokemon" />
    </main>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import PokemonInfo from "./components/PokemonInfo.vue";
import PokemonSearch from "./components/PokemonSearch.vue";
import { ref } from 'vue';

const selectedPokemon = ref(null);
const evolutions = ref([]);

const setSelectedPokemon = (pokemon) => {
  // mudando a sprinte para uma imagem 3D
  selectedPokemon.value = {
    ...pokemon,
    sprites: {
      front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
    },
  };
};
</script>