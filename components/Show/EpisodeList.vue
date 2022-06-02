<template>
  <div>
    <template v-if="episodes.length > 0">
      <ShowEpisode v-for="episode in episodes" :key="episode.id" :episode="episode" :type="type" />
    </template>
    <div v-else>No episodes found.</div>
  </div>
</template>

<script>
export default {
  props: {
    episodes: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'big'
    }
  },
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