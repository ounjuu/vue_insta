<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage: 'url(' + insta.userImage + ')' }"></div>
      <span class="profile-name">{{ insta.name }}</span>
    </div>
    <div
      class="post-body"
      :class="insta.filter"
      :style="{ backgroundImage: 'url(' + insta.postImage + ')' }"
      @click="$store.commit('toggleLikes', insta.id)"
    ></div>
    <div class="post-content">
      <p>{{ insta.likes }} Likes</p>
      <p>
        <strong>{{ insta.name }}</strong> {{ insta.content }}
      </p>
      <p class="date">{{ insta.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  components: {},
  props: ['insta'],
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  /* background-image: url('https://picsum.photos/100?random=0'); */
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
