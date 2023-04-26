<template>
            <div class="px-7 w-full">
                <div class="w-72 h-40">
                    <img :src="product.img" class="w-64" alt="">
                </div>
                <hr class="text-black">
                <h1 class="mt-2">Name: {{ product.name }}</h1>
                <h1>Price: <span class="text-gray-500">{{product.price}}</span></h1>
            </div>
            <div class="mt-2.5">
                <button class="px-6 py-3 border border-black hover:text-white hover:bg-black mx-1 mt-3  transition duration-300 ease-in-out" @click="produce.add(this.product)">Add to Cart</button>
                <router-link :to="{ name: 'prodetails', params: {id: product.id} }">
                    <button class="px-4 py-3 border border-black hover:text-white hover:bg-black  transition duration-300 ease-in-out">Product Details</button>
                </router-link>
            </div>
</template>

<script>
import { produce } from '../components/java/java.js' 

export default {
    props: ['product'],
    data() {
        return {
            produce
        }
    },
    // methods: {
    //     add() {
    //         this.produce.push(this.product)
    //         console.log(this.produce)
    //     }
    // }
}
</script>

<style>

</style>