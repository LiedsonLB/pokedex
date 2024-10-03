<template>
  <section class="pokemon-info">
    <div class="container-view-pokemon">
      <button class="favorite-pokemon favorite">
        <svg
          class="empty"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
        >
          <path fill="none" d="M0 0H24V24H0z"></path>
          <path
            d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"
          ></path>
        </svg>
        <svg
          class="filled"
          height="32"
          width="32"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H24V24H0z" fill="none"></path>
          <path
            d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"
          ></path>
        </svg>
      </button>

      <div class="view-pokemon">
        <p class="name-pokemon">{{ pokemon.name }}</p>
        <div class="types">
          <span
            v-for="type in pokemon.types"
            :key="type.type.name"
            :class="`type-${type.type.name}`"
            >{{ type.type.name }}</span
          >
        </div>
        <img
          :src="pokemon.sprites.front_default"
          :alt="pokemon.name"
          class="pokemon-image"
        />
      </div>
      <div class="pokemon-details">
        <ul class="stats">
          <li>
            <label>HP:</label><span>{{ pokemon.stats[0].base_stat }}</span>
          </li>
          <li>
            <label>Ataque:</label><span>{{ pokemon.stats[1].base_stat }}</span>
          </li>
          <li>
            <label>Defesa:</label><span>{{ pokemon.stats[2].base_stat }}</span>
          </li>
          <li>
            <label>Ataque Especial:</label
            ><span>{{ pokemon.stats[3].base_stat }}</span>
          </li>
          <li>
            <label>Defesa Especial:</label
            ><span>{{ pokemon.stats[4].base_stat }}</span>
          </li>
          <li>
            <label>Velocidade:</label
            ><span>{{ pokemon.stats[5].base_stat }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="evolution-section">
      <p>Cadeia de Evolução:</p>
      <div class="evolutions-container">
        <div
          v-for="evolution in evolutions"
          :key="evolution.id"
          class="evolution-card"
        >
          <p>{{ evolution.name }}</p>
          <img :src="evolution.sprites.front_default" :alt="evolution.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(["pokemon", "evolutions"]);
</script>
  
  <style scoped>
.pokemon-info {
  width: 45%;
  padding-inline: 20px;
  border-radius: 10px;
}

.container-view-pokemon {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 5rem;
  position: relative;
}

.name-pokemon {
  font-size: 3rem;
  line-height: 1;
  padding-left: 10px;
  border-left: 10px solid var(--color-red);
  margin-bottom: 1rem;
}

.types {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.favorite-pokemon {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 3rem;
  text-decoration: none;
  color: var(--color-red);
}

.view-pokemon {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.view-pokemon img {
  max-width: 16rem;
  filter: drop-shadow(2px 4px 3px var(--color-red));
  margin: 0 auto;
}

.pokemon-details {
  width: 100%;
}

.stats {
  list-style: none;
  margin-bottom: 20px;
}

.stats li {
  font-size: 20px;
  margin-bottom: 5px;
  color: var(--color-white);
  text-shadow: var(--stroke-text);
  display: flex;
  justify-content: space-between;
}

.stats li span {
  color: var(--color-red);
}

.view-pokemon-btn {
  font-family: var(--font-anton);
  font-size: 20px;
  background-color: var(--color-black);
  color: var(--color-white);
  padding: 5px 20px;
  border: none;
  cursor: pointer;
}

.evolution-section p {
  margin-top: 20px;
  margin-bottom: 10px;
}

.evolution-section img {
  width: 70px;
  margin-right: 10px;
}

.type-normal {
  background-color: #a8a878;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-fire {
  background-color: #f08030;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-water {
  background-color: #6890f0;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-electric {
  background-color: #f8d030;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-grass {
  background-color: #78c850;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-ice {
  background-color: #98d8d8;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-fighting {
  background-color: #c03028;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-poison {
  background-color: #a040a0;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-ground {
  background-color: #e0c068;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-flying {
  background-color: #a890f0;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-psychic {
  background-color: #f85888;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-bug {
  background-color: #a8b820;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-rock {
  background-color: #b8a038;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-ghost {
  background-color: #705898;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-dragon {
  background-color: #7038f8;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-dark {
  background-color: #705848;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-steel {
  background-color: #b8b8d0;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-fairy {
  background-color: #ee99ac;
  color: var(--color-white);
  padding: 5px 10px;
}

/* Botão fornecido na comunidade do site uiverse.io */
/* From Uiverse.io by LilaRest */

button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

button svg {
  width: 3rem;
  height: 3rem;
}

button:hover {
  transform: scale(105%);
}

.filled,
.empty {
  fill: var(--color-red);
  transition: opacity 100ms ease-in-out;
}

.filled {
  position: absolute;
  opacity: 0;
}

@keyframes beatingHeart {
  0% {
    transform: scale(1);
  }

  15% {
    transform: scale(1.15);
  }

  30% {
    transform: scale(1);
  }

  45% {
    transform: scale(1.15);
  }

  60% {
    transform: scale(1);
  }
}

button:hover .empty {
  opacity: 0;
}

button:hover .filled {
  opacity: 1;
  animation: beatingHeart 1.2s infinite;
}

.favorite svg {
  opacity: 1;
}
</style>
  