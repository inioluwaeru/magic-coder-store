<template>
  <div class="w-full h-10 bg-black pl-12 py-2 flex justify-between">
    <input type="text" class="text-gray-500 bg-transparent border border-gray-800 pl-6 rounded pr-20 outline-none" placeholder="Search">
    <div>
      <a href="#" class="mr-5"><i class="material-icons text-white hover:text-red-600">facebook</i></a>
      <a href="#" class="mr-5"><i class="material-icons text-white hover:text-red-600">facebook</i></a>
      <a href="#" class="mr-5"><i class="material-icons text-white hover:text-red-600">facebook</i></a>
      <a href="#" class="mr-5"><i class="material-icons text-white hover:text-red-600">facebook</i></a>
    </div>
  </div>
 <nav class="h-auto flex justify-between  py-4 sticky top-0 z-100 bg-white">
  <router-link to="/">
    <img src="./icons/logo.png" class="w-16 h-12 ml-10" alt="">
  </router-link>
  <div class="h-full py-4">
    <router-link to="/">
      <a href="#" class="text-xl font-semi-bold hover:text-red-600 mr-5">Home</a>
    </router-link>
    <router-link to="/shop">
      <a href="#" class="text-xl font-semi-bold hover:text-red-600 mr-5">Shop</a>
    </router-link>
    <router-link to="/about">
      <a href="#" class="text-xl font-semi-bold hover:text-red-600 mr-5">About</a>
    </router-link>
    <router-link to="/contact">
      <a href="#" class="text-xl font-semi-bold hover:text-red-600 mr-5">Contact</a>
    </router-link>
  </div>
  <div class="mr-10 flex">
    <li @click="emitLogin" class="mr-5 cursor-pointer list-none"><i class="material-icons text-4xl text-black mt-2 hover:text-red-600">face</i></li>
    <li @click="emitCart" class="mr-5 cursor-pointer list-none"><i class="material-icons text-4xl text-black mt-2 hover:text-red-600">woman</i></li>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Headnav',
  methods: {
    emitCart() {
    this.$emit('cartClicked')
  },
    emitLogin() {
    this.$emit('loginClicked')
  }
}
}
</script>

<style>

</style>