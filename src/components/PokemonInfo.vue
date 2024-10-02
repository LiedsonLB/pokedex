<template>
  <section class="pokemon-info">
    <div class="container-view-pokemon">
      <div class="view-pokemon">
        <p>Bulbasaur</p>
        <div class="types">
          <span class="type-grass">Planta</span>
          <span class="type-poison">Veneno</span>
        </div>
        <img src="@/assets/pokemon.png" alt="Bulbasaur" class="pokemon-image" />
      </div>
      <div class="pokemon-details">
        <ul class="stats">
          <li><label>HP:</label><span>24</span></li>
          <li><label>Ataque:</label><span>9</span></li>
          <li><label>Defesa:</label><span>12</span></li>
          <li><label>Ataque Especial:</label><span>5</span></li>
          <li><label>Defesa Especial:</label><span>9</span></li>
          <li><label>Velocidade:</label><span>21</span></li>
        </ul>
        <button class="view-pokemon-btn">Ver Pokémon: 3D</button>
      </div>
    </div>
    <div class="evolution-section">
      <h3>Evoluções:</h3>
      <img src="@/assets/pokemon2.png" alt="Evolução 1" />
      <img src="@/assets/pokemon2.png" alt="Evolução 2" />
    </div>
  </section>
</template>
  
  <script setup>
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
}

.pokemon-info p {
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 1rem;
  padding-left: 10px;
  border-left: 10px solid var(--color-red);
}

.types {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.type-grass {
  background-color: #78c850;
  color: var(--color-white);
  padding: 5px 10px;
}

.type-poison {
  background-color: #a040a0;
  color: var(--color-white);
  padding: 5px 10px;
}

.view-pokemon img {
  max-width: 16rem;
  filter: drop-shadow(2px 4px 3px var(--color-red));
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

.evolution-section h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

.evolution-section img {
  width: 70px;
  margin-right: 10px;
}
</style>
  