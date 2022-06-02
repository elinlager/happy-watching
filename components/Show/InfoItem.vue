<template>
  <div class="info-item">
    <h6>{{ title }}</h6>
    <p>{{ value ? value : '-' }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String | Number,
      required: true
    },
    link: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.info-item {
  display: flex;
  h6 {
    margin-right: 1rem;
  }
  p {
    margin-bottom: 0;
  }
  h6, p {
    line-height: 1;    
  }
}
</style>