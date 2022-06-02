<template>
  <b-navbar toggleable="lg" class="navbar px-4">
    <NuxtLink class="logo" to="/">Happy TV</NuxtLink>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <span class="m-2"><NuxtLink class="navigation-link" to="/favourites">Favourites</NuxtLink></span>
        <span class="m-2"><NuxtLink class="navigation-link" to="/">Search</NuxtLink></span>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: $yellow;
  .logo {
    font-size: 16px;
    color: $black;
    font-weight: bold;
    &:hover {
      text-decoration: none;
    }
  }
  .navigation-link {
    color: $black;
    &:hover {
      opacity: 0.8;
      text-decoration: none;
    }
    &.nuxt-link-exact-active {
      text-decoration: underline;
    }
  }
}
</style>