<template>
  <div>
    <div class="search-form">
      <h3 class="mb-4">Search for a tv show</h3>
      <div class="d-flex justify-content-center align-items-center">
        <b-form-input v-model.trim="query" type="text" placeholder="The name of a TV-show..."></b-form-input>
        <b-button class="ml-2" @click="search" :disabled="searchButtonDisabled" variant="success">Search</b-button>
      </div>
    </div>
    <div class="show-list">
      <ShowLink v-for="show in tvshows" :key="show.id" :name="show.name" :id="show.id" />
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
      tvshows: []
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
          this.tvshows = response.map(show => ({name: show.show.name, id: show.show.id} ));
          console.log(this.tvshows)
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