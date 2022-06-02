<template>
  <Spinner v-if="loading" />
  <h3 v-else-if="error">Oh no, could not find your tv-show.</h3>
  <div v-else-if="show">
    <div class="show-header">
      <div class="show-title">
        <h3>{{ show.name }}</h3>
        <FavouriteButton :showId="show.id" />
      </div>
      <BackButton title="Got back to search" />
    </div>
    <div class="info-container">
      <div class="show-info">
        <span v-html="show.summary" />
        <ShowInfoItem title="Running period" :value="`${show.premiered} - ${show.ended ? show.ended : 'Now'}`" />
        <ShowInfoItem title="Language" :value="show.language" />
        <ShowInfoItem title="Genres" :value="show.genres.join(', ')" />
        <ShowInfoItem title="Average rating" :value="show.rating.average" />
        <ShowInfoItem title="Web Channel" :value="webChannelInfo" />
      </div>
      <div class="show-image">
        <img v-if="show.image.medium" :src="show.image.medium" />
      </div>
    </div>
    <div class="episodes-container">
      <h4>Episodes</h4>
      <ShowEpisodeListFilter :episodes="show._embedded.episodes" />
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
  computed: {
    webChannelInfo() {
      let info = '';
      if (this.show.webChannel && this.show.webChannel.name) {
        info += `${this.show.webChannel.name}`;
        if (this.show.webChannel.country && this.show.webChannel.country.name) {
          info += ` (${this.show.webChannel.country.name})`;
        }
      }
      return info;
    }
  },
  async fetch() {
    this.loading = true;
    this.error = false;
    try {
      const response = await fetch(`https://api.tvmaze.com/shows/${this.$route.params.id}?embed=episodes`);
      if (response.status !== 200) {
        this.error = true;
      } else {
        this.show = await response.json();
      }
    } catch (error) {
      this.error = true;
    }
    this.loading = false;
  }
}
</script>

<style lang="scss" scoped>
.show-header {
  margin-bottom: 1rem;
}
.show-title {
  display: flex;
  align-items: center;
  h3 {
    margin-right: 1rem;
    margin-bottom: 0;
  }
}
.info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  .show-image {
    margin-bottom: 2rem;
  }
  @media (min-width: $mediumScreenMin) {
    flex-direction: row;
    .show-info {
      margin-right: 4rem;
    }
  }
}
.episodes-container {
  margin-top: 3rem;
}
</style>