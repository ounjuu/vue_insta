<template>
  <div v-if="page === 0">
    <Post v-for="(insta, index) in data" :key="index" :insta="insta" />
  </div>

  <!-- 필터선택페이지 -->
  <div v-if="page === 1">
    <div
      :class="['upload-image', selectedFilter]"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></div>
    <div class="filters">
      <FilterBox :imageUrl="imageUrl" v-for="filter in filterData" :key="filter" :filter="filter">{{
        filter
      }}</FilterBox>
    </div>
  </div>

  <!-- 글작성페이지 -->
  <div v-if="page === 2">
    <div
      :class="selectedFilter"
      class="upload-image"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></div>
    <div class="write">
      <textarea
        class="write-box"
        @input="$emit('write', $event.target.value)"
        placeholder="글 작성하기"
      ></textarea>
    </div>
  </div>
</template>

<script>
import Post from './Post.vue'
import FilterBox from './FilterBox.vue'
import filterData from '@/assets/filterData'

export default {
  name: 'Container',
  components: { Post: Post, FilterBox },
  props: ['data', 'page', 'imageUrl'],
  data() {
    return {
      filterData,
      selectedFilter: '',
    }
  },
  mounted() {
    this.emitter.on('filterName', (a) => {
      this.selectedFilter = a
    })
  },
}
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
