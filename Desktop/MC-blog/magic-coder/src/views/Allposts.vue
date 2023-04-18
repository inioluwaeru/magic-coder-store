<template>
    <div class="px-2">
      <div class="w-full bg overflow-scroll px-7">
        <h1 class="text-xl">LATEST POSTS ON <span class="text-red-600 font-bold"> MAGIC CODER BLOG</span></h1>
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length" class="">
          <PostList :posts="posts"/>
        </div>
        <div v-else>Loading...</div>
      </div>
    </div>
  </template>
  
  <script>
  import PostList from '../components/PostList.vue'
  import getPosts from '../composable/getPosts'
  export default {
    name: 'Home',
    components: { PostList },
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
  