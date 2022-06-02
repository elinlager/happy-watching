<template>
  <div>
    <div class="paginationContainer">
      <p>Season:</p>
      <button v-for="index in numberOfSeasons" :key="index" @click="onPageClick(index)" :class="index === page ? 'active' : ''">
        {{index}}
      </button>
    </div>
    <div v-for="episode in filteredEpisodes" :key="episode.id" class="listItem">
      <div class="info">
        <h5>{{ `${episode.number}. ${episode.name}` }}</h5>
        <span v-html="episode.summary" />
        <ShowInfoItem title="Season" :value="episode.season" />
        <ShowInfoItem title="Air date" :value="episode.airdate" />
        <ShowInfoItem title="Rating" :value="episode.rating.average" />
      </div>
      <img v-if="episode.image && episode.image.medium" :src="episode.image.medium" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    episodes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      page: 1,
    }
  },
  computed: {
    filteredEpisodes() {
      return this.episodes
        .filter(episode => episode.season == this.page);
    },
    numberOfSeasons() {
      return Math.max(...this.episodes.map(episode => episode.season));
    }
  },
  methods: {
    onPageClick(pagenr) {
      this.page = pagenr;
    }
  }
}
</script>

<style lang="scss" scoped>
.listItem {
  background-color: $green;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  .info {
    margin-right: 1rem;
  }
  img {
    align-self: start;
  }
}
.paginationContainer {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  p {
    margin-bottom: 0;
  }
  button {
    margin-left: 0.5rem;
    background-color: $pink;
    border: none;
    outline: none;
    border-radius: 4px;
    width: 2rem;
    &:hover {
      opacity: 0.8;
    }
    &.active {
      border: 2px solid $black;
    }
  }
}
</style>