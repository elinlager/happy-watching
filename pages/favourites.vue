<template>
  <div>
    <h3>My favourite shows</h3>
    <span v-if="shows.length < 1">
      You dont have no favourite shows. 
      Try <NuxtLink to="/">searching for one</NuxtLink>.
    </span>
    <div v-for="show in shows" :key="show.id" class="favourite-item">
      <div class="show-title">
        <NuxtLink :to="`/show/${show.id}`"><h3>{{ show.name }}</h3></NuxtLink>
        <FavouriteButton :showId="show.id" class="favourite-button" @removeShow="removeItem" />
      </div>
      <div class="episode-list">
        <div v-if="getUpcommingEpisodes(show.id).length > 0">
          <h5>Upcomming episodes:</h5>
          <ShowEpisode v-for="episode in getUpcommingEpisodes(show.id)" :key="episode.id" :episode="episode" type="small" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      shows: [],
      loading: false,
      error: false,
    }
  },
  computed: mapState(['favouriteShows']),
  methods: {
    ...mapActions(["toggleFavourite"]),
    removeItem(id) {
      this.shows = this.shows.filter(show => show.id != id);
    },
    getUpcommingEpisodes(showId) {
      const show = this.shows.find(show => show.id == showId);
      const now = new Date();
      return show._embedded.episodes.filter(episode => new Date(episode.airstamp) > now);
    }
  },
  async fetch () {
    if (this.favouriteShows.length > 0) {
      this.loading = true;
      this.error = false;
      try {
        await Promise.all(
          this.favouriteShows.map(showId => {
            fetch(`https://api.tvmaze.com/shows/${showId}?embed=episodes`)
              .then(res => res.json())
              .then(res => this.shows.push(res));
          })
        )
      } catch (error) {
        this.error = true;
      }
      this.loading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.favourite-item {
  border-left: 4px solid $pink;
  margin-bottom: 2rem;
  padding: 1rem;
  .show-title {
    display: flex;
    .favourite-button {
      margin-left: 1rem;
    }
  }
  .episode-list {
    margin: 1rem 0 0 2rem;
  }
}

</style>