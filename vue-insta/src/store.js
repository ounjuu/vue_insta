import { createStore } from 'vuex'
import postData from './assets/data'

const store = createStore({
  state() {
    return {
      name: 'kim',
      age: 20,
      //   likes: 0,
      //   isLiked: false,
      posts: postData,
    }
  },
  mutations: {
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
})

export default store
