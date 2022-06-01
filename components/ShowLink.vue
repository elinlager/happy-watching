<template>
  <NuxtLink :to="`/show/${id}`">
    <div class="showcard">
      <p>{{ name }}</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true
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
    align-items: center;
    padding: 1rem 2rem;
    background-color: $yellow;
    border-radius: 0.5rem;
    color: $black;
    margin-bottom: 1rem;
    cursor: pointer;
    p {
      margin: 0;
    }
    &:hover {
      opacity: 0.8;
    }
  }
</style>