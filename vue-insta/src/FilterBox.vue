<template>
  <div class="filter-item" :class="filter" :style="{ backgroundImage: `url(${imageUrl})` }">
    <slot></slot>
    <button @click="fire(filter)">버튼</button>
  </div>
</template>

<script>
export default {
  name: 'FilterBox',
  props: ['imageUrl', 'filter'],
  methods: {
    fire(a) {
      this.emitter.emit('filterName', a)
    },
  },
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
