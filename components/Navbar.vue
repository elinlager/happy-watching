<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="px-4">
    <NuxtLink class="logo" to="/">Happy TV</NuxtLink>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <span class="m-2"><NuxtLink class="nav-link" to="/favourites">Favourites</NuxtLink></span>
        <span class="m-2"><NuxtLink class="nav-link" to="/">Search</NuxtLink></span>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss" scoped>
.logo {
  font-size: 16px;
  color: black;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }
}
.nav-link {
  color: black;
  &:hover {
    opacity: 0.8;
    text-decoration: none;
  }
  &.nuxt-link-exact-active {
    text-decoration: underline;
  }
}
</style>