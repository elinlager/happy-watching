<template>
  <div :class="`list-item ${type == 'big' ? 'item-big' : 'item-small'}`">
    <h6>{{ `${episode.season}.${episode.number} ${episode.name}` }}</h6>
    <div v-if="type == 'big'" class="item-content big-info">
      <div>
        <span v-html="episode.summary" />
        <ShowInfoItem title="Season" :value="episode.season" />
        <ShowInfoItem title="Air date" :value="episode.airdate" />
        <ShowInfoItem title="Rating" :value="episode.rating.average" />
      </div>
      <img v-if="episode.image && episode.image.medium" :src="episode.image.medium" />
    </div>
    <div v-else class="item-content big-info">
      <p>{{`Airing in ${daysUntilAiring} days`}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    episode: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'big'
    }
  },
  computed: {
    daysUntilAiring() {
      const difference = new Date(this.episode.airdate).getTime() - (new Date).getTime();
      return Math.ceil(difference / (1000 * 3600 * 24));
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  &.item-big {
    border-left: 4px solid $green;
  }
  &.item-small {
    border-radius: 1rem;
    background-color: $green;
  }
  margin-bottom: 1rem;
  padding: 1rem;
  .item-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .big-info {
      margin-right: 1rem;
    }
    img {
      align-self: center;
    }
    @media (min-width: $mediumScreenMin) {
      flex-direction: row;
      margin-bottom: 0.5rem;
      img {
        align-self: start;
      }
    }
    p {
      margin-bottom: 0;
    }
  }
}
</style>