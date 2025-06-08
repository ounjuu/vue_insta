import { createStore } from 'vuex'
import postData from './assets/data'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      name: 'kim',
      age: 20,
      //   likes: 0,
      //   isLiked: false,
      posts: postData,
      more: {},
    }
  },
  mutations: {
    setMore(state, data) {
      state.more = data
    },
    changeName(state) {
      state.name = 'park'
    },
    plusAge(state, ten) {
      state.age += ten
    },
    toggleLikes(state, id) {
      //   if (state.isLiked) {
      //     state.likes -= 1
      //     state.isLiked = false
      //   } else {
      //     state.likes += 1
      //     state.isLiked = true
      //   }
      const post = state.posts.find((a) => a.id === id)
      if (post) {
        if (post.liked) {
          post.likes -= 1
          post.liked = false
        } else {
          post.likes += 1
          post.liked = true
        }
      }
    },
  },
  actions: {
    getPosts(context) {
      axios.get('https://codingapple1.github.io/vue/more0.json').then((a) => {
        console.log(a.data)
        context.commit('setMore', a.data)
      })
    },
  },
})

export default store
