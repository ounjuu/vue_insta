<template>
  <div id="app">
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="page == 1" @click="page++">Next</li>
        <li v-if="page == 2" @click="publish">Save</li>
      </ul>
      <img src="../src/assets/logo.svg" class="logo" />
    </div>

    <Container :data="data" :page="page" :imageUrl="imageUrl" @write="write = $event" />

    <button @click="more(count)">더보기</button>
    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>

  <!-- 탭 테스트-->
  <!-- <div v-bind:class="[page === 0 ? 'see' : 'none']">내용0</div>
  <div v-bind:class="[page === 1 ? 'see' : 'none']">내용1</div>
  <div v-bind:class="[page === 2 ? 'see' : 'none']">내용2</div> -->

  <!-- <div v-if="page === 0">내용0</div>
  <div v-if="page === 1">내용1</div>
  <div v-if="page === 2">내용2</div>
  <button @click="pageBtn(0)">버튼0</button>
  <button @click="pageBtn(1)">버튼1</button>
  <button @click="pageBtn(2)">버튼2</button>
  <div style="margin-top: 500px"></div> -->
</template>

<script>
import Container from './Container.vue'
import data from '@/assets/data'
import axios from 'axios'

export default {
  name: 'App',
  components: { Container: Container },
  data() {
    return {
      data,
      count: 0,
      page: 0,
      imageUrl: '',
      write: '',
    }
  },
  methods: {
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`).then((result) => {
        this.data.push(result.data)
        this.count++
      })
    },
    pageBtn(a) {
      this.page = a
    },
    upload(e) {
      let fileTest = e.target.files
      let url = URL.createObjectURL(fileTest[0])
      this.imageUrl = url
      this.page++
    },
    publish() {
      let myPosts = {
        name: 'Kim Hyun',
        userImage: 'https://picsum.photos/100?random=3',
        postImage: this.imageUrl,
        likes: 36,
        date: 'May 15',
        liked: false,
        content: this.write,
        filter: 'perpetua',
      }
      this.data.unshift(myPosts)
      this.page = 0
    },
    handleWrite(content) {
      this.write = content
    },
  },
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
/* .none {
  display: none;
}
.see {
  display: block;
} */
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: 'consolas';
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
