<template>
  <div>
    <div class="filter-container">
      <h6>Filter by:</h6>
      <div>
        <button 
          @click="onFilter('upcomming')"
          :class="filterIsUpcomming ? 'active' : ''">
            Upcoming Episodes
        </button>
        <button 
          v-for="index in numberOfSeasons" 
          :key="index" 
          @click="onFilter('season', index)" 
          :class="filterIsSeason && filter.value === index ? 'active' : ''">
            {{ `Season ${index}`}}
        </button>
      </div>
    </div>
    <template v-if="filteredEpisodes.length > 0">
      <div v-for="episode in filteredEpisodes" :key="episode.id" class="list-item">
        <div class="info">
          <h5>{{ `${episode.number}. ${episode.name}` }}</h5>
          <span v-html="episode.summary" />
          <ShowInfoItem title="Season" :value="episode.season" />
          <ShowInfoItem title="Air date" :value="episode.airdate" />
          <ShowInfoItem title="Rating" :value="episode.rating.average" />
        </div>
        <img v-if="episode.image && episode.image.medium" :src="episode.image.medium" />
      </div>
    </template>
    <div v-else-if="filterIsUpcomming">No upcomming episodes announced.</div>
    <div v-else>No episodes found.</div>
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
      filter: {
        type: 'upcomming',
        value: null
      }
    }
  },
  computed: {
    filterIsUpcomming() {
      this.filter.type
      return this.filter.type === 'upcomming';
    },
    filterIsSeason() {
      return this.filter.type === 'season';
    },
    filteredEpisodes() {
      if (this.filterIsUpcomming) {
        const now = new Date();
        return this.episodes
          .filter(episode => new Date(episode.airstamp) > now);
      } else {
        return this.episodes
          .filter(episode => episode.season == this.filter.value);
      }
    },
    numberOfSeasons() {
      return Math.max(...this.episodes.map(episode => episode.season));
    }
  },
  methods: {
    onFilter(type, value) {
      console.log(type)
      this.filter = { type, value }
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
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
.filter-container {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  h6 {
    margin-bottom: 0;
  }
  button {
    margin-left: 0.5rem;
    background-color: $pink;
    border: none;
    outline: none;
    border-radius: 4px;
    min-width: 2rem;
    &:hover {
      opacity: 0.8;
    }
    &.active {
      border: 2px solid $black;
    }
  }
}
</style>