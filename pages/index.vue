<template>
  <div>
    <div class="search-form">
      <h3 class="mb-4">Search for a TV show</h3>
      <div class="d-flex justify-content-center align-items-center">
        <b-form-input v-model.trim="query" type="text" placeholder="The name of a TV-show..."></b-form-input>
        <b-button class="ml-2" @click="search" :disabled="searchButtonDisabled" variant="success">Search</b-button>
      </div>
    </div>
    <div class="show-list">
      <p v-if="error">Looks like something went wrong. Please try again later!</p>
      <Spinner v-else-if="loading" />
      <p v-else-if="tvshows !== null && (tvshows.length < 1)">Could not find any TV show that matches your search. </p>
      <ShowLink v-for="show in tvshows" :key="show.id" :show="show" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      error: false,
      loading: false,
      tvshows: null
    }
  },
  computed: {
    searchButtonDisabled() {
      return !this.query
    }
  },
  methods: {
    async search() {
      try {
        this.loading = true;
        this.error = false;
        this.emptyResponse = false;
        if (this.query) {
          const response = await fetch(`https://api.tvmaze.com/search/shows?q=${this.query}`)
            .then(resp => resp.json());
          this.tvshows = response.map(show => show.show);
        }
      } catch (error) {
        this.error = true;
      }
      this.loading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.search-form {
  margin-bottom: 2rem;
  text-align: center;
  input {
    max-width: 300px;
  }
}
</style>