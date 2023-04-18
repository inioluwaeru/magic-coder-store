<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="d2 w-full text-center pt-10 px-16">
         <h3 class="text-3xl font-semibold">{{ post.title }}</h3>
         <p class="mt-10">{{ post.body }}</p>
         <button class="px-20 py-3 mt-7 bg-black text-white hover:bg-red-600 font-extrabold hover:text-black hover:font-extrabold">ALL POSTS</button>
    </div>
  </div>
 
</template>

<script>
import getPost from '../composable/getPost'

export default {
    props: ['id'],
    setup(props) {
        const { post, error, load } = getPost(props.id)

        load()

        return{ post, error }
    }
}
</script>

<style>
    .d2{
        height: 27.5rem;
    }
</style>