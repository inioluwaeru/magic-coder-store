<template>
  <div class="absolute w-full h-full z-10">
  <div class="fixed top-0 w-full h-screen bg-black bg pl-0" @click.self="emitLoginClose">
    <button @click="emitLoginClose" class="text-3xl text-gray-700 hover:text-white hover:border-black hover:bg-black border p-3 absolute right-96 border-gray-700">X</button>
  </div>
  <div class="bg-white w-96 h-screen fixed top-0 right-0 px-7 overflow-y-scroll overflow-x-hidden">
    <h1 class="text-3xl py-8 ">Login</h1>
    <hr>
    <div class="py-3 text-center">
            <input type="text" placeholder="Input email address.." class="w-80 py-3 px-4 bg-gray-300 text-xl outline-none">
            <input type="password" placeholder="Password" class="w-80 py-3 px-4 bg-gray-300 text-xl mt-5 outline-none">
            <button class="py-3 px-10 border border-black mt-7 hover:bg-black hover:text-white">Login</button> <br>
            <p class="mt-3">don't have an account yet? <a href="#" class="hover:text-red-600"> Register</a></p>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        emitLoginClose() {
        this.$emit('loginclosed')
    }
}
}
</script>

<style scoped>
.bg{
    background-color: #0000009d;
}
.cart-text{
    font-size: 16px;
}
</style>