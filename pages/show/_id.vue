<template>
  <Spinner v-if="loading" />
  <h3 v-else-if="error">Oh no something went wrong.</h3>
  <div v-else-if="show">
    <div class="title"> 
      <h3>{{ show.name }}</h3>
      <FavouriteButton :showId="'111'" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: null,
      loading: false,
      error: false,
    }
  },
  async fetch() {
    this.loading = true;
    this.error = false;
    try {
      const response = await fetch(`https://api.tvmaze.com/shows/${this.$route.params.id}?embed=episodes`)
        .then(r => r.json());
      console.log(response)
      this.show = response;
    } catch (error) {
      this.error = true;
    }
    this.loading = false;
  }
}
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>