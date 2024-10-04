<template>
  <header id="header">
    <div class="logo">
      <img src="@/assets/icon_pokebola.png" alt="Pokebola" class="pokeball" />
      <p>Pokedex</p>
      <h1></h1>
    </div>
    <div class="menu" @click="openModal">
      <svg
          class="filled"
          height="35"
          width="35"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H24V24H0z" fill="none"></path>
          <path
            d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"
          ></path>
        </svg>
    </div>

    <ModalFavorites :isVisible="isModalVisible" @close="closeModal" />
  </header>
</template>

<script setup>
import { ref } from "vue";
import ModalFavorites from "./ModalFavorites.vue";

const isModalVisible = ref(false);

function openModal() {
  isModalVisible.value = true;
}

function closeModal() {
  isModalVisible.value = false;
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-red);
  padding: 10px;
  color: var(--color-white);
  padding-inline: 2rem;
}

header .logo {
  display: flex;
  align-items: center;
}

header .logo img {
  width: 40px;
  margin-right: 10px;
}

header p {
  font-size: 24px;
}

.menu { 
  display: flex;
  align-items: center;
}

.menu svg {
  fill: var(--color-white);
  cursor: pointer;
}

.menu svg:hover {
  scale: 1.1;
}

/* ainda implementando menu com favoritos e Dark mode */

/* .menu-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  cursor: pointer;
}

.menu-icon .bar {
  width: 25px;
  height: 3px;
  background-color: var(--color-white);
} */
</style>
