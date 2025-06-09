<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔎" />
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">사용자명</span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'mypage',
  setup() {
    let follower = ref([])

    return { follower }
  },
}
</script>

<style></style>
