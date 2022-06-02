<template>
  <button @click="toggleFavourite(showId)">
    <span class="h4">
      <b-icon-heart-fill v-if="isFavourite"></b-icon-heart-fill>
      <b-icon-heart v-else></b-icon-heart>
    </span>
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    showId: {
      type: String,
      required: true,
    }
  },
  computed: {
    isFavourite () {
      return this.$store.getters.isFavourite(this.showId)
    }
  },
  methods: {
    ...mapActions(["toggleFavourite"])
  },
}
</script>

<style lang="scss" scoped>
button {
  outline: none;
  background-color: transparent;
  border: none;
  &:hover {
    color: $pink;
  }
}
</style>