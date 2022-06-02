<template>
  <div>
    <Navbar />
    <div class="layout-container">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
  margin: 2rem;
  @media (min-width: $mediumScreenMin) {
    margin: 5rem;
  }
}
</style>