<template>
  <div>
    <Post v-for="(insta, index) in data" :key="index" :insta="insta" />
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  name: 'Container',
  components: { Post: Post },
  props: ['data'],
}
</script>
