<template>
    <div class="flex mt-10">
        <div class="w-60 h-48">
            <img :src="post.img" />
        </div>
        <div class="w-80 ml-8"> 
            <router-link :to="{ name: 'fullnews', params: {id:post.id}} ">
                <h3 class="text-2xl font-bold hover:text-red-600">{{ post.title }}</h3>
            </router-link>
            <p class="mt-5 text-l">{{ snippet }}</p>
            <div class="mt-3">
                <span v-for="tag in post.tags" class="p-1 ml-2 rounded bg-gray-400 " :key="tag">#{{ tag }} &nbsp</span>
            </div>
            <div class="flex justify-between w-60 px-4 py-2">
                <small>{{ post.date }}</small>
                <small>{{ post.time }}</small>
            </div>
        </div>
    </div>
</template>
 
<script> 
import{ computed } from 'vue'
export default {
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.substring(0,100) + '...'
        })


        return { snippet }
    }
}
</script>

<style>

</style>