<script setup>

</script>

<template>
  <main class="px-24">
    <div class="bg w-full pt-20 px-20">
      <h1 class="text-4xl font-semi-bold mt-10 mb-8">MAGIC CODER STORE</h1>
      <h2 class="text-2xl mb-2">Get your coding equipments here..</h2>
      <h2 class="text-gray-500 text-normal">Buy items worth over $2,000 and get a free shipping fee to <br> anywhere around the world</h2>
      <router-link to="/shop">
        <button class="border border-gray-400 px-7 text-xl py-2 mr-5 mt-5 hover:text-white hover:bg-black hover:border-black transition duration-300 ease-in-out">Shop Now!</button>
      </router-link>
      <button @click="newsOpen" class="border border-gray-400 px-7 text-xl py-2 hover:text-white hover:bg-black hover:border-black transition duration-300 ease-in-out">Subscribe to our Newsletter</button>
    </div>
  </main>
</template>

<script>
// import { globalEvent } from '../components/java/globalEvent'

export default {
  name: 'Home',
  methods: {
    newsOpen() { this.$emit('openNews') }
    // newsOpen() {
    //   globalEvent.$emit('openNews')
    // }
  }
}
</script>

<style scoped>
  .bg{
    background: url(../components/icons/bg-image.png) center no-repeat;
    /* background-size: 1000px; */
    height: 74.5vh;
    background-position: 600px -22px;
  }
</style>
