<template>
    <div>
        
    </div>
  <div class="h-full w-full bg-black bg fixed top-0 text-center py-52" @click.self="$emit('closeModal')">
    <form action="#">
        <textarea class="text-xl  px-3 outline-none" cols="80" rows="5" placeholder="Leave a message..." ></textarea><br>
        <button class="h-16 w-72 bg-red-600 font-extrabold text-white rounded font-bold hover:text-black">SEND</button><br>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg{
    background: rgba(0, 0, 0, 0.87);
}

</style>