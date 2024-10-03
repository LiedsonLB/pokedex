<template>
  <header id="header">
    <div class="logo">
      <img src="@/assets/icon_pokebola.png" alt="Pokebola" class="pokeball" />
      <p>Pokedex</p>
      <h1></h1>
    </div>
    <div class="menu">
      <div class="menu-icon">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
  </header>
</template>
  
  <script setup>
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

.menu-icon {
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
}
</style>
  