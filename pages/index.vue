<template>
  <div>
    <div class="search-form-container">
      <h3>Search for a TV show</h3>
      <div class="search-form">
        <b-form-input v-model.trim="query" @keyup.enter="search" type="text" placeholder="The name of a TV show..."></b-form-input>
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
          const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(this.query)}`)
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
.search-form-container {
  text-align: center;
  .search-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0 ;
    @media (min-width: $mediumScreenMin) {
      flex-direction: row;
    }
    input {
      max-width: 300px;
      margin-bottom: 1rem;
      @media (min-width: $mediumScreenMin) {
        margin-bottom: 0;
      }
    }
  }
}
.show-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>