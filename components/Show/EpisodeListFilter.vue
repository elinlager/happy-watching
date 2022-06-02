<template>
  <div>
    <div class="filter-container">
      <h6>Filter by:</h6>
      <div class="filters">
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
    <ShowEpisodeList :episodes="filteredEpisodes" />
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
      this.filter = { type, value };
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  .filters {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px 2px;
    button {
      margin-left: 0.5rem;
      background-color: $pink;
      border: none;
      outline: none;
      border-radius: 4px;
      min-width: 2rem;
      flex-grow: 1;
      &:hover {
        opacity: 0.8;
      }
      &.active {
        border: 2px solid $black;
      }
    }
  }
  h6 {
    margin-bottom: 1rem;
  }
  @media (min-width: $mediumScreenMin) {
    flex-direction: row;
    align-items: center;
    h6 {
      flex-shrink: 0;
      margin-bottom: 0;
    }
    .filters {
      flex-direction: row;
      button {
        flex-grow: 0;
      }
    }
  }
}
</style>