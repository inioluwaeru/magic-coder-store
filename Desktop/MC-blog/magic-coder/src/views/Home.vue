<template>
  <div v-if="Reach">
    <Reachout @closeModal="toggleReach"/>
  </div>
  <div class="flex px-2">
    <div class="w-1/2 bg overflow-scroll px-7">
      <h1 class="text-xl">LATEST POSTS ON <span class="text-red-600 font-bold"> MAGIC CODER BLOG</span></h1>
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length" class="">
        <PostList :posts="posts"/>
      </div>
      <div v-else>Loading...</div>
    </div>
    <div class="w-1/2 background py-32 px-36">
      <router-link to="/allposts">
        <button class="h-16 w-80 bg-black font-extrabold text-white rounded font-bold hover:text-red-600">VIEW ALL POSTS</button><br>
      </router-link>
      <button @click="toggleReach" class="h-16 w-80 bg-black font-extrabold text-white rounded font-bold hover:text-red-600 mt-2">REACH OUT</button>
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import Reachout from '../components/Reachout.vue'
import getPosts from '../composable/getPosts'
export default {
  name: 'Home',
  data() {
    return {
      Reach: false
    }
  },
  methods: {
    toggleReach() {
      this.Reach = !this.Reach
    }
  },
  components: {
    PostList,
    Reachout,
  

  },
  setup() {
    const { posts, error, load } = getPosts()
    load()

    return{ posts,error,load }
  }
}
</script>
<style scoped>
  .background{
    background-image: url(../../public/images/logo.png);
    background-size: 120px;
    height: 27.5rem;
  }
  .bg{
    height: 27.5rem;
  }
</style>
