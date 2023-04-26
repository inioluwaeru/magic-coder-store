<template>
    <div class="absolute w-full h-full z-10">
    <div class="fixed top-0 w-full h-screen bg-black bg" @click.self="emitNewsClose"></div>
    <div class="sub bg-white h-80 fixed top-40 right-64 px-7 text-center">
      <button @click="emitNewsClose" class="text-xl text-black hover:text-white hover:border-black hover:bg-black border px-3 py-2 absolute top-0 right-0 border-black">X</button>
      <h1 class="text-xl text-red-600 mt-20">GET UPDATES ON ALL NEW AVAILAIBLE PRODUCTS</h1>
      <input type="text" placeholder="Input your email" class="w-96 h-12 px-7 text-xl bg-gray-300 mt-5 outline-none"> <br> <br>
      <button class="text-xl border border-black px-10 py-2 hover:bg-black hover:text-white">sign up</button>
    </div>
  </div>
  </template>

<script>
export default {
    name: 'Subscribe',
    methods: {
        emitNewsClose() {
            this.$emit('newsClose')
        }
    }

}
</script>

<style scoped>
.bg{
    background-color: #0000009d;
}
.sub{
    width: 50rem;
}
</style>