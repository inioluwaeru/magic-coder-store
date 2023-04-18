<template>
  <div class="flex">
    <div class="w-2/3 pl-36 pt-5 d1">
        <div class="flex">
            <i class="material-icons text-4xl text-black hover:text-red-600">facebook</i>
            <a href="#" class="mt-1.5 ml-10 text-xl hover:text-red-600 ">Visit Our Facebook Page</a>
        </div>
        <div class="flex">
            <i class="material-icons text-4xl text-black hover:text-red-600">facebook</i>
            <a href="#" class="mt-1.5 ml-10 text-xl hover:text-red-600 ">Visit Our Facebook Page</a>
        </div>
        <div class="flex">
            <i class="material-icons text-4xl text-black hover:text-red-600">facebook</i>
            <a href="#" class="mt-1.5 ml-10 text-xl hover:text-red-600">Visit Our Facebook Page</a>
        </div>
        <div class="flex">
            <i class="material-icons text-4xl text-black hover:text-red-600">facebook</i>
            <a href="#" class="mt-1.5 ml-10 text-xl hover:text-red-600 ">Visit Our Facebook Page</a>
        </div>
        <div class="flex">
            <i class="material-icons text-4xl text-black hover:text-red-600">pin</i>
            <a href="#" class="mt-1.5 ml-10 text-xl hover:text-red-600 ">Manchester, London</a>
        </div>
        <div class="w-96 h-48 border mt-5" id="map"></div>
    </div>
    <div class="w-1/3 text-center d2 border-l-2 border-l-gray-400">
        <form action="#">
            <h1 class="text-2xl ">LEAVE US A MESSAGE</h1>
            <textarea name="" placeholder="Type your Message..." id="" cols="50" rows="5" class="border border-gray-500 mt-10 pl-2 text-gray-500 outline-none"></textarea><br>
            <button class="px-20 py-5 bg-black text-white font-bold hover:bg-red-600 hover:text-black hover:font-extrabold">SEND</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .d1{
        width: 650px;
        height: 27.5rem;
    }
    .d2{
        width: 700px;
        height: 27.5rem;
    }
</style>