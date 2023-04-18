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
 <nav class="h-auto flex justify-between px-10 py-4">
  <router-link to="/">
    <img src="images/logo.png" class="w-28 h-20" alt="">
  </router-link>
  <div class="h-full py-4">
    <router-link to="/">
      <a href="#" class="text-xl font-bold hover:text-red-600 mr-5">Home</a>
    </router-link>
    <router-link to="/about">
      <a href="#" class="text-xl font-bold hover:text-red-600 mr-5">About</a>
    </router-link>
    <router-link to="/contact">
      <a href="#" class="text-xl font-bold hover:text-red-600 mr-5">Contact</a>
    </router-link>
  </div>
 </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>