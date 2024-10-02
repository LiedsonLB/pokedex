<template>
  <div>
    <Header />
    <main>
      <PokemonInfo />
      <PokemonSearch />
    </main>
  </div>
</template>
  
  <script setup>
import Header from "./components/Header.vue";
import PokemonInfo from "./components/PokemonInfo.vue";
import PokemonSearch from "./components/PokemonSearch.vue";
</script>
  