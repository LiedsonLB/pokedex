<template>
  <section class="pokemon-search">
    <div class="container-search">
      <input type="text" placeholder="Procure por um pokémon..." />
      <div class="filter-icon">
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
    <p>Pokémons encontrados (920):</p>
    <div class="pokemon-cards">
      <div class="pokemon-card">
        <div class="rank">#1</div>
        <img src="@/assets/pokemon.png" alt="Bulbasaur" />
        <p>Bulbasaur</p>
      </div>
      <div class="pokemon-card">
        <div class="rank">#2</div>
        <img src="@/assets/pokemon2.png" alt="Mankey" />
        <p>Mankey</p>
      </div>
      <div class="pokemon-card">
        <div class="rank">#3</div>
        <img src="@/assets/pokemon.png" alt="Bulbasaur" />
        <p>Bulbasaur</p>
      </div>
      <div class="pokemon-card">
        <div class="rank">#1</div>
        <img src="@/assets/pokemon.png" alt="Pikachu" />
        <p>Pikachu</p>
      </div>
    </div>
  </section>
</template>
  
  <script setup>
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
  margin-bottom: 25px;
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
  max-height: 600px;
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

.pokemon-card.active {
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
.pokemon-card:focus .rank,
.pokemon-card.active .rank {
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
  