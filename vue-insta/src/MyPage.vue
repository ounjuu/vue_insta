<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔎" @input="search($event.target.value)" />
    <div class="post-header" v-for="(person, i) in follower" :key="i">
      <div class="profile" :style="{ backgroundImage: `url(${person.image})` }"></div>
      <span class="profile-name">{{ person.name }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref, toRefs, watch, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'mypage',
  props: {
    one: Number,
  },
  setup(props, context) {
    let follower = ref([])
    let followerOriginal = ref([])
    // let test = reactive({ name: 'kim' })
    // test

    let { one } = toRefs(props)
    console.log(one.value)

    function search(find) {
      const filterdFollower = followerOriginal.value.filter((x) =>
        x.name.toLowerCase().includes(find.toLowerCase()),
      )
      follower.value = [...filterdFollower]
    }

    // computed (연산 결과 저장)
    // let re = computed(() => {
    //   return follower.value.length
    // })

    // let store = useStore()
    // console.log(store.state.name)
    // console.log(store.commit())
    // one이 변경될 때 실행
    // watch((one) => {

    // })

    onMounted(() => {
      axios.get('/follower.json').then((a) => {
        follower.value = a.data
        followerOriginal.value = [...a.data]
      })
    })

    return { follower, search }
  },
}
</script>

<style></style>
