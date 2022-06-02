<template>
  <button @click="$router.go(-1)">
      <b-icon-arrow-left-short></b-icon-arrow-left-short> {{ title ? title : '' }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
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
    opacity: 0.5;
  }
}
</style>