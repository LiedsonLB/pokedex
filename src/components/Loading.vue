<template>
  <div class="loading">
    <div class="loading-spinner">
      <div class="spinner">
        <img src="@/assets/icon_pokebola.png" alt="loading" />
      </div>
    </div>
    <br />
    <p>Carregando...</p>
  </div>
</template>
  
  <style scoped>
.loading {
  width: 100vw;
  min-height: 100% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0rem;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
}

.spinner {
  animation: shake 1.5s ease-in-out infinite;
}

.spinner img {
  width: 100%;
  height: 100%;
}
</style>
  