<template>
  <button @click="onToggle()">
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
      type: Number | String,
      required: true,
    }
  },
  emits: ['removeShow', 'addShow'],
  computed: {
    isFavourite () {
      return this.$store.getters.isFavourite(this.showId)
    }
  },
  methods: {
    ...mapActions(["toggleFavourite"]),
    onToggle() {
      if (this.isFavourite) {
        this.$emit('removeShow', this.showId);
      } else {
        this.$emit('addShow', this.showId);
      }
      this.toggleFavourite(this.showId);
    }
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