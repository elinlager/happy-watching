<template>
  <NuxtLink :to="`/show/${show.id}`">
    <div class="showcard">
      <div class="show-info">
        <h5>{{ show.name }}</h5>
        <div v-html="show.summary" class="summary" />
      </div>
      <img v-if="show.image && show.image.medium" :src="show.image.medium" />
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    show: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
a:hover {
  text-decoration: none;
}
.showcard {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: $pink;
  border-radius: 0.5rem;
  color: $black;
  margin-bottom: 1rem;
  cursor: pointer;
  .show-info {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
  }
  p {
    margin: 0;
  }
  &:hover {
    opacity: 0.8;
  }
  img {
    max-height: 100px;
  }
}
</style>